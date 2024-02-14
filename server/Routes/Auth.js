const express = require('express')
const bcrypt =require('bcrypt')
const User = require('../Models/User')
const router = express.Router()
// ************************************foodapp usercreation for login************************************************
router.post('/register', async  (req, res) =>{
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
module.exports = router