const { Db } = require('mongodb');
const mongoose = require('mongoose');

mongoose.connect(process.env.mongo_url)

const db =mongoose.connection;

db.on("connected", ()=>{
    console.log("MongoDB connection successful")
});

db.on("error", ()=>{
    console.log("MongoDB connection failed.")
});