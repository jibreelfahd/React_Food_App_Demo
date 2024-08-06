import mongoose from "mongoose";

const connectDB = async (dbURI) => { 
  return mongoose.connect(dbURI);
};

export default connectDB;
