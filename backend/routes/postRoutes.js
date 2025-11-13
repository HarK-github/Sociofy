const express = require("express");
const jwt = require("jsonwebtoken");
const postModel = require("../models/post");
const userModel = require("../models/user");
require("dotenv").config();

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET;



const authenticateUser = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ message: "Not authenticated" });

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded; 
    next();
  } catch (err) {
    return res.status(403).json({ message: "Invalid token" });
  }
};


router.post("/", authenticateUser, async (req, res) => {
  try {
    const { image, caption } = req.body;
    if (!image) return res.status(400).json({ message: "Image is required" });

    const newPost = await postModel.create({
      user: req.user.id, 
      image,
      caption,
      createdAt: new Date()
    });

    res.status(201).json({ message: "Post created successfully", post: newPost });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error creating post" });
  }
});


router.get("/", async (req, res) => {
  try {
    const posts = await postModel.find().populate("user", "name email");
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: "Error fetching posts" });
  }
});

module.exports = router;
