const User = require("../models/userModel");

// Register user
const createUser = async (userEmail, userPassword) => {
    try {
        const createdUser = await User.create({ userEmail, userPassword });
        return createdUser;
    } catch (error) {
        console.error("Error creating user:", error.message);
        throw error;
    }
};

module.exports = createUser;
