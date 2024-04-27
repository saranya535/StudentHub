
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { toast } from "react-toastify";
import NavBar from "./navbar";
import StudentList from "./studentList";
import CourseList from "./courseList";

// Home component
const Home = () => {
  const navigate = useNavigate(); // Hook for navigation
  const [cookies, removeCookie] = useCookies([]); // Hook for handling cookies
  // eslint-disable-next-line 
  const [username, setUsername] = useState(""); // State for storing username
  useEffect(() => {
     // Function to verify if user is authenticated
    const verifyCookie = async () => {
      // Redirect to login page if token cookie doesn't exist
      if (!cookies.token) {
        navigate("/login");
      }
       // Verify user authentication with the server
      const { data } = await axios.post(
        "http://localhost:5000",
        {},
        { withCredentials: true }
      );
      const { status, user } = data;

      // Set username if authentication is successful, otherwise remove token cookie and redirect to login page
      setUsername(user);
      return status
        ? toast(`Hello ${user}`, {
            position: "top-right",
          })
        : (removeCookie("token"), navigate("/login"));
    };
    verifyCookie(); // Call the function to verify authentication
  }, [cookies, navigate, removeCookie]); // Dependency array to watch for changes in cookies, navigation, and cookie removal
  // eslint-disable-next-line 
  // Function to handle logout
  const Logout = () => {
    removeCookie("token"); // Remove token cookie
    navigate("/signup"); // Redirect to signup page
  };
  return (
    <>
      <NavBar />
      <br></br>
      <StudentList />
      <br></br>
      <CourseList />
    </>
  );
};

export default Home;
