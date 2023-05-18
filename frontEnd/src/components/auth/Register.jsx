import axios from 'axios';
import React from 'react';
import toast from 'react-hot-toast';

import classes from './AuthForm.module.scss';

function Register() {
  const register = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    const user = {
      name: e.target.name.value,                  
      email: e.target.email.value,                    //user creation
      password: e.target.password.value,
    };
    try {
      await axios.post(`/api/auth/register`, user);
      toast.success('Registered successfully');          //hit register route
    } catch (err) {
      console.log(err);
      toast.error('Something went wrong');
    }
  };

  return (            //wecall the funcation on submit
    <div className={classes.register}>
      <h1 className={classes.title}>Register</h1> 
      <form className={classes.authForm} onSubmit={register}> 
        <label htmlFor="name">
          Full Name:
          <input name="name" type="text" placeholder="Full Name" required />
        </label>
        <label htmlFor="email">
          email:
          <input name="email" type="email" placeholder="email" required />
        </label>
        <br />
        <label htmlFor="password">
          password:
          <input
            name="password"
            type="password"
            placeholder="password"
            required
          />
        </label>
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;

// Comments:
// Define the Register component

// Define an event handler for form submission
// - Prevent the default form submission behavior
// - Get the values of the name, email, and password input fields
// - Send a POST request to the "/api/auth/register" endpoint with the user data
// - Display a success message when the registration is successful
// - Display any errors in the console and show an error message when the registration fails

// Render the registration form with the name, email, and password input fields, and a register button