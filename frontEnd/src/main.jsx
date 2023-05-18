import axios from 'axios';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App';
// import { AuthProvider } from './context/Auth';
import './styles/global.scss';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
);

// Comments:
// Import the necessary dependencies and components

// Use ReactDOM.render to render the App component inside the root element

// Wrap the App component with BrowserRouter for routing functionality

// Wrap the entire app with React.StrictMode to perform additional checks and warnings during development

// Render the app inside the root element of the HTML document