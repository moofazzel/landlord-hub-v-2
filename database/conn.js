import mongoose from "mongoose";

const connectMongo = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_DB_URI);
    if (connection.readyState === 1) {
      console.log("Connected to MongoDB");
    }
  } catch (err) {
    return Promise.reject(err);
  }
};

// const connectMongo = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log("MongoDB connected successfully");
//   } catch (error) {
//     console.error("Failed to connect to MongoDB", error);
//   }
// };

export default connectMongo;
