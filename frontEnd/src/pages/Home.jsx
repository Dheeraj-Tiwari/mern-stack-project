import React from 'react';
import Layout from '../components/Layout';
import Navbar from '../components/nav/Navbar';
import TaskList from '../components/task/TaskList';

function Home() {
  return (
<Layout>  
  <Navbar />
  <TaskList />
</Layout> 
  );
}

export default Home;

// Comments:
// Import the necessary dependencies and components

// Create the Home component

// Render the Home component with a Layout component as the parent container

// Render the Navbar and TaskList components within the Layout component