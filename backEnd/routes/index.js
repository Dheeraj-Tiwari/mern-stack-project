import  express  from "express";
import taskRoutes from './task.js';
import authRoutes from './auth.js';
import usersRoutes from './users.js';
import checkAuth from "../utils/checkAuth.js";


const router = express.Router();

router.use('/auth', authRoutes); // Mount the authRoutes under the '/auth' path
router.use('/tasks', checkAuth, taskRoutes); // Mount the taskRoutes under the '/tasks' path, with checkAuth middleware
router.use('/users', checkAuth, usersRoutes); // Mount the usersRoutes under the '/users' path, with checkAuth middleware


export default router;

// Comments:

// Import the necessary modules and route files

// Create an Express router

// Mount the authRoutes under the '/auth' path
// Mount the taskRoutes under the '/tasks' path, with checkAuth middleware
// Mount the usersRoutes under the '/users' path, with checkAuth middleware

// Export the router