const User = require("../models/userModel");
const validator = require("email-validator");

const UserValidateEmail = async (req, res, userEmail) => {
  try {
    if (!userPassword) {
      throw new Error("fill the email input ");
    }
    if (!validator.validate(userEmail)) {
      throw new Error("provide existing user email ");
    } else if (User.findOne({ email: userEmail }) == true) {
      throw new Error("this user emaill is already exist");
    } else {
      return true;
    }
  } catch (e) {
    res.status(200).send({ message: "eternal server error" });
  }
};
const UserValidatePassword = (req, res, userPassword) => {
  const password =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
  if (!userPassword) {
    throw new Error("prowide yor password");
  } else if (!userPassword.value.match(password)) {
    throw new Error("this user password is not match");
  } else {
    return true;
  }
};

const isEmailTaken = (req,res,userEmail)=>{
const user = User.findOne({userEmail:userEmail})
if(user){
    throw new Error("user is already taken");
};
};

module.exports = { UserValidateEmail, UserValidatePassword,isEmailTaken};
