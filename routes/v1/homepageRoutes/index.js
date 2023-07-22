const express=require("express")
const { dashbardController } = require("../../../controller")
const homePageRouter=express.Router()

homePageRouter.post("/product",dashbardController.postProduct)
homePageRouter.get("/product",dashbardController.getProduct)

module.exports=homePageRouter