import React from 'react';
import {Navigate} from 'react-router-dom';
import LayoutDashboard from '../layout/LayoutDashboard';

export function ProtectedRoute({children}) {
    const user = JSON.parse(localStorage.getItem('user'));
    if(!user) return <Navigate to='/auth' />
  
    return(
      <>
        <LayoutDashboard/>
        {children}
      </>
    ) 

}