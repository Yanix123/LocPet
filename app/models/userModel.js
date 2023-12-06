const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userEmail: {
    type: String,
    require: true,
    unique: true,
    lowercase: true,
  },
  userPassword: {
    type: String,
    require: true,
    minlength: 8,
    select: false,
  },
  firstName: {
    type: String,
    trim: true,
    default: null,
  },
  lastName: {
    type: String,
    trim: true,
    default: null,
  },
  photo: {
    type: String,
    required: false,
    default: "default.jpg",
  },
  role: {
    type: String,
    // enum: roles,
    default: "user",
  },
});

const User = mongoose.model("User", userSchema);

module.exports = ("User", User);
