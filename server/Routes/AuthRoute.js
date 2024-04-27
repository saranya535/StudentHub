// Import required modules and controllers
const { Signup, Login } = require("../Controllers/AuthController"); // Import signup and login controller functions
const { userVerification } = require("../Middlewares/AuthMiddleware"); // Import user verification middleware
const router = require("express").Router(); // Import the Router from Express

//routes and corresponding controller functions/middlewares
router.post("/signup", Signup); //route for user signup
router.post("/login", Login); //route for user login
router.post("/", userVerification); //route for user verification(checks whether user is authenticated)

// Export the router

module.exports = router;
