const mongoose=require("mongoose");

const MONGO_URL=process.env.MONGO_URL;

const MONGO_PASSWORD=process.env.PASSWORD

const connect=mongoose.connect(MONGO_URL);

module.exports={connect}