import jwt from 'jsonwebtoken';
import  {createError}  from "./createError.js";

export default (req, res, next) =>{
    const token = req.cookies.access_token;
    if(!token){ // Check if token is missing
        return next(createError({ status: 401, message: "Unauthorized" })); 
    }
    return jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if(err){ // Check if token is invalid
            return next(createError({ status: 401, message: "Unauthorized, invalid token" })); 
        }else{
            req.user = decoded;
            return next();
        }
    });
};

// Comments:

// Import the necessary modules

// Define a middleware function to check authentication

// Retrieve the access token from the request cookies

// Check if the token is missing
// - If missing, return an error indicating unauthorized access

// Verify the token using the JWT library
// - If the token is invalid, return an error indicating unauthorized access
// - If the token is valid, decode it and assign the decoded user information to the request object

// Call the next middleware function to proceed with the request handling