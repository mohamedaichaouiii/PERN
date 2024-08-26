import express from "express";
import authRoutes from "./routes/auth.route.js"
import messageRoutes from "./routes/message.route.js"
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

dotenv.config();
const app =express();
app.use(cookieParser()); // for parsing cookies
app.use(express.json()); // for parsing application/json
app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoutes)


app.listen(5000,()=>{
    console.log("Server is runing on port 5000....");
});

