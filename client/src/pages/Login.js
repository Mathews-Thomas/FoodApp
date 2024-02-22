import React, { useRef, useState } from "react";
import '../pages/Login.css'
import fblogo from "../images/facebook (1).png"
import googlelogo from "../images/search (1).png"
import twitterlogo from "../images/twitter (2).png"
import Footer from "../components/Footer"
import axios, { Axios } from "axios"
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

function Login() {
  const[email,setemail] =useState()
  const[password,setpassword] = useState()
  const Navigate =useNavigate()
  const emailref =useRef()
  const passwordref=useRef()
  const[emailerror,setemailerror]=useState()
  const[passworderror,setpassworderror]=useState()
  const[loginmessage,setloginmessage] =useState()
// *************************validationform********************

const validateForm = () => {
  let formIsValid = true;
  // Validate email
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailref.current.value)) {
    setemailerror("Invalid email address");
    formIsValid = false;
  }

  // Validate password
  if (passwordref.current.value.length < 6) {
    setpassworderror("Password must be at least 6 characters long");
    formIsValid = false;
  }

  if (formIsValid) {
    // Submit the form or perform other actions
   
    axios
      .post("http://localhost:3001/login", { password, email })
      .then((responce) => {
        if(responce.data.status) 
        {
          setloginmessage(responce.data.message);
          setpassworderror("");
          setemailerror("");
          setTimeout(() => {
            Navigate("/loginhome");
          }, 2000); 
        }
       else{
        setloginmessage(responce.data.message )
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
      <div className="container-fluid m-0 p-0 login-container p-5">
        <div className="container sub-login p-5 text-center rounded">
          <div className="sub-login-container   rounded drop-in-2">
            <h1 className="font-weight-bold pb-5">Login</h1>
            <p className="text-muted pt-5">
              More than <span className="text-danger">15,000 recipes</span> from
              around the world!
            </p>
            <div className="login-form-container  p-5 ">
              <form onSubmit={handlesubmit}>
              <div className="pt-4 pb-2">
                <input
                  type="text"
                  placeholder="Enter Email Address"
                  className="form-control rounded" ref ={emailref}
                  width="100%" onChange={(e)=> setemail(e.target.value)}
                />
              </div>
              <div style={{color:'red',fontSize:'15px'}}>{emailerror}</div>
              <div>
                {" "}
                <input
                  type="password"
                  placeholder="Password" ref={passwordref}
                  className="form-control rounded" onChange={(e)=> setpassword(e.target.value)}
                />
              </div>
              <div style={{color:'red',fontSize:'15px'}}>{passworderror}</div>
              <div className="pt-3 pb-3">
                <Link className="text-muted" to="/forgotpassword">
                  Forgot Password ?
                </Link>
                <div className="mt-2"><Link to ="/signup" className="text-muted">New user? Register here</Link></div>
              </div>
              <div className="pb-3">
                <button className="btn btn-danger  btn-block font-weight-bold rounded"type="submit">
                  LOGIN
                </button>
              </div>
              <div style={{color:'green',fontSize:'15px'}}>{loginmessage}</div>
              </form>
              <div className="pt-2 pb-3 text-muted">Login with</div>
              <div className="d-flex justify-content-center">
                <div className="p-3">
                  <a href="">
                    <img src={fblogo}/>
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
          
        </div>
        <Footer/>
      </div>
      
    </div>
  );
}

export default Login;
