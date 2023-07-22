const { dashboardService } = require("../../service")

async function postProduct(req,res){
    try {
        const data={
            title:req.body?.title,
            img:req.body?.img,
            currency:req.body?.currency,
            price:req.body?.price,
            category:req?.body?.category,
            description:req?.body?.description,
            id:req?.body?.id,
        }

       const response=await dashboardService.postProductService(data)
       
       if (response?.name === "ValidationError"){
           return  res.status(400).send(response)
       }
        return  res.status(200).send(response)
        
    } catch (error) {
        return  res.status(400).send(error)
    }
}
async function getProduct(req,res){
    try {
        const data={
            id:req.body?.id,
            category:req.body?.category,
        }

       const response=await dashboardService.getProductService(data)
       
       if (response?.name === "ValidationError"){
           return  res.status(400).send(response)
       }
        return  res.status(200).send(response)
        
    } catch (error) {
        return  res.status(400).send(error)
    }
}

module.exports={postProduct,getProduct}