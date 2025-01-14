import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      // Remove deprecated options
      // useNewUrlParser: true,  // No longer needed
      // useUnifiedTopology: true, // No longer needed
    });
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("Error connecting to MongoDB", error.message);
    process.exit(1);
  }
};

export default connectDB;
