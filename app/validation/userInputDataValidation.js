const User = require("../models/userModel");
const validator = require("email-validator");


const validateInputs = {
    UserValidateEmail: (userEmail) => {
      try {
        if (!userEmail) {
          throw new Error("Fill the email input");
        }
        if (!validator.validate(userEmail)) {
            console.log("888");
          throw new Error("Provide a valid user email");
        } else {
          return true;
        }
      } catch (error) {
        throw new Error(error.message);
      }
    },
    UserValidatePassword: (userPassword) => {
      if (!userPassword) {
        throw new Error("Provide your password");
      } else {
        return true;
      }
    },
  };
  const isEmailTaken = async (userEmail, res) => {
    console.log(userEmail);

    try {
        const user = await User.findOne({ userEmail });

        if (user) {
            throw new Error("User is already taken");
        }
    } catch (error) {
        console.error(error.message);
        res.status(400).send({ error: error.message });
    }
};

module.exports = { validateInputs, isEmailTaken };
