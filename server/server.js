//Import required modules
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config(); //load environment variables
const { MONGO_URI, PORT } = process.env; 

//create an express app
const app = express();

//Function to start the server and connect to MongoDB
const startServer = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected");
    //Start the server and listen on the specified port that is 5000
    app.listen(PORT, () => {
      console.log(`Server online port ||  ${PORT}`);
    });
  } catch (error) {
    //If there's error, log it and exit the process
    console.error(error);
    process.exit(1);
  }
};

//Call the function to start the server
startServer();

//Middleware setup

//Enable CORS with credentials
app.use(
  cors({
    origin: ["http://localhost:3000"], //Allow requests from this origin
    methods: ["GET", "POST", "PUT", "DELETE"], //Allow these HTTP methods
    credentials: true, //Allow sending cookies cross-origin
  })
);

app.use(cookieParser()); //Parse cookies
app.use(express.json()); //Parse JSON bodies

//Routes setup

app.use(require("./Routes/AuthRoute"));
app.use(require("./Routes/CourseRoute"));
app.use(require("./Routes/StudentRoute"));
