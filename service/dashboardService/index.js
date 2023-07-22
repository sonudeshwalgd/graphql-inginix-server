const {dashboardRepositories}=require("../../repository")

const repository=new dashboardRepositories()

const postProductService=async (data)=>{
    try {
        const res=await repository.post(data)
        return res
    } catch (error) {
            return error
    }
}
const getProductService=async (data)=>{
    try {
        
        const res=await repository.get(data)
        return res
    } catch (error) {
            return error
    }
}




module.exports={postProductService,getProductService}
