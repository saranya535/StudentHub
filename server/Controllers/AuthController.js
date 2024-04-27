// Importing required modules
const User = require("../Models/UserModel"); // Importing the User model
const { createSecretToken } = require("../util/SecretToken"); // Importing function to create secret token
const bcrypt = require("bcryptjs"); // Importing bcrypt for password hashing

// Controller function for user signup
module.exports.Signup = async (req, res, next) => {
  try {
    const { email, password, username, createdAt } = req.body; // Extracting required fields from request body
    // Check if user with the same email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User exists" });
    }

    // Creating a new user with provided details
    const user = await User.create({ email, password, username, createdAt });
    const token = createSecretToken(user._id); // Creating a secret token for user authentication

    // Set the token in a cookie for subsequent requests
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });
    // Return success response with user details
    res.status(201).json({ message: "User created", success: true, user });
    next();
  } catch (error) {
    console.error(error);
  }
};

// Controller function for user login
module.exports.Login = async (req, res, next) => {
  try {
    const { email, password } = req.body; // Extracting email and password from request body

    // Check if email and password are provided
    if (!email || !password) {
      return res.json({ message: "Require all fields" });
    }

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ message: "Incorrect email" });
    }

    // Compare provided password with hashed password in the database
    const auth = await bcrypt.compare(password, user.password);
    if (!auth) {
      return res.json({ message: "Incorrect password" });
    }

    // If authentication is successful, create a secret token
    const token = createSecretToken(user._id);

     // Set the token in a cookie for subsequent requests
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });

    // Return success response
    res.status(201).json({ message: "User logged in", success: true });
    next();
  } catch (error) {
    console.error(error);
  }
};
