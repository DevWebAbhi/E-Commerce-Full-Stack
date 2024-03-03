const mongoose=require("mongoose");

const MONGO_URL=process.env.MONGO_URL;

const MONGO_PASSWORD=process.env.PASSWORD

const connect=mongoose.connect("mongodb+srv://abhishek:e-commerce@cluster0.kurdxa8.mongodb.net/");

module.exports={connect}