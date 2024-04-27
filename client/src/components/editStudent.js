import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
export default function Edit() {
  const [form, setForm] = useState({
    // State for form fields
    studentNumber: "",
    password: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    phoneNumber: "",
    email: "",
    program: "",
    students: [],
  });

  // Get the id parameter from the URL
  const params = useParams();
  const navigate = useNavigate();
   // Fetch student data based on the id parameter
  useEffect(() => {
    async function fetchData() {
      const id = params.id.toString();
      const response = await fetch(
        `http://localhost:5000/student/${params.id.toString()}`
      );
      if (!response.ok) {
        const message = `An error has occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }
      const student = await response.json();
      if (!student) {
        window.alert(`Student with id ${id} not found`);
        navigate("/");
        return;
      }
      setForm(student);
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
    const editedStudent = {
      studentNumber: form.studentNumber,
      password: form.password,
      firstName: form.firstName,
      lastName: form.lastName,
      address: form.address,
      city: form.city,
      phoneNumber: form.phoneNumber,
      email: form.email,
      program: form.program,
    };

    // Update student data on the server
    await fetch(`http://localhost:5000/student/update/${params.id}`, {
      method: "POST",
      body: JSON.stringify(editedStudent),
      headers: {
        "Content-Type": "application/json",
      },
    });
     // Redirect to the home page after updating the student
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
    }}
      >
        <br></br>
        <h3 style={{textAlign:"center", marginTop:"20px"}}>UPDATE STUDENT DETAILS</h3>
        <br></br>
        <form onSubmit={onSubmit} style={{ width: "400px"}}>
          <div className="form-group" style={{ marginBottom: "15px" }}>
            <label htmlFor="studentNumber">Student Number</label>
            <input
              type="text"
              className="form-control"
              id="studentNumber"
              value={form.studentNumber}
              onChange={(e) => updateForm({ studentNumber: e.target.value })} />
          </div>
          <div className="form-group" style={{ marginBottom: "15px" }}>
            <label htmlFor="password">Password</label>
            <input
              type="text"
              className="form-control"
              id="password"
              value={form.password}
              onChange={(e) => updateForm({ password: e.target.value })} />
          </div>
          <div className="form-group" style={{ marginBottom: "15px" }}>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              value={form.firstName}
              onChange={(e) => updateForm({ firstName: e.target.value })} />
          </div>
          <div className="form-group" style={{ marginBottom: "15px" }}>
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              value={form.lastName}
              onChange={(e) => updateForm({ lastName: e.target.value })} />
          </div>
          <div className="form-group" style={{ marginBottom: "15px" }}>
            <label htmlFor="address">Address</label>
            <input
              type="text"
              className="form-control"
              id="address"
              value={form.address}
              onChange={(e) => updateForm({ address: e.target.value })} />
          </div>
          <div className="form-group" style={{ marginBottom: "15px" }}>
            <label htmlFor="city">City</label>
            <input
              type="text"
              className="form-control"
              id="city"
              value={form.city}
              onChange={(e) => updateForm({ city: e.target.value })} />
          </div>
          <div className="form-group" style={{ marginBottom: "15px" }}>
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="text"
              className="form-control"
              id="phoneNumber"
              value={form.phoneNumber}
              onChange={(e) => updateForm({ phoneNumber: e.target.value })} />
          </div>
          <div className="form-group" style={{ marginBottom: "15px" }}>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              className="form-control"
              id="email"
              value={form.email}
              onChange={(e) => updateForm({ email: e.target.value })} />
          </div>
          <div className="form-group">
            <label htmlFor="program">Program</label>
            <input
              type="text"
              className="form-control"
              id="program"
              value={form.program}
              onChange={(e) => updateForm({ program: e.target.value })} />
          </div>
          <br></br>
          <div className="form-group">
            <input
              type="submit"
              value="Update Student"
              className="btn btn-primary" />
          </div>
          <br></br>
        </form>
      </div></>
  );
}
