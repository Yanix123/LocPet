const mongoose = requre("mongoose");
const bcrypt = requre("bcrypt");
const User = require("../models/userModel");
const {
  UserValidateEmail,
  UserValidatePassword,
  isEmailTaken,
} = require("../validation/userInputDataValidation");

const register = async (req, res) => {
  const { email, password } = req.body;
  //validate email
  const emailValidationResult = UserValidateEmail(email);
  if (emailValidationResult.error) {
    return res.status(400).json({ error: emailValidationResult.error.message });
  }

  // Validate password
  const passwordValidationResult = UserValidatePassword(password);
  if (passwordValidationResult.error) {
    return res
      .status(400)
      .json({ error: passwordValidationResult.error.message });
  }

  await isEmailTaken(userEmail);
  
};
