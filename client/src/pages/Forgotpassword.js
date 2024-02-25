import React, { useRef, useState } from "react";
import Footer from "../components/Footer"
import Forgotcss from '../pages/Forgotpassword.css'
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import Navbar from '../components/Navbar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Forgotpassword() {
  const[email,setemail] =useState('')
  const Navigate =useNavigate()
  const emailref =useRef('')
// *************************validationform********************
const validateForm = () => {
  let formIsValid = true;

  // Validate email
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailref.current.value)) {
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
  if (formIsValid) {
    // Submit the form or perform other actions
    axios
      .post("http://localhost:3001/forgotpassword", { email })
      .then((responce) => {
        console.log(responce);
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
            Navigate("/resetpassword");
          }, 9000);
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
      <div className="container-fluid m-0 p-0 login-container p-5">
        <div className="container p-5 text-center">
        <Navbar/>
          <div className="sub-login-container   rounded drop-in-2 shadow-lg bg-light">
            <h1 className="font-weight-bold pt-5">Forgot Password ?</h1>
            <div className="login-form-container p-5 shadow-lg rounded">
              <form onSubmit={handlesubmit}>
              <div className=" pb-2">
                <input
                  type="text"
                  placeholder="Enter Email Address"
                  className="form-control rounded" ref ={emailref}
                  width="100%" onChange={(e)=> setemail(e.target.value)}
                />
              </div>
              <div className="pb-3">
                <button className="btn btn-danger  btn-block font-weight-bold rounded"type="submit">
                  Sent OTP
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

export default Forgotpassword;
