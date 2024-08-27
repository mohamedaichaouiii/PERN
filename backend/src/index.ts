import express from "express";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

dotenv.config();
const PORT = process.env.PORT || 5001;
const app = express();
app.use(cookieParser()); // for parsing cookies
app.use(express.json()); // for parsing application/json
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

app.listen(PORT, () => {
  console.log(`Server is runing on port ${PORT} ...`);
});
