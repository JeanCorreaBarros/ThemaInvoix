import React from 'react';
import {Navigate} from 'react-router-dom';



export function ProtectedRoute({children}) {
    const user = JSON.parse(sessionStorage.getItem('User'));
    console.log(user);
    if(!user) return <Navigate to='/auth' />
    return(
      <>
        {children}
      </>
    ) 

}