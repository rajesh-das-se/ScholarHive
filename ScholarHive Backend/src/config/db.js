import mongoose from "mongoose";

const connectDB= async ()=>{
    try{
        await mongoose.connect(process.env.MongoURL);
        console.log("Connected to MongoDB");
    }catch(err){
        console.error("MongoDB connection Failed: ", err);
        process.exit(1);
    }
}

export default connectDB;