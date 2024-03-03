const mongoose=require("mongoose");

const schema=mongoose.Schema({
    pID:{type:Number , required:true},
    title:{type:String , required:true},
    image:{type:String , required:true},
    price:{type:Number , required:true},
    description:{type:String , required:true},
})

const productModal=mongoose.model("products",schema);

module.exports={
    productModal
};