import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
export default function Edit() {
  const [form, setForm] = useState({
    // State for form fields
    courseCode: "",
    courseName: "",
    section: "",
    semester: "",
    courses: [],
  });

   // Get the id parameter from the URL
  const params = useParams();
  const navigate = useNavigate();

  // Fetch course data based on the id parameter
  useEffect(() => {
    async function fetchData() {
      const id = params.id.toString();
      const response = await fetch(
        `http://localhost:5000/course/${params.id.toString()}`
      );
      if (!response.ok) {
        const message = `An error has occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }
      const course = await response.json();
      if (!course) {
        window.alert(`Course with id ${id} not found`);
        navigate("/");
        return;
      }
      setForm(course);
    }
    fetchData();
    return;
  }, [params.id, navigate]);

  // Function to update form state
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  // Function to handle form submission
  async function onSubmit(e) {
    e.preventDefault();
    const editedCourse = {
      courseCode: form.courseCode,
      courseName: form.courseName,
      section: form.section,
      semester: form.semester,
    };

    // Update course data on the server
    await fetch(`http://localhost:5000/course/update/${params.id}`, {
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
        <h3 style={{textAlign:"center", marginTop:"20px"}}>UPDATE COURSE</h3>
        <br></br>
        <form onSubmit={onSubmit} style={{ width: "400px"}}>
          <div className="form-group" style={{ marginBottom: "15px" }}>
            <label htmlFor="courseCode">Course Code</label>
            <input
              type="text"
              className="form-control"
              id="courseCode"
              value={form.courseCode}
              onChange={(e) => updateForm({ courseCode: e.target.value })} />
          </div>
          <div className="form-group" style={{ marginBottom: "15px" }}>
            <label htmlFor="courseName">Course Name</label>
            <input
              type="text"
              className="form-control"
              id="courseName"
              value={form.courseName}
              onChange={(e) => updateForm({ courseName: e.target.value })} />
          </div>
          <div className="form-group" style={{ marginBottom: "15px" }}>
            <label htmlFor="section">Section</label>
            <input
              type="text"
              className="form-control"
              id="section"
              value={form.section}
              onChange={(e) => updateForm({ section: e.target.value })} />
          </div>
          <div className="form-group">
            <label htmlFor="semester">Semester</label>
            <input
              type="text"
              className="form-control"
              id="semester"
              value={form.semester}
              onChange={(e) => updateForm({ semester: e.target.value })} />
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
