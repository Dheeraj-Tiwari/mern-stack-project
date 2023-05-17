import React, { useEffect, useState } from "react";
import classes from "./TaskList.module.scss";
import toast from "react-hot-toast";
import axios from "axios";
import TaskItem from "./TaskItem";

function TaskList() {
  const [taskList, setTaskList] = useState([]);
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [newTask, setNewTask] = useState("");

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
  
  const addNewButtonClick = () => {
    setIsAddingNew(!isAddingNew);
  };

  useEffect(() => {
    getTasks();
  }, []);

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
