import React from 'react'
import classes from './Layout.module.scss'


function Layout({ children }) {
  return (
    <main className={classes.container}>{children}</main>
  )
}

export default Layout

// Comments:
// Define the Layout component to provide a common layout structure for the application

// Accept the children prop to render the child components within the layout

// Render the main container element with the provided children components