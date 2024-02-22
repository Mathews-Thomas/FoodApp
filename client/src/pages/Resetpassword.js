import React, { useRef, useState } from "react";
import Footer from "../components/Footer"
import './Resetpassword.css'
import axios from "axios"
import { useNavigate } from 'react-router-dom';

function Resetpassword() {
  const [password,setpassword]=useState('')
  const[email,setemail]=useState('')
  const[otp,setotp]=useState('')
  const Navigate =useNavigate()
  const passwordRef =useRef()
  const emailRef= useRef()
  const otpRef = useRef()
  const[passworderror,setpassworderror]=useState('')
  const[emailerror,setemailerror]=useState('')
  const[otperror,setotperror]=useState('')
  const[resetsuccess,setresetsuccess]=useState('')
// *************************validationform********************
const validateForm = () => {
  let formIsValid = true;

   // Validate email
   if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailRef.current.value)) {
    setemailerror("Invalid email address");
    formIsValid = false;
  }
 // Validate password
 if (passwordRef.current.value.length < 6) {
    setpassworderror("Password must be at least 6 characters long");
    formIsValid = false;
  }
   // Validate otp
   if (otpRef.current.value.length < 6) {
    setotperror("Invalid OTP");
    formIsValid = false;
  }
  
  if (formIsValid) {
    // Submit the form or perform other actions
    
    axios
      .post(`http://localhost:3001/resetpassword`, { password ,otp,email })
      .then((responce) => {
       if(responce.data.status)
       {
        console.log(responce);
        setresetsuccess(responce.data.message);
       }
       else{
        setresetsuccess(responce.data.message);
       }
      })
      .catch((err) => {
        console.log(err);
      });
    // setTimeout(() => {
    //   Navigate("/login");
    // }, 2000);
  } else {
    console.log("form error");
  }
};

const handlesubmit = (e) => {
  e.preventDefault();
  validateForm();
};
return (
    <div>
      <div className="container-fluid m-0 p-0 login-container p-5">
        <div className="container sub-forgot p-5 text-center rounded">
          <div className="sub-login-container   rounded drop-in-2">
            <h1 className="font-weight-bold pb-5">Reset Password</h1>
            <div className="login-form-container  p-5 ">
              <form onSubmit={handlesubmit}>
              <div className="pt-4 pb-2">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="form-control rounded" ref ={emailRef}
                  width="100%" onChange={(e)=> setemail(e.target.value)}
                />
              </div>
              <div style={{color:'red',fontSize:'15px'}}>{emailerror}</div>
              <div className="pt-4 pb-2">
                <input
                  type="text"
                  placeholder="Please Enter OTP"
                  className="form-control rounded" ref ={otpRef}
                  width="100%" onChange={(e)=> setotp(e.target.value)}
                />
              </div>
              <div style={{color:'red',fontSize:'15px'}}>{otperror}</div>
              <div className="pt-4 pb-2">
                <input
                  type="password"
                  placeholder="Enter New Password"
                  className="form-control rounded" ref ={passwordRef}
                  width="100%" onChange={(e)=> setpassword(e.target.value)}
                />
              </div>
              <div style={{color:'red',fontSize:'15px'}}>{passworderror}</div>
              <div style={{color:'green',fontSize:'15px'}}>{resetsuccess}</div>
              <div className="pb-3 pt-3">
                <button className="btn btn-danger  btn-block font-weight-bold rounded"type="submit">
                  Reset Password
                </button>
              </div>
              </form>
            </div>
          </div>
          
        </div>
        <Footer/>
      </div>
      
    </div>
  );
}

export default Resetpassword;
