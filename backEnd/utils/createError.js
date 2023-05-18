export const createError = ({message, status}) => {
    const error = new Error();
    error.message = message;
    error.statusCode = status;
    return error;
  }

  // Comments:

// Define a function to create an error object with a custom message and status code
// - Accepts an object with properties: message and status
// - Creates a new Error object
// - Sets the error message and status code based on the input
// - Returns the error object




