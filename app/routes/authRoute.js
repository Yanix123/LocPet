const express = require("express");
const { register } = require("../controller/authController");
const Router = express.Router()

Router.post('/',register)

module.exports = Router;