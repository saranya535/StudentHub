import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Course component to display course details in a table row
const Course = (props) => (
  <tr>
    <td>{props.course.courseCode}</td>
    <td>{props.course.courseName}</td>
    <td>{props.course.section}</td>
    <td>{props.course.semester}</td>
    <td>
      {props.course.students.map((student) => student.firstName).join(", ")}
    </td>
    <td>
      <Link className="btn btn-primary me-2" to={`/editCourse/${props.course._id}`}>
        Edit
      </Link>
      <Link className="btn btn-primary me-2" to={`/addStudent/${props.course._id}`}>
        Add Student
      </Link>
      <button
        className="btn btn-danger"
        onClick={() => {
          props.deleteCourse(props.course._id);
        }}
      >
        Delete
      </button>
    </td>
  </tr>
);


// CourseList component
export default function CourseList() {
  const [courses, setCourses] = useState([]); // State to store course data


  useEffect(() => {
    async function getCourses() {
      // Fetch course data from the server
      const response = await fetch(`http://localhost:5000/course/`);
      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }
      const courses = await response.json(); // Convert response to JSON format
      setCourses(courses); // Update state with fetched course data
    }
    getCourses(); // Call the function to fetch course data
  }, []); // Trigger useEffect only once when the component mounts
 
  // Function to delete a course
  async function deleteCourse(id) {
    await fetch(`http://localhost:5000/course/${id}`, {
      method: "DELETE",
    });
    // Update state to remove the deleted course
    const newCourses = courses.filter((el) => el._id !== id);
    setCourses(newCourses);
  }

  return (
    <div className="container mt-5">
      <h3 className="mb-4">Course List</h3>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Course Code</th>
            <th>Course Name</th>
            <th>Section</th>
            <th>Semester</th>
            <th>Students</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Render the list of courses using Course component */}
          {courses.map((course) => (
            <Course
              course={course}
              deleteCourse={() => deleteCourse(course._id)}
              key={course._id}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
