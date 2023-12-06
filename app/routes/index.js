const express = require("express");
const authRouter = require("../routes/authRoute");
const Router = express.Router()

Router.use("/auth",authRouter);

module.exports = Router;
