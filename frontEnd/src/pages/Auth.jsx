import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import Login from '../components/auth/Login';
import Register from '../components/auth/Register';
import classes from './Auth.module.scss';
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

function Auth() {
  const {auth} = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if(auth){                  //it will prevent logdin user to go to auth page
      navigate('/');
    }
  }, [auth, navigate]);
  return (
   <Layout>
    <div className={classes.form_container}>
      <Login />
      <Register />
    </div>
    </Layout>
  );
}

export default Auth;

// Comments:
// Import the necessary dependencies and components

// Import the useAuth custom hook

// Import the useNavigate hook from 'react-router-dom'

// Create the Auth component

// Retrieve the auth state variable from the useAuth hook

// Retrieve the navigate function from the useNavigate hook

// Use the useEffect hook to check if the user is authenticated

// If the user is authenticated, navigate them to the home page

// The useEffect hook is triggered when the auth or navigate variables change

// Render the Auth component with a Layout component as the parent container

// Render the Login and Register components within a form container div