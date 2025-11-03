import { success } from "zod";
import User from "../models/userModel.js";
import {
  comparePassword,
  hashPassword,
  randomUsername,
} from "../services/authService.js";
import { generateTokenAndCookie } from "../utils/JWT.js";

export const signup = async (req, res) => {
  try {
    const { fullName, email, password, confirmPassword, gender } = req.body;
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }
    const user = await User.findOne({ email }).select("-password");
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }
    const username = randomUsername(fullName);
    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}$size=200`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}$size=200`;
    const profilePic = gender === "male" ? boyProfilePic : girlProfilePic;
    const newUser = new User({
      fullName,
      email,
      username,
      password: await hashPassword(password),
      gender,
      profilePic: profilePic,
    });
    const token = generateTokenAndCookie(newUser._id, req, res);
    await newUser.save();
    res.status(201).json({
      success: true,
      message: "User created successfully",
      data: {
        _id: newUser._id,
        fullName: newUser.fullName,
        email: newUser.email,
        username: newUser.username,
        gender: newUser.gender,
        profilePic: newUser.profilePic,
        token: token,
      },
      error: [],
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
      data: [],
      error: error,
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }
    await comparePassword(password, user.password);
    const token = generateTokenAndCookie(user._id, req, res);
    res.status(200).json({
      success: true,
      message: "User logged in successfully",
      data: {
        _id: user._id,
        fullName: user.fullName,
        email: user.email,
        username: user.username,
        gender: user.gender,
        profilePic: user.profilePic,
        token: token,
      },
      error: [],
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
      data: [],
      error: error,
    });
  }
};

export const logout = async (req, res) => {
  try {
    res.clearCookie("jwt", "", { maxAge: 0 });
    res.status(200).json({
      success: true,
      message: "User logged out successfully",
      data: [],
      error: [],
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
      data: [],
      error: error,
    });
  }
};
