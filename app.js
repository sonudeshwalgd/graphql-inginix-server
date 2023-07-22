const express=require("express")
const cors=require("cors")
const helmet=require("helmet")
const compression = require('compression')

const {v1Routes}=require("./routes")

const app= express()

app.use(cors({origin:"*"}))

app.use(helmet())

app.use(compression())

app.use(express.json({limit: '50mb'}))

app.use(express.urlencoded({extended:true}))

app.get("/",(req,res)=>{
    return res.status(200).send("okay")
})


app.use("/",v1Routes)


module.exports=app