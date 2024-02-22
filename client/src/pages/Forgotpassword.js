import React, { useRef, useState } from "react";
import Footer from "../components/Footer"
import Forgotcss from '../pages/Forgotpassword.css'
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

function Forgotpassword() {
  const[email,setemail] =useState('')
  const Navigate =useNavigate()
  const emailref =useRef('')
  const[emailerror,setemailerror]=useState('')
  const[emailsuccess,setemailsuccess]=useState('')
// *************************validationform********************
const validateForm = () => {
  let formIsValid = true;

  // Validate email
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailref.current.value)) {
    setemailerror("Invalid email address");
    formIsValid = false;
  }
  if (formIsValid) {
    // Submit the form or perform other actions
    axios
      .post("http://localhost:3001/forgotpassword", { email })
      .then((responce) => {
        console.log(responce);
        if(responce.data.status)
        {
          setemailsuccess(responce.data.message);
          setemailerror("")
        }
        else{
          setemailerror(responce.data.message)
        }
      })
      .catch((err) => {
        console.log(err);
      });
    setTimeout(() => {
      Navigate("/resetpassword");
    }, 9000);
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
            <h1 className="font-weight-bold pb-5">Forgot Password ?</h1>
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
              <div style={{color:'green',fontSize:'15px'}}>{emailsuccess}</div>
              <div style={{color:'red',fontSize:'15px'}}>{emailerror}</div>
              <div className="pb-3">
                <button className="btn btn-danger  btn-block font-weight-bold rounded"type="submit">
                  Sent Email
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

export default Forgotpassword;