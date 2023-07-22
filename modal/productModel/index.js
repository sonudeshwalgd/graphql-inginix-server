const mongoose=require("mongoose")

const product = new mongoose.Schema({

name:{
    type:String,
    required: [true, 'User name is required'],
    validate: {
        validator: function(v) {
          return /^[A-Za-z]+(?:\s[A-Za-z]+)*$/.test(v);
        },
        message: props => `${props.value} is not a valid name`
      },
  },

img:{
    type:String,
    required: [true, 'Img is required'],
    validate: {
        validator: function(v) {
          return /^[A-Za-z]+(?:\s[A-Za-z]+)*$/.test(v);
        },
        message: props => `${props.value} is not a valid img`
      },
    },

price:{
    type:String,
    required: [true, 'Price is required'],
    validate: {
        validator: function(v) {
          return /^[A-Za-z0-9\s]+$/.test(v);
        },
        message: props => `${props.value} is not a valid price`
      },
    },
currency:{
    type:String,
    required: [true, 'Currency is required'],
    validate: {
        validator: function(v) {
          return /^[A-Za-z0-9\s]+$/.test(v);
        },
        message: props => `${props.value} is not a valid currency`
      },
    },
category:{
    type:String
    }
})



module.exports=mongoose.model("product",product)













