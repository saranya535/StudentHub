// Importing required modules
import React from "react";
import { Route, Routes } from "react-router-dom";
import EditStudent from "./components/editStudent";
import EditCourse from "./components/editCourse";
import CreateStudent from "./components/createStudent";
import CreateCourse from "./components/createCourse";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import AddStudent from "./components/addStudentToCourse";
import "bootstrap/dist/css/bootstrap.min.css";

// Main App component
const App = () => {
  return (
    <div>
      {/* Define routes for different components */}
      <Routes>
        <Route path="/createStudent" element={<CreateStudent />} />
        <Route path="/createCourse" element={<CreateCourse />} />
        <Route path="/editStudent/:id" element={<EditStudent />} />
        <Route path="/editCourse/:id" element={<EditCourse />} />
        <Route path="/addStudent/:id" element={<AddStudent />} />
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App; // Export the App component
