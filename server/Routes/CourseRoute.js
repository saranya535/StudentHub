// Importing required modules and controllers
const {
  getCourses,
  getCourseById,
  addCourse,
  updateCourse,
  deleteCourse,
  addStudentToCourse,
} = require("../Controllers/CourseController");  // Importing controller functions for course-related operations

const router = require("express").Router(); // Importing the Router from Express

// Course Routes

router.get("/course", getCourses); //Route to get all courses
router.post("/course/add", addCourse); //Route to add a new course
router.delete("/course/:id", deleteCourse); //Route to delete a course by ID
router.post("/course/update/:id", updateCourse); //Route to delete a course by ID
router.get("/course/:id", getCourseById); //Route to get a course by its ID
router.post("/course/:id/addStudent", addStudentToCourse); //Route to add a student to a course by course ID

module.exports = router; // Exporting the router for use in other files
