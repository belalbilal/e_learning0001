import asyncHanlder from "express-async-handler";
import generateToken from "../utils/generateToken.js";
import User from "../models/userModel.js";

// auth user é get token
// Post /api/users/login
// access public
const authUser = asyncHanlder(async (req, res) => {
  const { email, password } = req.body;
  //res.send({email,password,})
  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    throw new Error("Invalid email or password");
  }
});

// Get user profile
// Get /api/users/profile
// access private
const getUserProfile = asyncHanlder(async (req, res) => {
  const user = await User.findById(req.user._id);
  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error("user not found");
  }
});

// Register a new user
// Post /api/users/login
// access public
const registerUser = asyncHanlder(async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// update user profile
// PUT /api/users/profile
// access private
const updateUserProfile = asyncHanlder(async (req, res) => {
  const user = await User.findById(req.user._id);
  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    if (req.body.password) {
      user.password = req.body.password;
    }
    const updatedUser = await user.save();
    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
      token: generateToken(updatedUser._id),
    });
  } else {
    res.status(404);
    throw new Error("user not found");
  }
});

// GET all users
// GET /api/users
// access private/admin
const getUsers = asyncHanlder(async (req, res) => {
  const users = await User.find({});
  res.json(users);
});

//  Delete users
// DELETE /api/users
// access private/admin
const deleteUser = asyncHanlder(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (user) {
    await user.remove();
    res.json({ message: "User removed" });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

// GET user by ID
// GET /api/users/:id
// access private/admin
const getUserById = asyncHanlder(async (req, res) => {
  const user = await User.findById(req.params.id).select('-password');
 if(user){
  res.json(user);
 }else{
  res.status(404);
  throw new Error('User not found')

 }
});

// update user 
// PUT /api/users/:id
// access private/Admin
const updateUser = asyncHanlder(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.isAdmin=req.body.isAdmin;
    /*
    if (req.body.password) {
      user.password = req.body.password;
    }
    */
    const updatedUser = await user.save();
    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
   //   token: generateToken(updatedUser._id),
    });
  } else {
    res.status(404);
    throw new Error("user not found");
  }
});

export {
  authUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
};
