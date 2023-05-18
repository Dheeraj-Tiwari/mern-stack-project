## Mern-stack-project

This project is a task management system developed using MERN stack. The application allows users to create their own account and manage their tasks. The app is built using basic MERN stack technologies and provides a simple user interface for task management. The project includes features such as creating relations in mongoDb, implementing authentication, setting up private routes, and using custom react.js hooks. The application provides a good example for those who want to learn about the basic concepts of MERN stack development.
<br><br>
## Technologies Used<br>
### Backend <br>
♦️MongoDB<br>
♦️Mongoose<br>
♦️Express<br>
♦️Node.js<br>
♦️JSON Web Token<br>
♦️bcrypt<br>
### Frontend<br>
♦️React<br>
♦️react-router-dom<br>
♦️react-hot-toast<br>
♦️axios<br>
♦️Vite.js<br><br><br>
This project is built using the MERN stack, which includes MongoDB, Express, React, and Node.js. The backend is built using MongoDB as the database, with Mongoose as the object modeling tool. Express is used as the web application framework and Node.js as the runtime environment. The backend also uses JSON Web Token and bcrypt for authentication and security. The frontend is built using React, with react-router-dom for routing, react-hot-toast for notifications, axios for HTTP requests, and Vite.js as the build tool. Overall, this project showcases the integration of various technologies in building a full-stack web application.
<br><br><br>

## Project Document: Task Management App

# 1. Introduction
   The Task Management App is a web-based application developed for JALA Academy to help users manage their tasks efficiently. The app allows users to create, update, and delete tasks, mark tasks as completed, and search for specific tasks. The application provides a user-friendly interface and incorporates features such as user authentication and authorization.

# 2. Features
   - User Authentication: The app includes a user authentication system that allows users to register, log in, and log out. Only authenticated users can access certain features of the app.
   - Task Management: Users can create new tasks, update existing tasks, and delete tasks. Each task has a title, status (complete/incomplete), and creation date.
   - Task Sorting: The task list is sorted in descending order based on the creation date, with the newest tasks appearing at the top.
   - Task Search: Users can search for tasks by entering keywords in the search bar. The app displays the matching tasks based on the title.
   - User Profile: Users can edit their profile information, such as name, email, and password.
   - Forgot Password: Users can request a password reset if they forget their password. An email is sent to the registered email address with a password reset link.
   - Private Routes: Certain routes in the app are protected and can only be accessed by authenticated users. Unauthorized access is redirected to the authentication page.

# 3. Technologies Used
   - Front-end: React, React Router, Axios, React Hot Toast
   - Back-end: Node.js, Express
   - Database: MongoDB
   - Styling: CSS Modules, SCSS
   - Build Tool: Vite.js
   - Authentication: JSON Web Tokens (JWT)
   - Linting: ESLint

# 4. Project Structure
   - `src` directory: Contains the main source code of the application
     - `components`: Contains reusable components used throughout the app
       - `Layout.js`: Renders the main layout of the app, including the header and child components
       - `Navbar.js`: Renders the navigation bar component
       - `TaskItem.js`: Renders a single task item component
       - `TaskList.js`: Renders the list of tasks component
       - `PrivateRoutes.js`: Handles routing for protected routes
       - `Auth.js`: Renders the authentication page component
       - `Login.js`: Renders the login form component
       - `Register.js`: Renders the registration form component
       - `ForgotPassword.js`: Renders the forgot password form component
       - `EditProfile.js`: Renders the edit profile page component
     - `hooks`: Contains custom hooks used in the app
       - `useAuth.js`: Manages user authentication state
     - `pages`: Contains the main page components
       - `Home.js`: Renders the home page component
       - `EditProfile.js`: Renders the edit profile page component
       - `ForgotPassword.js`: Renders the forgot password page component
       - `Auth.js`: Renders the authentication page component
     - `styles`: Contains global and component-specific SCSS stylesheets
     - `App.js`: Handles the routing configuration of the app
     - `main.jsx`: The entry point of the application
     - `index.html`: The HTML template for the app

# 5. Installation and Setup
   To run the Task Management App locally, follow these steps:
   - Clone the project repository from [repository URL]
   - Install the dependencies using the package manager of your choice (e.g., npm or yarn)
   - Set up the environment variables required for the app (e.g., MongoDB connection string, JWT secret)
   - Start the development server using the build tool (e.g

., Vite.js)
   - Access the app in a web browser at the specified localhost address

# 6. Conclusion
   The Task Management App provides users with a convenient and intuitive way to manage their tasks. With features such as task creation, editing, searching, and user authentication, the app enhances productivity and organization. By following the installation steps, users can set up the app locally and start managing their tasks effectively.
