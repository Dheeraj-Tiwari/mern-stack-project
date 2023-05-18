import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import classes from "./ForgotPasswordForm.module.scss";
import { RiLockPasswordLine } from "react-icons/ri";

function ForgotPasswordForm() {
    //extra
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    const email = e.target.elements.email.value; // Get the value of the email input field

    try {
      const res = await axios.post("/api/forgot-password", { email }); // Send a POST request to the "/api/forgot-password" endpoint with the email
      toast.success("Password reset email sent"); // Display a success message
      e.target.reset(); // Reset the form fields
    } catch (err) {
      console.log(err); // Display any errors in the console
    }
  };
  //extra

  return (
    <div>
      <form className={classes.ForgotPasswordForm}>
        <h1 className={classes.title}>Forgot Password?</h1>
        <div class="card">
          <h1 class="lock-icon">
            {" "}
            <RiLockPasswordLine />{" "}
          </h1>
          {/* <h2>Forgot Password?</h2> */}
          <p>You can reset your Password here:</p>
          <input type="text" class="passInput" placeholder="Email address" />
          <button>Send My Password</button>
        </div>
      </form>
    </div>
  );
}

export default ForgotPasswordForm;

// Comments:
// Define the ForgotPasswordForm component

// Define an event handler for form submission
// - Prevent the default form submission behavior
// - Get the value of the email input field
// - Send a POST request to the "/api/forgot-password" endpoint with the email
// - Display a success message when the request is successful
// - Reset the form fields
// - Display any errors in the console

// Render the form with the input fields and submit button
