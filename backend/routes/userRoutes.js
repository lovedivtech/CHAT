import express from "express";
import ProtectedRoute from "../middlewares/ProtectedRoute.js";
import { getUserForSideBar } from "../controllers/userController.js";

const router = express.Router();

router.get("/", ProtectedRoute, getUserForSideBar);

export default router;
