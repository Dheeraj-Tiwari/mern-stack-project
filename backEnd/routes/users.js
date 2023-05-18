import  express  from "express";
import { getUserInfo, updateUser } from "../controllers/user.js";

const router = express.Router();

router.get('/me', getUserInfo); // Get user information: GET request to "/me", calls the getUserInfo controller function
router.put('/me', updateUser); // Update user information: PUT request to "/me", calls the updateUser controller function


export default router;

// Comments:

// Import the necessary modules and controller functions

// Create an Express router

// Define routes for user-related operations
// - Get user information: GET request to "/me", calls the getUserInfo controller function
// - Update user information: PUT request to "/me", calls the updateUser controller function

// Export the router




