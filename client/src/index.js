// Importing required modules
import React from "react"; // Importing React library
import ReactDOM from "react-dom"; // Import ReactDOM for rendering
import App from "./App"; // Import the root component of the application
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter for client-side routing

// Create a root ReactDOM element
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // Render the root component wrapped inside BrowserRouter for client-side routing
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
