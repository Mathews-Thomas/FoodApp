const mongoose = require('mongoose')
const dbconnect =  async ()=>
{
    try {
        await mongoose.connect(process.env.CONNECTION_STRING,{useNewUrlParser:true,useUnifiedTopology:true})
        console.log('database connected')
    } catch (error) {
        console.log(error)
    }
}
module.exports =dbconnect