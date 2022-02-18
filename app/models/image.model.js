const mongoose = require("mongoose");

const Image = mongoose.model(
  "Image",
  new mongoose.Schema({
    image: String,
    location: String    
  },
  { timestamps: true })
);

module.exports = User;