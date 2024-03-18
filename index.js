import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import { UserRouter } from "./routes/user.js";
import { CourseRouter } from "./routes/course.js";

dotenv.config();

const app = express();

// Define CORS options
// const corsOptions = {
//   origin: "*", // Allow requests from any origin
//   credentials: true, // Allow credentials
// };
// Apply CORS middleware with options

// app.use(cors(corsOptions));

app.use(cors());
app.use(express.json());

app.use("/api/users", UserRouter);
app.use("/api/courses", CourseRouter);

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to Mongo DB");
  } catch (error) {
    console.log("MongoDB Error:", error);
  }
};

connect();

app.listen(process.env.PORT, () => {
  console.log("Server is Running on PORT:", process.env.PORT);
});
