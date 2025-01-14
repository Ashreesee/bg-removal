import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // Establish connection
    const conn = await mongoose.connect(`${process.env.MONGODB_URI}/bg-removal`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Log successful connection
    console.log(`Database Connected: ${conn.connection.host}`);
  } catch (error) {
    // Log errors and exit the process
    console.error(`Error: ${error.message}`);
    process.exit(1); // Exit with failure
  }
};

export default connectDB;
