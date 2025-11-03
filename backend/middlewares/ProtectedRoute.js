import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
const ProtectedRoute = async (req, res, next) => {
  try {
    const token = await req.cookies.jwt;
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized - No Token Provided",
        data: [],
        error: [],
      });
    }
    const decoded = await jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized - Invalid Token",
        data: [],
        error: [],
      });
    }
    const user = await User.findById(decoded.userId).select("-password");
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized - User Not Found",
        data: [],
        error: [],
      });
    } else {
      req.user = user;
      next();
    }
  } catch (error) {
    console.log("Error in protected Route Middleware", error);
    res.status(500).json({
      success: false,
      message: error.message,
      data: [],
      error: error,
    });
  }
};

export default ProtectedRoute;
