// Importing the Course model
const Course = require("../Models/CourseModel");

// Controller function to get all courses
module.exports.getCourses = async (req, res) => {
  try {
     // Find all courses and populate the 'students' field with student data
    const courses = await Course.find({}).populate("students");
    res.json(courses);
  } catch (error) {
    console.error("Could not get courses", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Controller function to get a course by its ID
module.exports.getCourseById = async (req, res) => {
  try {
    // Find a course by its ID
    const course = await Course.findById(req.params.id);
    res.json(course);
  } catch (error) {
    console.error("Could not get course", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Controller function to add a new course
module.exports.addCourse = async (req, res) => {
  try {
     // Extract course details from request body
    const { courseCode, courseName, section, semester } = req.body;
    // Create a new course with the provided details
    const newCourse = await Course.create({
      courseCode,
      courseName,
      section,
      semester,
    });
    res.json(newCourse);
  } catch (error) {
    console.error("Could not add course", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Controller function to add a student to a course
module.exports.addStudentToCourse = async (req, res) => {
  try {
    // Extract course ID and student ID from request parameters and body
    const courseId = req.params.id;
    const studentId = req.body.studentId;

    // Find the course by its ID
    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    // Add the student ID to the 'students' array of the course
    course.students.push(studentId);

    // Save the updated course
    await course.save();

    res.json({ message: "Student added to course", course });
  } catch (error) {
    console.error("Could not add student to course", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Controller function to update a course by its ID
module.exports.updateCourse = async (req, res) => {
  try {
    // Extract course details from request body
    const { courseCode, courseName, section, semester } = req.body;
    // Find and update the course by its ID
    const updatedCourse = await Course.findByIdAndUpdate(
      req.params.id,
      { courseCode, courseName, section, semester },
      { new: true }
    );
    res.json(updatedCourse);
  } catch (error) {
    console.error("Couyld not update course", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Controller function to delete a course by its ID
module.exports.deleteCourse = async (req, res) => {
  try {
    // Find and delete the course by its ID
    await Course.findByIdAndDelete(req.params.id);
    res.json({ message: "Course was deleted" });
  } catch (error) {
    console.error("Could not delete course", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
