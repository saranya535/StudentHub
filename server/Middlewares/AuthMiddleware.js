// Importing required modules
const User = require("../Models/UserModel"); // Importing the User model
require("dotenv").config(); // Load environment variables
const jwt = require("jsonwebtoken"); // Importing JWT for token verification

// Middleware function for user verification
module.exports.userVerification = (req, res) => {
  // Extract token from request cookies
  const token = req.cookies.token;
  // If token is not present, return false status
  if (!token) {
    return res.json({ status: false });
  }
  // Verify the token with the secret key from environment variables
  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) {
      return res.json({ status: false });
    } else { // If token verification succeeds, find the user by ID
      const user = await User.findById(data.id);
      if (user) return res.json({ status: true, user: user.username }); // If user is found, return true status and user's username
      else return res.json({ status: false });  // If user is not found, return false status
    }
  });
};
