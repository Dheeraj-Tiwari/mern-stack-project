import  axios  from "axios";
import { useEffect, useState } from "react";

export default () =>{
    const [auth, setAuth] = useState();

    const verifyAuth = async () => {
        try{
            const res = await axios.get('/api/auth/is_logged_in');
            return res.data;
        }catch(err){
            console.log(err);
            return false;
        }
    };

    useEffect(() => {
        (
            async () => {
                const data = await verifyAuth();
                setAuth(data);
            }
        )();
    });

    return { auth };
};

// Comments:
// Import the necessary dependencies from axios and react

// Create a custom hook called useAuth

// Define the useAuth hook to handle authentication status

// Set up a state variable called auth to store the authentication status

// Create an asynchronous function called verifyAuth to check the authentication status

// Make an HTTP GET request to '/api/auth/is_logged_in' to check if the user is logged in

// Return the response data from the HTTP request

// If an error occurs, log the error and return false

// Use the useEffect hook to call the verifyAuth function when the component mounts

// Within the useEffect hook, call the verifyAuth function and update the auth state variable

// Return the auth state variable as an object from the useAuth hook