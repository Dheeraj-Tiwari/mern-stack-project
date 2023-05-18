import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BsArrowLeftShort } from 'react-icons/bs';
import axios from 'axios';
import toast from 'react-hot-toast';
import classes from './EditProfileForm.module.scss';

function EditProfileForm() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });
  // const { verifyAuth } = useContext(AuthContext); it to set the default settings

  const getUser = async () => {
    try {
      const { data } = await axios.get(`/api/users/me`); // Send a GET request to the "/api/users/me" endpoint to get the user data
      setUser(data);  // Set the user state with the received data
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUser(); // Call the getUser function when the component mounts
  }, []);

  const updateUserInfo = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const editProfile = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`/api/users/me`, user); // Send a PUT request to the "/api/users/me" endpoint to update the user profile
      toast.success('Profile updated successfully'); // Display a success message
      setUser(res.data); // Update the user state with the updated user data
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Link className={classes.backBtn} to="/"> 
        <BsArrowLeftShort />
        Home
      </Link>
      <div>
        <h1>Edit Profile</h1>
        <form className={classes.editForm} onSubmit={editProfile}>
          <label htmlFor="name">
            Full Name:
            <input
              name="name"
              type="text"
              placeholder="Full Name"
              required
              value={user.name}
              onChange={updateUserInfo}
            />
          </label>
          <label htmlFor="email">
            email:
            <input
              name="email"
              type="email"
              placeholder="email"
              required
              value={user.email}
              onChange={updateUserInfo}
            />
          </label>
          <label htmlFor="password">
            password:
            <input
              name="password"
              type="password"
              placeholder="password" 
              required
              value={user.password}
              onChange={updateUserInfo}
            />
          </label>
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
}

export default EditProfileForm;

// Comments:
// Define the EditProfileForm component

// Define the user state to store the user data

// Define an asynchronous function to get the user data
// - Send a GET request to the "/api/users/me" endpoint
// - Set the user state with the received data

// Call the getUser function when the component mounts

// Define a function to update the user information in the state
// - Update the user state with the new value entered in the input field

// Define an asynchronous function to handle profile update
// - Send a PUT request to the "/api/users/me" endpoint with the updated user data
// - Display a success message
// - Update the user state with the updated user data

// Render the form to edit the user profile
// - Display the current user information in the input fields
// - Handle input changes with the updateUserInfo function
// - Handle form submission with the editProfile function

// Render a link to go back to the home page
// - Use the Link component from react-router-dom library
// - Display an arrow icon and the text "Home"

// Render the EditProfileForm component