import React, { useRef, useState } from "react";
import Footer from "../components/Footer"
import './Resetpassword.css'
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Resetpassword() {
  const [newpassword,setnewpassword]=useState('')
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
  const[resetfail,setresetfail]=useState('')
// *************************validationform********************
const validateForm = () => {
  let formIsValid = true;

   // Validate email
   if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailRef.current.value)) {
    toast.warning("Invalid email address",{
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored"
      })
    formIsValid = false;
  }
 // Validate password
 if (passwordRef.current.value.length < 6) {
    toast.warning("Password must be at least 6 characters long",{
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored"
      })
    formIsValid = false;
  }
   // Validate otp
   if (otpRef.current.value.length < 6) {
    toast.warning("Invalid OTP",{
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored"
      })
    formIsValid = false;
  }
  
  if (formIsValid) {
    // Submit the form or perform other actions
    
    axios
      .post(`http://localhost:3001/resetpassword`, { newpassword ,otp,email })
      .then((responce) => {
       if(responce.data.status)
       {
       toast.success(responce.data.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored"
        })
        setTimeout(() => {
          Navigate("/login");
        }, 2000);
       } 
       else{
       toast.error(responce.data.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored"
        })
       }
      })
      .catch((err) => {
        console.log(err);
      });

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
      <div className="container-fluid m-0 login-container p-5">
        <div className="container sub-forgot p-5 text-center rounded">
          <Navbar/>
          <div className="sub-login-container  shadow-lg rounded drop-in-2 bg-light">
            <h1 className="font-weight-bold pt-3">Reset Password ?</h1>
            <div className="login-form-container  p-5 shadow-lg rounded">
              <form onSubmit={handlesubmit}>
              <div className="pt-2 pb-2">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="form-control rounded" ref ={emailRef}
                  width="100%" onChange={(e)=> setemail(e.target.value)}
                />
              </div>
              <div className="pt-2 pb-2">
                <input
                  type="text"
                  placeholder="Please Enter OTP"
                  className="form-control rounded" ref ={otpRef}
                  width="100%" onChange={(e)=> setotp(e.target.value)}
                />
              </div>
              <div className="pt-2 pb-2">
                <input
                  type="password"
                  placeholder="Enter New Password"
                  className="form-control rounded" ref ={passwordRef}
                  width="100%" onChange={(e)=> setnewpassword(e.target.value)}
                />
              </div>
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
      <ToastContainer/>
    </div>
  );
}

export default Resetpassword;
