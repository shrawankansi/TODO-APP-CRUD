// LOGIC, BL
const User = require("../models/userModel");

exports.home = (req, res) => {
  res.send("Hello  Alpha ");
};

exports.createUser = async (req, res) => {

  // const todoTask = new User({
  //   content: req.body.content 

  // });
  try {
    const { name } = req.body.content;
    // To check all the details
    // Inserting into the Database

    const user = await User.create({ name });
    res.status(201).json({
      success: true,
      message: "User Created Successfully",
      user,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      success: true,
      users,
    });
  } catch (error) {
    console.log(error);
    res.status(401).json({
      success: false,
      message: error.message,
    });
  }
};

exports.editUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      success: true,
      message: "User updated Successfully",
      // user,
    });
  } catch (error) {
    console.log(error);
    res.status(401).json({
      success: false,
      message: error.message,
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findByIdAndDelete(userId);
    res.status(200).json({
      success: true,
      message: "User Deleted Successfully",
      // user,
    });
  } catch (error) {
    console.log(error);
    res.status(401).json({
      success: false,
      message: error.message,
    });
  }
};
