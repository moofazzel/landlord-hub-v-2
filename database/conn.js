import mongoose from "mongoose";
const connectMongo = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI, {
      dbName: process.env.MONGO_DB_NAME,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
  }
};

export default connectMongo;
