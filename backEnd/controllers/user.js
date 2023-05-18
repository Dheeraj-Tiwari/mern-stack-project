import User from '../models/User.js';  // Importing User model
export const getUserInfo = async (req, res, next) =>{
  try{
    const data = await User.findById(req.user.id).select('name email password');  // Find the user by ID and select the name, email, and password
    return res.status(200).json(data); // Return the user information
  }catch(err){
    return next(err); // Return the error to the error handling middleware
  }
}

export const updateUser = async (req, res, next) =>{
    try{
        const updatedUser = await User.findByIdAndUpdate(req.user.id, {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        },{
            new: true  // Return the updated user
        }).select('name email password');
        return res.status(200).json(updatedUser); // Return the updated user
    }catch(err){
        return next(err); // Return the error to the error handling middleware
    }
};

// Import the User model

// Define the getUserInfo controller function
// - Find the user by ID and select the name, email, and password
// - Return the user information

// Define the updateUser controller function
// - Find the user by ID and update the name, email, and password with the provided values
// - Return the updated user




