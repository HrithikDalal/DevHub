const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

const connectDB = async () =>{
    try{
        await mongoose.connect(db , { 
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
         });
        console.log("Connection Established with MongoDB Atlas server...");
    }catch(err){
        console.error(err.message);
        //Exit process with faliure
        process.exit(1);
    }
}

module.exports = connectDB;