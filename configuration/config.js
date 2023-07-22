const dotenv=require("dotenv")
const  mongoose = require("mongoose")

dotenv.config({
    path:"./configuration/config.env"
})



const mongoConfig=async()=>{
   const res=await mongoose.connect(process.env.PRODUCTION_MONGODB_URI)
   console.log("database connected to "+ res.connection.host)
}

module.exports={
    DEVELOPMENT_PORT:process.env.DEVELOPMENT_PORT,
    mongoConfig,

}