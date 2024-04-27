//Importing necessary modules
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "bootstrap/dist/css/bootstrap.css";
import Modal from "react-bootstrap/Modal";

// Signup component
const Signup = () => {
  const navigate = useNavigate(); // Get navigate function from React Router
  const [inputValue, setInputValue] = useState({ // State for form input values
    email: "",
    password: "",
    username: "",
  });
  const { email, password, username } = inputValue; // Destructure email, password, and username from state
  // Function to handle changes in input fields
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };


  // Function to display error toast
  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
    // Function to display success toast
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });
    // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send POST request to signup endpoint with input values
      const { data } = await axios.post(
        "http://localhost:5000/signup",
        {
          ...inputValue,
        },
        { withCredentials: true } // Include credentials for CORS
      );
      const { success, message } = data;
      if (success) {
        // If signup is successful, display success message and navigate to home page
        handleSuccess(message);
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        // If signup fails, display error message
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }

    // Clear input values after submission
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
      username: "",
    });
  };

  return (
    // Modal for signup form
    <div
      className="modal show"
      style={{ display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 1050, }}
    >
      <Modal.Dialog style={{ width: "400px", padding: "20px" }}>
        <Modal.Header>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>

        <Modal.Body>
           {/* Signup form */}
          <form onSubmit={handleSubmit}>
            <div class="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                class="form-control"
                name="email"
                value={email}
                placeholder="Enter your email"
                onChange={handleOnChange}
              />
            </div>
            <div class="form-group">
              <label htmlFor="email">Username</label>
              <input
                type="text"
                class="form-control"
                name="username"
                value={username}
                placeholder="Enter your username"
                onChange={handleOnChange}
              />
            </div>
            <div class="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                class="form-control"
                name="password"
                value={password}
                placeholder="Enter your password"
                onChange={handleOnChange}
              />
            </div>
            <br></br>
             {/* Link to login page */}
            <div>
              Already have an account? <Link to={"/login"}>Login</Link>
            </div>
            <br></br>
            {/* Signup button */}
            <button type="submit" class="btn btn-primary">
              Sign Up
            </button>
          </form>
        </Modal.Body>
      </Modal.Dialog>
    </div>
  );
};

export default Signup; // Export the Signup component
