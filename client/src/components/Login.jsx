//Importing necessary modules
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "bootstrap/dist/css/bootstrap.css";
import Modal from "react-bootstrap/Modal";

// Login component
const Login = () => {
  const navigate = useNavigate(); // Get navigate function from React Router
  const [inputValue, setInputValue] = useState({ // State for form input values
    email: "",
    password: "",
  });
  const { email, password } = inputValue; // Destructure email and password from state

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
      position: "bottom-left",
    });

  // Function to handle form submission
    const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send POST request to login endpoint with input values
      const { data } = await axios.post(
        "http://localhost:5000/login",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      console.log(data);
      const { success, message } = data;
      if (success) {
        // If login is successful, display success message and navigate to home page
        handleSuccess(message);
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        handleError(message); // If login fails, display error message
      }
    } catch (error) {
      console.log(error);
    }

    // Clear input values after submission
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
    });
  };

  return (
    <>
    {/* Modal for login form */}
      <div
        className="modal show"
        style={{ display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh", // Ensures the modal takes up the full height of the viewport
        position: "fixed", // Fixes the position of the modal
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1050, }}
      >
        <Modal.Dialog style={{ width: "400px", padding: "20px" }}>
          <Modal.Header>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            {/* Login form */}
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
              {/* Link to signup page */}
              <div>
                Dont have and account ? <Link to={"/signup"}>Signup</Link>
              </div>
              <br></br>
              {/* Login button */}
              <button type="submit" class="btn btn-primary">
                Login
              </button>
            </form>
          </Modal.Body>
        </Modal.Dialog>
      </div>
    </>
  );
};

export default Login; // Export the Login component
