import express  from "express";
import { createTask, getAllTasks, getCurrentUserTasks, updateTask, deleteTask, searchTasks } from "../controllers/task.js";

const router = express.Router();

router.post('/', createTask); // Create a task: POST request to "/", calls the createTask controller function
router.get('/all', getAllTasks); // Get all tasks: GET request to "/all", calls the getAllTasks controller function
router.get('/myTasks', getCurrentUserTasks); // Get current user's tasks: GET request to "/myTasks", calls the getCurrentUserTasks controller function
router.put('/:taskId', updateTask); // Update a task: PUT request to "/:taskId", calls the updateTask controller function
router.delete('/:taskId', deleteTask);  // Delete a task: DELETE request to "/:taskId", calls the deleteTask controller function
router.get('/search', searchTasks); //Search tasks: GET request to "/search", calls the searchTasks controller function


export default router;

// Comments:

// Import the necessary modules and controller functions

// Create an Express router

// Define routes for task-related operations
// - Create a task: POST request to "/", calls the createTask controller function
// - Get all tasks: GET request to "/all", calls the getAllTasks controller function
// - Get current user's tasks: GET request to "/myTasks", calls the getCurrentUserTasks controller function
// - Update a task: PUT request to "/:taskId", calls the updateTask controller function
// - Delete a task: DELETE request to "/:taskId", calls the deleteTask controller function
// - Search tasks: GET request to "/search", calls the searchTasks controller function

// Export the router