//Importing mongoose
const mongoose = require("mongoose");

//Creating a schema for the student
const studentSchema = new mongoose.Schema({
  studentNumber: {
    //Defining properties of the studnet schema
    type: String,
    required: [true, "Student number required"],
  },
  password: {
    type: String,
    required: [true, "Password required"],
  },
  firstName: {
    type: String,
    required: [true, "First name required"],
  },
  lastName: {
    type: String,
    required: [true, "Last name required"],
  },
  address: String,
  city: String,
  phoneNumber: String,
  email: String,
  program: String,
  course: {
    type: mongoose.Schema.Types.ObjectId, // Defining course property as a reference to the Course model
    ref: "Course", // Reference to the Course model
  },
});

// Exporting the mongoose model with the name "Student" and the defined student schema
module.exports = mongoose.model("Student", studentSchema);
