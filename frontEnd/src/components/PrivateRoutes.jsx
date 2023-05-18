import {useEffect, useState} from 'react';
// import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

function PrivateRoutes({}) {
    const {auth} = useAuth();

if(auth === undefined) return "loading...";
 
return auth === true ? <Outlet /> : <Navigate to='/auth' />;
}

export default PrivateRoutes;

// Comments:
// Import the necessary dependencies from React and react-router-dom

// Import the useAuth hook from '../hooks/useAuth' to check the authentication status

// Define the PrivateRoutes component to handle private routes

// Destructure the auth variable from the useAuth hook

// Check the authentication status:
// - If the authentication status is undefined, render "loading..."
// - If the authentication status is true, render the nested routes using the Outlet component
// - If the authentication status is false, navigate to the '/auth' route using the Navigate component