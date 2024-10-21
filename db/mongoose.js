const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/Inventory_Managment_System");

const db = mongoose.connection;

db.once('open', (err)=>{
    if(err){
        console.log("db is connected");
    }
    console.log("db connected");
})

module.exports = db ;