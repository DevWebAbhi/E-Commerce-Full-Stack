const express=require("express");

const app=express();

require("dotenv").config();

const productRouter=require("./Router/productRouter");

const { connect } = require("./database");

const PORT=process.env.PORT;

app.get("/",(req,res)=>{
    res.status(200).send({msg:"Welcome to E Commerce Backend"});
})

app.use("/product",productRouter);

app.use("/files", express.static(__dirname + '/Assets'));

app.listen(PORT,async()=>{
    try {
        await connect;
        console.log('Connected to server');
    } catch (error) {
        console.log('NOt able to connect');
    }
})