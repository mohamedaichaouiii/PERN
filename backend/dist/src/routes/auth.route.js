import express from "express";
import { login, logout, signup, getMe } from "../controllers/auth.controller.js";
import protectRoute from "../middleware/protectRoute.js";
const router = express.Router();
router.get("/me", protectRoute, getMe); //function that run after we request somthing before we put the result
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
export default router;
