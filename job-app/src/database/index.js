import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("mongodb connected successfully.");
    return conn;
  } catch (error) {
    console.log("error in database connection.", error);
  }
};

export default connectDB;
