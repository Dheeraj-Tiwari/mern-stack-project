import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-hot-toast';
import classes from "./Navbar.module.scss";
import { FaUserAlt } from 'react-icons/fa';

function Navbar() {
  const [user, setUser] = useState(null); // Define the user state
    const navigate = useNavigate(); // Get the navigate function from the react-router-dom library

  const getUser = async () => {
    try {
      const { data } = await axios.get("/api/users/me");  // Send a GET request to the "/api/users/me" endpoint to get the user data
      setUser(data); // Set the user state with the received data
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUser(); // Call the getUser function when the component mounts
  }, []);

  const handleLogout = async () =>{
    try{
        await axios.get('/api/auth/logout');  // Send a GET request to the "/api/auth/logout" endpoint to log out the user
        setUser(null); // Clear the user state
        toast.success('Logged out successfully');  // Display a success message
        navigate('/auth'); // Navigate to the "/auth" page
    } catch (err) {
        console.log(err);
      }
  }

  if (!user) return null; // If there is no user, return null (don't render anything)
  return (
    <header>
      <div className={classes.userInfo}>
        <FaUserAlt className={classes.userIcon}></FaUserAlt>
        <div>
          <h1 className={classes.name}>{user.name}</h1>
          <h1 className={classes.email}>{user.email}</h1>
          <Link to="/edit-profile" className={classes.editBtn}>
            Edit
          </Link>
        </div>
      </div>
      <nav>
        <button type="button" className={classes.logout} onClick={handleLogout}>
          logout
        </button>
      </nav>
    </header>
  );
}

export default Navbar;

// Comments:
// Define the Navbar component

// Define the user state to store the user data
// Get the navigate function from the react-router-dom library

// Define an asynchronous function to get the user data
// - Send a GET request to the "/api/users/me" endpoint
// - Set the user state with the received data

// Call the getUser function when the component mounts

// Define an asynchronous function to handle user logout
// - Send a GET request to the "/api/auth/logout" endpoint
// - Clear the user state
// - Display a success message
// - Navigate to the "/auth" page

// If there is no user, return null (don't render anything)

// Render the user information (name, email) with an option to edit the profile
// Render a logout button to handle user logout
