const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI);

const db = mongoose.connection;

db.on("error",(err)=>{
console.log("connection error:",err);
});

db.once("open",()=>{
console.log("MongoDB Connected");
});

module.exports = mongoose;