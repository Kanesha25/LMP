import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import { UserRouter } from "./routes/user.js";
dotenv.config();

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use("/auth", UserRouter);

mongoose.connect(
  "mongodb+srv://psajjitha:sajjitha@cluster0.mnfwwyq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);

app.listen(process.env.PORT, () => {
  console.log("Server is Running");
});

//node modules are not installed
