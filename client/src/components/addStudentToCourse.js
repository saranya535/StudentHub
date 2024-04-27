import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";

export default function Edit() {
  const [form, setForm] = useState({
    // State for form fields
    courseCode: "",
    courseName: "",
    section: "",
    semester: "",
    students: [],
    selectedStudent: "",
  });

  // Get the id parameter from the URL
  const params = useParams();
  const navigate = useNavigate();

  // Fetch course and student data based on the id parameter
  useEffect(() => {
    async function fetchData() {
      const courseId = params.id.toString();

      // Fetch course data
      const courseResponse = await fetch(
        `http://localhost:5000/course/${courseId}`
      );

      if (!courseResponse.ok) {
        const message = `An error has occurred: ${courseResponse.statusText}`;
        window.alert(message);
        return;
      }

      const course = await courseResponse.json();

      if (!course) {
        window.alert(`Course with id ${courseId} not found`);
        navigate("/");
        return;
      }

      // Fetch student data
      const studentsResponse = await fetch("http://localhost:5000/student");
      const students = await studentsResponse.json();

      // Update form state with course and student data
      setForm({
        ...course,
        students,
        selectedStudent: "",
      });
    }

    fetchData();
  }, [params.id, navigate]);

  // Function to update form state
  function updateForm(value) {
    setForm((prev) => ({ ...prev, ...value }));
  }

   // Function to handle form submission
  async function onSubmit(e) {
    e.preventDefault();

    // Check if a student is selected
    if (!form.selectedStudent) {
      window.alert("Please select a student.");
      return;
    }

    // Get the selected student id
    const studentId = form.selectedStudent;

    // Prepare data to add student to course
    const editedCourse = {
      studentId: studentId,
    };

    // Send POST request to add student to course
    await fetch(`http://localhost:5000/course/${params.id}/addStudent`, {
      method: "POST",
      body: JSON.stringify(editedCourse),
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Redirect to the home page after updating the course
    navigate("/");
  }

  return (
    //eslint-disable-next-line
    <><h2></h2><div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh"
    }}>
      <br></br>
      <h3 style={{textAlign:"center", marginTop:"20px"}}>ADD STUDENT TO COURSE</h3>
      <br></br>
      <form onSubmit={onSubmit} style={{ width: "400px"}}>
        <div className="form-group">
          <label htmlFor="selectedStudent">Select Student</label>
          <select
            className="form-control"
            id="selectedStudent"
            value={form.selectedStudent}
            onChange={(e) => updateForm({ selectedStudent: e.target.value })}
          >
            <option value="">Select a student</option>
            {form.students.map((student) => (
              <option key={student._id} value={student._id}>
                {student.firstName} {student.lastName}
              </option>
            ))}
          </select>
        </div>

        <br></br>
        <div className="form-group">
          <input
            type="submit"
            value="Update Course"
            className="btn btn-primary" />
        </div>
        <br></br>
      </form>
    </div></>
  );
}
