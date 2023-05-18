import  express  from "express";
import  {register, login, logout, isLoggedIn}  from "../controllers/auth.js";


const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get('/logout', logout);
router.get('/is_logged_in', isLoggedIn)


export default router;

// Comments:

// Import the necessary modules and controller functions

// Create an Express router

// Define routes for register, login, logout, and isLoggedIn
// - Register: POST request to "/register", calls the register controller function
// - Login: POST request to "/login", calls the login controller function
// - Logout: GET request to "/logout", calls the logout controller function
// - IsLoggedIn: GET request to "/is_logged_in", calls the isLoggedIn controller function

// Export the router