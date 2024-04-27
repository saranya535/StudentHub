// Importing required modules
require("dotenv").config(); // Load environment variables
const jwt = require("jsonwebtoken"); // Import JWT for token generation

// Function to create a secret token
module.exports.createSecretToken = (id) => {
  // Generate a JWT token with the provided user ID and secret key
  // Set token expiration to 3 days (3 * 24 * 60 * 60 seconds)
  return jwt.sign({ id }, process.env.TOKEN_KEY, {
    expiresIn: 3 * 24 * 60 * 60,
  });
};
