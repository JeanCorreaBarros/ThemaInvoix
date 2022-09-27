import React from 'react';
import {Navigate} from 'react-router-dom';



export function ProtectedRoute({children}) {
    const user = sessionStorage.getItem('User');
    if(!user) return <Navigate to='/auth' />
    return(
      <>
        {children}
      </>
    ) 

}