import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connect(
      process.env.MONGO_URL,
      console.log("Connected to MongoDB")
    );
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit the process if there's an error
  }
};

export default connectDB;
