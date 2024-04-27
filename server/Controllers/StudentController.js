// Importing the Student model
const Student = require("../Models/StudentModel");

// Controller function to get all students
module.exports.getStudents = async (req, res) => {
  try {
    // Find all students
    const students = await Student.find({});
    res.json(students);
  } catch (error) {
    console.error("Could not get students", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Controller function to get a student by its ID
module.exports.getStudentById = async (req, res) => {
  try {
    // Find a student by its ID
    const student = await Student.findById(req.params.id);
    res.json(student);
  } catch (error) {
    console.error("Could not find student", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Controller function to add a new student
module.exports.addStudent = async (req, res) => {
  try {
     // Create a new student with the provided details
    const newStudent = await Student.create(req.body);
    res.json(newStudent);
  } catch (error) {
    console.error("Could not add student", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Controller function to update a student by its ID
module.exports.updateStudent = async (req, res) => {
  try {
    // Find and update the student by its ID
    const updatedStudent = await Student.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedStudent);
  } catch (error) {
    console.error("Could not update student", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Controller function to delete a student by its ID
module.exports.deleteStudent = async (req, res) => {
  try {
    // Find and delete the student by its ID
    await Student.findByIdAndDelete(req.params.id);
    res.json({ message: "Student deleted" });
  } catch (error) {
    console.error("Could not delete student", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
