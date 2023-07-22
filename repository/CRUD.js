class CRUDRepositor{
 
    constructor(model){
        this.model=model
    }

    async post(data){
        try {
          const res= await this.model.create(data)
          return res
        } catch (error) {
            
            return error
        }
    }
    async get(data){
        console.log(data)
        try {
            const payload={
                $or:[{_id:data?.id},{category:data?.category}]
            }    
            console.log(payload)

          const res= await this.model.find(payload)
          return res
        } catch (error) {
            return error
        }
    }
}

module.exports=CRUDRepositor