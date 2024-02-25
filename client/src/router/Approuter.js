import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Cart from '../components/Cart';
import Forgotpassword from '../pages/Forgotpassword';
import Resetpassword from '../pages/Resetpassword';
import Loginhome from '../pages/Loginhome';
import Loginnavbar from '../components/Loginnavbar';
import Admin from '../pages/admin/Admin';
import Orders from '../components/Orders';
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
        <Route path="/admin" element={<Admin/>} />
        <Route path="/orders" element={<Orders/>} />
      </Routes>
      </div>
    </Router>
  )
}

export default Approuter