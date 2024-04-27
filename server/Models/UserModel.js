// Importing mongoose and bcrypt for password hashing
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

// Defining the user schema using mongoose.Schema
const userSchema = new mongoose.Schema({
  // Defining properties of the user schema
  email: {
    type: String,
    required: [true, "Email adress required"],
    unique: true,
  },
  username: {
    type: String,
    required: [true, "Username required"],
  },
  password: {
    type: String,
    required: [true, "Password required"],
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

// Hash the password before saving to the database
userSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 12); // Hash the password with bcrypt
});

// Exporting the mongoose model with the name "User" and the defined user schema
module.exports = mongoose.model("User", userSchema);
