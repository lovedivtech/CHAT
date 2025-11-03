import Message from "../models/messageModel.js";
import Conversation from "../models/conversationModel.js";

export const sendMessage = async (req, res) => {
  try {
    const { id: receiverId } = req.params;
    const { message } = req.body;
    const senderId = req.user._id;

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });
    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }
    const newMessage = new Message({ senderId, receiverId, message });
    if (newMessage) {
      conversation.message.push(newMessage._id);
    }

    // TODO ///// SOCKET FUNCTIONALITY WILL GO HERE /////

    await Promise.all([conversation.save(), newMessage.save()]);
    res.status(201).json({
      success: true,
      message: "Message sent successfully",
      data: newMessage,
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

export const getMessages = async (req, res) => {
  try {
    const { id: userToChatId } = req.params;
    const senderId = req.user._id;
    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, userToChatId] },
    }).populate("message");
    if (!conversation) {
      return res.status(404).json({ message: "Conversation not found" });
    }
    res.status(200).json({
      success: true,
      message: "Messages fetched successfully",
      data: conversation.message,
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
