import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connect(
      "mongodb+srv://mingohuts:f5z1RegL276XvLx2@backend.2rqdqkg.mongodb.net/?retryWrites=true&w=majority",
      console.log("Connected to MongoDB")
    );
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit the process if there's an error
  }
};

export default connectDB;
