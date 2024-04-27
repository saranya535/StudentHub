//Importing mongoose
const mongoose = require("mongoose");

// Defining the course schema using mongoose.Schema
const courseSchema = new mongoose.Schema({
  //Defining properties of the course schema
  courseCode: {
    type: String,
    required: [true, "Course code required"],
  },
  courseName: {
    type: String,
    required: [true, "Course name required"],
  },
  section: {
    type: String,
    required: [true, "Section required"],
  },
  semester: {
    type: String,
    required: [true, "Semester required"],
  },
  students: [
    {
      type: mongoose.Schema.Types.ObjectId, // Defining students property as an array of ObjectIds referencing the Student model
      ref: "Student", // Reference to the Student model
    },
  ],
});

// Export the mongoose model with the name "Course" and the defined course schema
module.exports = mongoose.model("Course", courseSchema);
