const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const jwt = require("jsonwebtoken");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

const dotenv = require("dotenv").config();


async function startServer() {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Connected to MongoDB');

    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  } catch (error) {
    console.error('Error connecting to server:', error);
  }
}

startServer();
