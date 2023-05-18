import React, { useEffect, useState } from "react";
import classes from "./TaskList.module.scss";
import toast from "react-hot-toast";
import axios from "axios";
import TaskItem from "./TaskItem";

function TaskList() {
  const [taskList, setTaskList] = useState([]);
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [newTask, setNewTask] = useState("");

  //add new task
  const addNewTask = async (e) => {
    e.preventDefault();
    if (newTask.length <= 0) {
      toast.error("Task is empty");
      return;
    }
    try {
      const { data } = await axios.post("/api/tasks", {
        title: newTask,
      });
      toast.success("New Task Created");
      setTaskList([{ ...data }, ...taskList]);
      setNewTask("");
      setIsAddingNew(false);
    } catch (err) {
      console.log(err);
    }
  };
    //all tasks we be shown
  const getTasks = async () => {
    try {
      const { data } = await axios.get("/api/tasks/myTasks");
      setTaskList(
        //newest task item will be on the top
        data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      );
    } catch (err) {
      console.log(err);
    }
  };

  //search tasks
  const searchTasks = async (e) => {
    e.preventDefault();
    if (newTask.trim().length === 0) { // Update the condition here
      toast.error('Task is empty');
      return;
    }
    try {
      const { data } = await axios.get(`/api/tasks/search?title=${newTask}`);
      const sortedTasks = data.sort((a, b) => {
        const aTitle = a.title.toLowerCase();
        const bTitle = b.title.toLowerCase();
        if (aTitle.includes(newTask.toLowerCase())) return -1;
        if (bTitle.includes(newTask.toLowerCase())) return 1;
        return 0;
      });
      setTaskList(sortedTasks);
      setNewTask('');
      setIsAddingNew(false);
    } catch (err) {
      console.log(err);
    }
  };
   //add task
  const addNewButtonClick = () => {
    setIsAddingNew(!isAddingNew);
  };

  useEffect(() => {
    getTasks();
  }, []);

  //delete task
  const deleteTask = async (id) => {
    try {
      await axios.delete(`/api/tasks/${id}`);
      toast.success("Task deleted");
      setTaskList(taskList.filter((task) => task._id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div className={classes.topBar}>
        <button
          type="button"
          className={classes.addNew}
          onClick={addNewButtonClick}
        >
          Add new
        </button>
        <div>
          <input
            type="text"
            className={classes.search}
            placeholder="Search here...🔍"
            value={newTask}
            onChange={(e) => searchTasks(e)}
          />
        </div>
      </div>
      {isAddingNew && (
        <form className={classes.addNewForm} onSubmit={addNewTask}>
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Task Name"
          />{" "}
          {/* when ever we change input value it also changes new task value */}
          <button type="submit">Add+</button>
        </form>
      )}
      {taskList.length > 0 ? (
        <table className={classes.taskList_table}>
          <tbody>
            {taskList.map((task) => (
              <TaskItem task={task} deleteTask={deleteTask} key={task._id} />
            ))}
          </tbody>
        </table>
      ) : (
        "no task found!"
      )}
    </div>
  );
}

export default TaskList;

//value={} onChange={}


// Comments:
// Define the TaskList component to display a list of tasks

// Define the taskList state to store the list of tasks

// Define the isAddingNew state to track the state of adding a new task

// Define the newTask state to store the value of the new task input field

// Define the addNewTask function to handle the submission of a new task
// - Check if the new task is not empty
// - Send a POST request to the "/api/tasks" endpoint to create a new task
// - Display a success message
// - Update the task list state with the new task at the beginning
// - Reset the new task input field and set isAddingNew to false

// Define the getTasks function to fetch the list of tasks from the server
// - Send a GET request to the "/api/tasks/myTasks" endpoint
// - Sort the tasks based on their creation date in descending order
// - Update the task list state with the fetched tasks

// Define the searchTasks function to search for tasks based on the input value
// - Check if the new task is not empty
// - Send a GET request to the "/api/tasks/search?title=${newTask}" endpoint to search for tasks
// - Sort the tasks based on their relevance to the search query
// - Update the task list state with the sorted tasks
// - Reset the new task input field and set isAddingNew to false

// Define the addNewButtonClick function to toggle the isAddingNew state

// Fetch the tasks when the component mounts

// Define the deleteTask function to handle the deletion of a task
// - Send a DELETE request to the "/api/tasks/${id}" endpoint to delete the task
// - Display a success message
// - Remove the deleted task from the task list state

// Render the task list UI
// - Display a top bar with an "Add new" button and a search input field
// - Toggle the visibility of the new task form based on the isAddingNew state
// - Handle the submission of the new task form
// - Render the task items in a table if there are tasks in the task list state
// - Pass each task item to the TaskItem component for rendering
// - Display a message if there are no tasks found in the task list stat
