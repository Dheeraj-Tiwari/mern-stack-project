// console.log("hello world !!");
import  express  from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import 'dotenv/config';
import cookieParser from "cookie-parser";
import allRoutes from './routes/index.js';

const PORT = process.env.PORT  || 8000;
const app = express(); //invoke 

//middleware
app.use(cors());  //will help us in sharing resorces to two kind of origns
app.use(morgan('tiny')); //its is for login and stuff //log all the http req tht we reseve
app.use(express.json()); //enable abelety to work with json requst body
app.use(cookieParser()); //enable to work with cookies

//routes
app.use('/api', allRoutes) //prefexing to all routes

//error handling
app.use((err, req, res, next) => {
    const status = err.statusCode || 500;
    const message = err.message || 'Internal server error';

    return res.status(status).json({message, stack: err.stack});
});

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.DB_CONNECTION_STRING);
        console.log("MongoDB connected!")
    }catch(err){
        console.log(err);
        process.exit(1);
    }
};

app.listen(PORT, () => {
    connectDB();
    console.log(`server is running at port ${PORT}`);
});

// Comments:

// Import necessary modules and middleware

// Set the port for the server

// Create an Express application

// Set up middleware functions
// - Enable CORS to allow cross-origin resource sharing
// - Use morgan for logging HTTP requests
// - Enable parsing of JSON request bodies
// - Enable parsing of cookies

// Set up routes using the imported router from allRoutes

// Error handling middleware function
// - Handles errors by returning the error message and stack trace as a JSON response

// Define a function to connect to the MongoDB database

// Start the server by listening on the specified port
// - Call the connectDB function to establish a connection to the database
// - Log a message indicating that the server is running