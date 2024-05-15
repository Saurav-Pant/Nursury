import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    await mongoose.connect("Put Your URL");
    console.log("MongoDB connected");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};

export default connectToDB;
