import User from "../models/userModel.js";
export const getUserForSideBar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;
    const users = await User.find({ _id: { $ne: loggedInUserId } });
    if (!users) {
      return res.status(404).json({ message: "No users found" });
    }
    res.status(200).json({
      success: true,
      message: "Users fetched successfully",
      data: users,
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
