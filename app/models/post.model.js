const mongoose = require("mongoose");

const Post = mongoose.model(
  "Post",
  new mongoose.Schema({
    content: String,
    header: String,
    avatar: String,
  },
  { timestamps: true })
);

module.exports = Post;