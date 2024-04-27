import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Create() {
  const [form, setForm] = useState({
    courseCode: "",
    courseName: "",
    section: "",
    semester: "",
  });

  const navigate = useNavigate();

  // Function to update form state
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

   // Function to handle form submission
  async function onSubmit(e) {
    e.preventDefault();

    // Create a new course object with form data
    const newCourse = { ...form };
    await fetch("http://localhost:5000/course/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCourse),
    }).catch((error) => {
      window.alert(error);
      return;
    });
    // Reset form fields
    setForm({
      courseCode: "",
      courseName: "",
      section: "",
      semester: "",
    });
    // Redirect to home page after adding the course
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
      <h2 style={{textAlign:"center", marginTop:"20px"}}>CREATE NEW COURSE</h2>
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
          <button type="submit" className="btn btn-primary">
            Add Course
          </button>
        </div>
        <br></br>
      </form>
    </div></>
  );
}
