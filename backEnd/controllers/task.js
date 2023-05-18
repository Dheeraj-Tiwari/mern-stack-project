import Task from '../models/Task.js' // Importing Task model
import  {createError}  from '../utils/createError.js'; // Importing custom error handling utility
export const createTask = async (req, res, next) =>{
try{
    const newTask = new Task({
        title: req.body.title,
        user: req.user.id, // Associate the task with the current user
        completed: req.body.completed
    });
    const savedTask = await newTask.save(); // Save the new task
    return res.status(201).json(savedTask); // Return the saved task
}catch (err){
   return next(err);  // Return the error to the error handling middleware
}
};

export const getAllTasks = async (req, res, next) =>{
    try{
        const tasks = await Task.find({}); // Find all tasks
        return res.status(200).json(tasks); // Return the tasks
    }catch (err){
        return next(err);  // Return the error to the error handling middleware
    }
};

export const searchTasks = async (req, res, next) =>{
    try{
        const {search} = req.body;
        const tasks = await Task.find({title: {$regex: search, $options: 'i'}});  // Perform a case-insensitive search for tasks matching the provided search term
        return res.status(200).json(tasks);  // Return the matched tasks
        }catch (err){
            return next(err); // Return the error to the error handling middleware
            }          
};


export const getCurrentUserTasks = async (req, res, next) =>{
    try{
        const tasks = await Task.find({ user: req.user.id }); // Find tasks associated with the current user
        return res.status(200).json(tasks);  // Return the tasks
    }catch (err){
        return next(err);  // Return the error to the error handling middleware
    }
};

export const updateTask = async (req, res, next) =>{
    try{
        const task = await Task.findById(req.params.taskId).exec();  // Find the task with the provided ID
        if(!task) return next(createError({status: 404, message: "No task found"})); // Check if the task exists
        if(task.user.toString() !== req.user.id) return next(createError({status: 401, message:"it's not your task"})); // Check if the task belongs to the current user

        const updateTask = await Task.findByIdAndUpdate(req.params.taskId, {  
            title: req.body.title,
            completed: req.body.completed
        }, {new: true}); // Return the updated task
        
        return res.status(200).json(updateTask); // Return the updated task
    }catch (err){
        return next(err); // Return the error to the error handling middleware
    }
};

export const deleteTask = async (req, res, next) =>{
    try{
        const task = await Task.findById(req.params.taskId).exec();  // Find the task with the provided ID
        if(!task) return next(createError({status: 404, message: "No task found"})); // Check if the task exists
        if(task.user.toString() !== req.user.id) return next(createError({status: 401, message:"it's not your task"}));   // Check if the task belongs to the current user

        await Task.findByIdAndDelete(req.params.taskId); // Delete the task
        return res.status(200).json('Task Deleted Successfully'); // Return success message
    }catch (err){
        return next(err); // Return the error to the error handling middleware
    }
};


// Import necessary modules and models
// - Task: for accessing the Task model
// - createError: a custom error handling utility

// Define the createTask controller function
// - Create a new task with the provided title, associated with the current user, and set its completed status
// - Save the new task
// - Return the saved task

// Define the getAllTasks controller function
// - Find all tasks
// - Return the tasks

// Define the searchTasks controller function
// - Perform a case-insensitive search for tasks matching the provided search term
// - Return the matched tasks

// Define the getCurrentUserTasks controller function
// - Find tasks associated with the current user
// - Return the tasks

// Define the updateTask controller function
// - Find the task with the provided ID
// - Check if the task exists and belongs to the current user
// - Update the task with the provided title and completed status
// - Return the updated task

// Define the deleteTask controller function
// - Find the task with the provided ID
// - Check if the task exists and belongs to the current user
// - Delete the task
// - Return success message