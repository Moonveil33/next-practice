import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    if (mongoose.connections[0].readyState) {
      return false;
    } else {
      await mongoose.connect("mongodb://localhost:27017/next-cms");
      console.log("Connected to DB Successfully");
    }
  } catch (err) {
    console.log("DB Connection Error ===>", err);
  }
};

export default connectToDB;
