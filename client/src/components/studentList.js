// Importing necessary modules
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Student component to display student details in a table row
const Student = (props) => (
  <tr>
    <td>{props.student.studentNumber}</td>
    <td>{props.student.password}</td>
    <td>{props.student.firstName}</td>
    <td>{props.student.lastName}</td>
    <td>{props.student.address}</td>
    <td>{props.student.city}</td>
    <td>{props.student.phoneNumber}</td>
    <td>{props.student.email}</td>
    <td>{props.student.program}</td>
    <td>
      <Link className="btn btn-primary me-2" to={`/editStudent/${props.student._id}`}>
        Edit
      </Link>
      <button
        className="btn btn-danger"
        onClick={() => {
          props.deleteStudent(props.student._id);
        }}
      >
        Delete
      </button>
    </td>
  </tr>
);
// StudentList component
export default function StudentList() {
  const [students, setStudents] = useState([]); // State to store student data

  useEffect(() => {
    async function getStudents() {
      // Fetch student data from the server
      const response = await fetch(`http://localhost:5000/student/`);
      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }
      const students = await response.json(); // Convert response to JSON format
      setStudents(students); // Update state with fetched student data
    }
    getStudents(); // Call the function to fetch student data
    return; // Return to avoid unnecessary side effects
  }, []); // Removed students.length as dependency to avoid infinite loop

  // Function to delete a student
  async function deleteStudent(id) {
    await fetch(`http://localhost:5000/student/${id}`, {
      method: "DELETE",
    });

    // Update state to remove the deleted student
    const newStudents = students.filter((el) => el._id !== id);
    setStudents(newStudents);
  }

  // Function to render the list of students
  function studentList() {
    return students.map((student) => (
      <Student
        student={student}
        deleteStudent={() => deleteStudent(student._id)}
        key={student._id} // Added unique key for each table row
      />
    ));
  }

  return (
    <div className="container mt-5">
      <h3 className="mb-4">Student List</h3>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Student Number</th>
            <th>Password</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Address</th>
            <th>City</th>
            <th>Phone number</th>
            <th>Email</th>
            <th>Program</th>
            <th>Actions</th> {/* Added the Actions header */}
          </tr>
        </thead>
        <tbody>{studentList()}</tbody>
      </table>
    </div>
  );
}
