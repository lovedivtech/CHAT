import express from "express";
import { getMessages, sendMessage } from "../controllers/messageController.js";
import ProtectedRoute from "../middlewares/ProtectedRoute.js";

const router = express.Router();

router.get("/:id", ProtectedRoute, getMessages);
router.post("/send/:id", ProtectedRoute, sendMessage);

export default router;
