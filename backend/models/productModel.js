const mongoose = require('mongoose')

const modelProduct = new mongoose.Schema({
    image:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    }
},
{timestamps:true}
)

const model = new mongoose.model('product',modelProduct)
module.exports=model