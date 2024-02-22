 const express = require('express')
 const cors = require('cors')
 const jwt =require('jsonwebtoken')
 const dbconnect = require('./Config/Dbconnection')
 const dotenv =require('dotenv').config()
 const User = require('./Models/User')
 const bcrypt =require('bcrypt')
 const nodemailer =require('nodemailer')
 const randomstring = require('randomstring')
// const authrouter =require('./Routes/Auth')
const app = express()
app.use(express.json())
// app.use('/auth',authrouter)
app.use(cors())

const userOTPMap = new Map()
// userlogin registration
app.post('/login',async(req, res)=>{
    try {
        const {email ,password} = req.body
        const user = await User.findOne({email})
        if(!user)
        {
         return res.json({status: false, message:'invalid User'})
        }
        const passwordMatch =await bcrypt.compare(password,user.password)
        if(!passwordMatch)
        {
         return res.json({status: false, message:'invalid Password'})
        }
       const token = jwt.sign({userId:user._id}, "secretKey",{expiresIn:"1h"});
        res.json({status: true, message: 'login successfully' , token : token})
     } catch (error) {
         console.log(error)
         res.status(500).json('Internal Server Error')
     }

})

// user registration
app.post('/register',async(req,res)=>{
    try { 
        const {username,password ,email}= req.body
        const hashedPassword = await bcrypt.hash(password,10)
        const user= new User({username,password:hashedPassword,email})
        await user.save()
        res.status(201).json('registration successful')
          } catch (error) {
            res.status(500).json('internal server error')
            console.log(error)
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
              return res.json({ status: true, message: 'OTP sent successfully' });
          }
      });
  } catch (error) {
      console.error(error);
      return res.json({ status: false, message: 'Error in forgot password' });
  }
});

// Reset Password Route with OTP verification
app.post('/resetpassword', async (req, res) => {
  const { email, otp, password } = req.body;

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
      userOTPMap.delete(email);

      // Hash and update the password
      const hashedPassword = await bcrypt.hash(password, 10);
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