//Importing required modules and controllers
const express = require("express"); // Importing Express
const studentRoutes = express.Router(); //Creating a new router instance
const studentController = require("../Controllers/StudentController"); //Importing controller functions for student related operations

// Defining routes and corresponding controller functions

studentRoutes.route("/student").get(studentController.getStudents); // Route to get all students
studentRoutes.route("/student/:id").get(studentController.getStudentById); // Route to get a student by ID
studentRoutes.route("/student/add").post(studentController.addStudent); // Route to add a new student
// Route to update a student by ID
studentRoutes
  .route("/student/update/:id")
  .post(studentController.updateStudent);
studentRoutes.route("/student/:id").delete(studentController.deleteStudent); // Route to delete a student by ID

module.exports = studentRoutes; // Export the router for use in other files
