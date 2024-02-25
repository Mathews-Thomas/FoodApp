import React from "react";
import "../pages/Signup.css";
import fblogo from "../images/facebook (1).png";
import googlelogo from "../images/search (1).png";
import twitterlogo from "../images/twitter (2).png";
import Footer from "../components/Footer";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import Navbar from '../components/Navbar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Signup() {
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const Navigate = useNavigate();
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  

  const validateForm = () => {
    let formIsValid = true;

    // Validate username
    if (usernameRef.current.value.length < 3) {
      toast.warning('Username must be at least 3 characters long',{
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

    // Validate email
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailRef.current.value)) {
      toast.warning('Invalid email address',{
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
      toast.warning('Password must be at least 6 characters long',{
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
  
      axios
        .post("http://localhost:3001/register", { username, password, email })
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
      <div className="container-fluid m-0 signup-container p-5">
      <Navbar/>
        <div className="container sub-signup  text-center d-flex flex-wrap rounded">
          <div className="row">
            <div className="col-lg-6 p-5 ">
              <div className="login-form-container rounded drop-in-2 p-5 shadow-lg bg-light">
                <h1>Sign up</h1>
                <form onSubmit={handlesubmit}>
                  <div className="pt-4 pb-3">
                    {" "}
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="form-control rounded"
                      ref={usernameRef}
                      onChange={(e) => setusername(e.target.value)}
                    />
                  </div>
                  <div className="pb-3">
                    {" "}
                    <input
                      type="text"
                      placeholder="Enter Email Address"
                      className="form-control rounded"
                      ref={emailRef}
                      onChange={(e) => setemail(e.target.value)}
                    />
                  </div>
                  <div>
                    {" "}
                    <input
                      type="password"
                      placeholder="Password"
                      className="form-control rounded"
                      ref={passwordRef}
                      onChange={(e) => setpassword(e.target.value)}
                    />
                  </div>
                  <div className="pb-3 pt-3">
                    <button
                      className="btn btn-danger  btn-block font-weight-bold rounded"
                      type="submit"
                    >
                      SIGNUP
                    </button>
                  </div>
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
      <ToastContainer />
    </div>
  );
}

export default Signup;
