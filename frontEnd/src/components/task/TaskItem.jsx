import React, { useState } from 'react';
import moment from 'moment';
import axios from 'axios';
import toast from 'react-hot-toast';
import classes from './TaskItem.module.scss';

function TaskItem({task, deleteTask}) {
    const [isCompleted, setIsCompleted] = useState(task.completed);
    const [isLoading, setIsLoading] = useState(false);


    const handleCheckboxClick = async () => {
        try {
          setIsLoading(true);
          await axios.put(`/api/tasks/${task._id}`, {
            completed: !isCompleted,
          });
          setIsCompleted(!isCompleted);
          toast.success('Task updated successfully');
        } catch (err) {
          console.log(err);
        } finally {
          setIsLoading(false);
        }
      };

  return (
    <tr className={classes.task_item}>
        <td className={classes.task_name}>
            <div className={classes.checkbox} role="checkbox" aria-checked disabled={isLoading} onChange={handleCheckboxClick}>
                <input type="checkbox" checked={isCompleted} disabled={isLoading}/> {/* "tabIndex={-1} readOnly" becous yuu should not have main focass in it */}
            </div>
            <p>{task.title}</p>
        </td>
        <td>{isCompleted ? 'Complete' : 'In Complete'}</td>
        <td>{moment(task.createdAt).format('MMM Do YY')}</td>
        <td>
            <button className={classes.deleteBtn} type='button' onClick={() => deleteTask(task._id)}>Delete</button>
        </td>
    </tr>
  )
};

export default TaskItem;

// Comments:
// Define the TaskItem component to display a single task item

// Define the isCompleted state to track the completion status of the task

// Define the isLoading state to track the loading state when updating the task

// Define the handleCheckboxClick function to handle the checkbox click event
// - Send a PUT request to the "/api/tasks/${task._id}" endpoint to update the task completion status
// - Toggle the isCompleted state
// - Display a success message

// Render the task item details in a table row
// - Display the task title with a checkbox to toggle the completion status
// - Display the completion status of the task
// - Display the creation date of the task
// - Render a delete button to delete the task
// - Bind the deleteTask function to the delete button click event