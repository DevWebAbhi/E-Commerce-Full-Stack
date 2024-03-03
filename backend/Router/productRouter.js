const express=require("express");

const productRouter=express.Router();

const {productModel}=require("../Model/productModel");

productRouter.get("/:page",async(req,res)=>{
    try {
        const id=req.params["page"];
        const {page}=req.query;
            if(id!=-1){
                const data=await productModel.findOne({pID:id});
                res.status(200).send({msg:"sucess",data:data});
            }else{
                const data=await productModel.find({$and:[{pID:{$gt:(8*page)-8}},{pID:{$lte:(8*page)}}]});
                res.status(200).send({msg:"sucess",data:data});
            }
        
    } catch (error) {
        res.status(400).send({msg:"error"});
    }
});



module.exports=productRouter;