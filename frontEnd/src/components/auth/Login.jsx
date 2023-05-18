import axios from "axios";
import React from "react";
import { useNavigate, Link } from "react-router-dom";
import classes from "./AuthForm.module.scss";
import toast from "react-hot-toast";
// import useAuth from '../../hooks/useAuth.js';

function Login() {
  const navigate = useNavigate();
  //   const { verifyAuth, auth } = useAuth();
  //   const navigate = useNavigate();

  //   useEffect(() => {
  //     if (auth) {
  //       navigate('/');
  //     }
  //   }, [auth]);

  const login = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    const email = e.target.email.value; // Get the value of the email input field
    const password = e.target.password.value; // Get the value of the password input field
    try {
      await axios.post("/api/auth/login", {
        email,
        password,
      }); // Send a POST request to the "/api/auth/login" endpoint with the email and password
      //   await verifyAuth();
      navigate("/"); // Redirect to the home page
      toast.success("Login Success"); // Display a success message
    } catch (err) {
      console.log(err); // Display any errors in the console
      toast.error("Login Failed"); // Display an error message
      //   verifyAuth();
    }
  };
  return (
    <div className={classes.register}>
      <h1 className={classes.title}>Login</h1>
      <form className={classes.authForm} onSubmit={login}>
        <label htmlFor="email">
          Email
          <input type="email" name="email" placeholder="email" required />
        </label>{" "}
        <br />
        <label htmlFor="password">
          Password
          <input
            type="password"
            name="password"
            placeholder="password"
            required
          />
        </label>
        <button type="submit">Login</button>
        <br />
      </form>
      <br />
      <label>
        <button className={classes.Fp} name="forgotPassword">
          <Link to="/forgot-password">Forgot password!?</Link>
        </button>
      </label>
    </div>
  );
}

export default Login;

// Comments:
// Define the Login component

// Define an event handler for form submission
// - Prevent the default form submission behavior
// - Get the values of the email and password input fields
// - Send a POST request to the "/api/auth/login" endpoint with the email and password
// - Redirect to the home page when the login is successful
// - Display a success message when the login is successful
// - Display any errors in the console and show an error message when the login fails

// Render the login form with the email and password input fields, a login button, and a link to the forgot password page
