const CURDRepository=require("../CRUD")
const {requestFormModal}=require("./../../modal")


class dashboardRepositories extends CURDRepository{
    constructor(){
        super(requestFormModal)
    }

}



module.exports={dashboardRepositories}