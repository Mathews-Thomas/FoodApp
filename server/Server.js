 const express = require('express')
 const cors = require('cors')
 const jwt =require('jsonwebtoken')
 const dbconnect = require('./Config/Dbconnection')
 const dotenv =require('dotenv').config()
 const User = require('./Models/User')
 const bcrypt =require('bcrypt')
 const nodemailer =require('nodemailer')
const randomstring =require('randomstring')
// const authrouter =require('./Routes/Auth')
const app = express()
app.use(express.json())
// app.use('/auth',authrouter)
app.use(cors())

const userOTPMap = new Map();

// userlogin registration
app.post('/login',async(req, res)=>{
    try {
        const {email ,password} = req.body
        const user = await User.findOne({email})
        if(!user)
        {
         return res.json({status: false, message:'Invalid user'})
        }
        const passwordMatch =await bcrypt.compare(password,user.password)
        if(!passwordMatch)
        {
         return res.json({status: false, message:'Invalid password'})
        }
       const token = jwt.sign({userId:user._id}, "secretKey",{expiresIn:"1h"});
        res.json({status: true, message: 'Login Success' , token : token})
     } catch (error) {
         console.log(error)
         res.json('Internal Server Error')
     }

})

// user registration
app.post('/register',async(req,res)=>{
  try {
    const { username, password, email ,role} = req.body;

    // Check if the email is already registered
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return res.json({ status: false, message: 'Email is already registered' });
    }
else if(role== User.role)
{
    return res.json({ status: true, message: 'Admin Registration successful' });
}
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, password: hashedPassword, email });
    await user.save();

    return res.json({ status: true, message: 'Registration successful' });
} catch (error) {
    console.error(error);
    return res.json({ status: false, message: 'Internal Server Error' });
}
})

// Forgot Password with OTP
app.post('/forgotpassword', async (req, res) => {
  const { email } = req.body;

  try {
      const user = await User.findOne({ email });

      if (!user) {
          return res.json({ status: false, message: 'User not registered' });
      }

      // Generate a random OTP
      const otp = randomstring.generate({
          length: 6,
          charset: 'numeric',
      });

      // Store the OTP with the user's email
      userOTPMap.set(email, otp);

      const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
              user: 'mathewsthomasofficial@gmail.com',
              pass: 'uutr ylqg bkgc oppp', // Use environment variable for security
          },
      });

      const mailOptions = {
          from: 'mathewsthomasofficial@gmail.com',
          to: email,
          subject: 'Reset Password for Food Express',
          text: `Your OTP for password reset is: ${otp}`,
      };

      transporter.sendMail(mailOptions, function (error, info) {
          if (error) {
              return res.json({ status: false, message: 'Error sending email' });
          } else {
              return res.json({ status: true, message: `OTP has been sent to ${email} successfully` });
          }
      });
  } catch (error) {
      console.error(error);
      return res.json({ status: false, message: 'Error in forgot password' });
  }
});

// Reset Password Route with OTP verification
app.post('/resetpassword', async (req, res) => {
  const { email, otp, newpassword } = req.body;

  try {
      const user = await User.findOne({ email });

      if (!user) {
          return res.json({ status: false, message: 'User not registered' });
      }

      // Retrieve stored OTP for the user
      const storedOTP = userOTPMap.get(email);

      if (!storedOTP || storedOTP !== otp) {
          return res.json({ status: false, message: 'Invalid OTP' });
      }

      // Reset the stored OTP
      userOTPMap.delete(email );

      // Hash and update the password
      const hashedPassword = await bcrypt.hash(newpassword, 10);
      await User.findByIdAndUpdate({ _id: user._id }, { password: hashedPassword });

      return res.json({ status: true, message: 'Password updated successfully' });
  } catch (error) {
      console.error(error);
      return res.json({ status: false, message: 'Error in reset password' });
  }
});

const port = process.env.PORT || 3002
app.listen(port, () =>
{ 
    dbconnect()
    console.log(`Example app listening on port ${port}!`
)})