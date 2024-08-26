import express from "express";

const router = express.Router();

router.get("/conversation", (req, res) => {
    res.send("Conversation fetched successfully");
});






export default router;