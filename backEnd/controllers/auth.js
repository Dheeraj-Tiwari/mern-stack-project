import bcryptjs from 'bcryptjs'; // Importing bcryptjs library for password hashing
import User from '../models/User.js'; // Importing User model
import jwt from 'jsonwebtoken'; // Importing jsonwebtoken library for token generation
import {createError}  from '../utils/createError.js'; // Importing custom error handling utility

export const register = async (req, res, next) => {
 if(!req.body.name || !req.body.email || !req.body.password){
    return next(createError({ status: 400, message: "name, email, password is required" })); 
 }

 try{
   const salt = await bcryptjs.genSalt(10); // Generate a salt for password hashing
   const hashedPassword = await bcryptjs.hash(req.body.password, salt); // Hash the password

   const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
   });
   await newUser.save(); // Save the new user
   return res.status(201).json('New user Created'); // Return success message
 }catch(err){
    console.log(err);
    return next(err); // Return the error to the error handling middleware
 }
};

export const login = async (req, res, next) => {
    if(!req.body.email || !req.body.password){
        return next(createError({ status: 400, message: "name, email is required" })); 
    }
    try{
        const user = await User.findOne({email: req.body.email}).select('name email password',); // Find the user by email
        if(!user){
            return next(createError({status: 404, message: 'No user found'}));
        }
        const isPasswordCorrect = await bcryptjs.compare(req.body.password, user.password);  // Compare the provided password with the hashed password
        if(!isPasswordCorrect){
            return next(createError({status: 400, message: 'incorrect password'}));
        }
        const payload ={
            id: user._id,
            name: user.name,
        };
        const token = jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: '1d', // Set token expiration time
        });
        return res.cookie('access_token', token, {
            httpOnly: true,  // Make the token accessible only via HTTP
        }).status(200).
        json({'message': "login success"});  // Return success message with the token
    }catch(err){
        console.log(err);
        return next(err); // Return the error to the error handling middleware
    }
};

export const logout =(req, res) =>{
  res.clearCookie('access_token'); // Clear the access token cookie
  return res.status(200).json({message: 'Logout Success'});  // Return success message
};

export const isLoggedIn =(req, res) =>{
  const token = req.cookies.access_token; // Get the access token from the cookie
  if(!token){
    return res.json(false); // Return false if no token is present
  }
  return jwt.verify(token, process.env.JWT_SECRET, (err) =>{
    if(err){
        return res.json(false); // Return false if the token is invalid or expired
    }else{
        return res.json(true); // Return true if the token is valid
    }
  })
};

// Import necessary libraries and modules
// - bcryptjs: for password hashing
// - User: for accessing the User model
// - jwt: for token generation
// - createError: a custom error handling utility

// Define the register controller function
// - Check if name, email, and password are provided


