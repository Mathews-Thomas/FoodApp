import React from "react";
import "../pages/Signup.css";
import fblogo from "../images/facebook (1).png";
import googlelogo from "../images/search (1).png";
import twitterlogo from "../images/twitter (2).png";
import Footer from "../components/Footer";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import  { useRef } from 'react';
function Signup() {
  const [username,setusername] =useState()
  const [email,setemail] =useState()
  const [password,setpassword] =useState()
  const Navigate =useNavigate()
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const[nameerror,setnameerror] =useState()
  const[emailerror,setemailerror] =useState()
  const[passworderror,setpassworderror] =useState()
  const[formvalid,setformvalid] =useState()
  
  const validateForm = () => {
    let formIsValid = true;

    // Validate username
    if (usernameRef.current.value.length < 3) {
      setnameerror('Username must be at least 3 characters long')
      formIsValid = false;

    }

    // Validate email
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailRef.current.value)) {
      setemailerror('Invalid email address')
      formIsValid = false;
    }

    // Validate password
    if (passwordRef.current.value.length < 6) {
      setpassworderror('Password must be at least 6 characters long')
      formIsValid = false;
    }

    if (formIsValid) {
      // Submit the form or perform other actions
      setformvalid('Form submitted successfully!')
      setTimeout(() => {
        Navigate("/login")
      }, 2000);
    } else {
      console.log('form error')
    }
  };

const handlesubmit =(e)=>{
  e.preventDefault()
validateForm()
    axios.post('http://localhost:3001/register',{username,password,email}).then((responce)=>{
      console.log(responce)
    }).catch((err)=>{
      console.log(err)
    })
}
  return (
    <div>
      <div className="container-fluid m-0 p-0 signup-container p-5">
        <div className="container sub-signup  text-center d-flex flex-wrap rounded">
          <div className="row">
            <div className="col-lg-6 p-4 bg-white">
              <div className="login-form-container  rounded drop-in-2">
                <h1>Sign up</h1>
                <form onSubmit={handlesubmit}>
                <div className="pt-4 pb-3">
                  {" "}
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="form-control rounded" ref={usernameRef}
                    onChange={(e)=> setusername(e.target.value) }
                  />
                  <div style={{color:"red" ,fontSize:"15px"}}>{nameerror}</div>
                </div>
                <div className="pb-3">
                  {" "}
                  <input
                    type="text"
                    placeholder="Enter Email Address"
                    className="form-control rounded" ref={emailRef}
                    onChange={(e)=> setemail(e.target.value)}
                  />
                   <div style={{color:"red" ,fontSize:"15px"}}>{emailerror}</div>
                </div>
                <div>
                  {" "}
                  <input
                    type="password"
                    placeholder="Password"
                    className="form-control rounded" ref={passwordRef}
                    onChange={(e)=> setpassword(e.target.value)}
                  />
                  <div style={{color:"red" ,fontSize:"15px"}}>{passworderror}</div>
                </div>
                
                <div className="pt-3 pb-3">
                  <a className="text-muted" href="">
                    Forgot Password ?
                  </a>
                </div>
                <div className="pb-3">
                  <button className="btn btn-danger  btn-block font-weight-bold rounded"  type="submit">
                    SIGNUP
                  </button>
                </div>
                <div style={{color:"green" ,fontSize:"15px"}}>{formvalid}</div>
                </form>
                <div className="pt-2 pb-3 text-muted">Login with</div>
                <div className="d-flex justify-content-center">
                  <div className="p-3">
                    <a href="">
                      <img src={fblogo} />
                    </a>
                  </div>
                  <div className="p-3">
                    <a href="">
                      <img src={googlelogo} />
                    </a>
                  </div>
                  <div className="p-3">
                    <a href="">
                      <img src={twitterlogo} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="p-5">
                <div className="p-5">
                  {" "}
                  <h1>Create Account</h1>
                  <h4>What you will get ?</h4>
                  <p className="text-muted">
                    1. Manage your recipes the easy way.
                  </p>
                  <p className="text-muted">
                    2. Share recipes with your friends and discover new ones.
                  </p>
                  <p className="text-muted">
                    3. More than 15,000 recipes around the world!
                  </p>
                  <p className="text-muted">
                    4. Organize recipes by tag ,share with yoyur friends.
                  </p>
                  <p className="text-muted">
                    5. Invite your friends to join and start sharing your
                    recipes in a flash.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Signup;
