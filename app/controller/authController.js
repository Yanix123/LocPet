const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("../models/userModel");
const {
  validateInputs,
  isEmailTaken
} = require("../validation/userInputDataValidation");
const { jwtStrategy } = require("../Strategy/jwtStrategy");
const createUser = require("../service/userService");


const register = async (req, res) => {
    const { userEmail, userPassword } = req.body;

    try {
        // Validate email and password (assumed functions)
        validateInputs.UserValidateEmail(userEmail);
        validateInputs.UserValidatePassword(userPassword);

        // Check if user email is already taken (assumed function)
        await isEmailTaken(userEmail, res);

        // Register the user
        const createdUser = await createUser(userEmail, userPassword);
        console.log("Result of user registration:", createdUser);

        // Send a success response
        res.status(200).send("Registration successful");
    } catch (error) {
        console.error(error.message);

        // Send an error response
        res.status(400).send({ error: error.message });
    }
};


module.exports = { register };
