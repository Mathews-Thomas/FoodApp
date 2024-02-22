import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Cart from '../pages/Cart';
import Forgotpassword from '../pages/Forgotpassword';
import Resetpassword from '../pages/Resetpassword';
import Loginhome from '../pages/Loginhome';
import Loginnavbar from '../components/Loginnavbar';
function Approuter() {
  return (
    <Router>
      <div>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/forgotpassword" element={<Forgotpassword/>} />
        <Route path="/resetpassword" element={<Resetpassword/>} />
        <Route path="/Loginhome" element={<Loginhome/>} />
        <Route path="/Loginnavbar" element={<Loginnavbar/>} />
      </Routes>
      </div>
    </Router>
  )
}

export default Approuter