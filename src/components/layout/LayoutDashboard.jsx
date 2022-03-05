import React from 'react';
import Navbar from '../navbar/Navbar';

const LayoutDashboard = ({children}) => {

 
  return (
    <>
      <Navbar/> 
      {children}
    </>
  )
}

export default LayoutDashboard