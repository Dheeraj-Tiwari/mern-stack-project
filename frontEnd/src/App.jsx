import  { Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';
import { Toaster } from 'react-hot-toast';
import EditProfile from './pages/EditProfile';
import ForgotPassword from './pages/ForgotPassword';
import Auth from './pages/Auth';
import PrivateRoutes from './components/PrivateRoutes';

function App() {
  return (
    <>
    <Toaster
        position='top-right'
        toastOptions={{
            style :{
                fontSize: '1.8rem'
            }
        }}
    ></Toaster>
    <Routes>
        <Route element={<PrivateRoutes />}>
        <Route path='/' element={<Home />} />
        <Route path='/edit-profile' element={<EditProfile />} />
        </Route>
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/auth' element={<Auth />} />
        

    </Routes>
    </>
  );
}

export default App;

// Comments:
// Import the necessary dependencies and components

// Create the App component

// Render the Toaster component for displaying toasts

// Use the Routes component to define the routing configuration

// Use the Route component to define individual routes and their corresponding components

// Use the element prop to specify the component to render for a given route

// Wrap the private routes (Home and EditProfile) with the PrivateRoutes component

// Specify the path and element for each route

// Render the ForgotPassword and Auth components for their respective routes