 const express = require('express')
 const cors = require('cors')
 const dbconnect = require('./Config/Dbconnection')
 const dotenv =require('dotenv').config()
 const user = require('./Models/User')
// const authrouter =require('./Routes/Auth')
const app = express()
app.use(express.json())
// app.use('/auth',authrouter)
app.use(cors())
app.post('/login',(req, res)=>{
const {email,password} =req.body
user.findOne({email: email}).then((user)=>{
    if(user)
    {
        if(user.password ===password)
        {
            res.json('success')
        }else{
            res.json('the password is incorrect')
        }
       
    }
    else{
        res.json('no email registered')
    }
})

})
app.post('/register',(req,res)=>{
user.create(req.body).then((responce)=>{
    res.json(responce)
     
}).catch((err)=>res.json(err))
})

const port = process.env.PORT || 3002
app.listen(port, () =>
{ 
    dbconnect()
    console.log(`Example app listening on port ${port}!`
)})