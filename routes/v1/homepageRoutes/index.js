const express=require("express")
const { dashbardController } = require("../../../controller")
const homePageRouter=express.Router()

homePageRouter.post("/add-product",dashbardController.postProduct)
homePageRouter.post("/get-product",dashbardController.getProduct)

module.exports=homePageRouter