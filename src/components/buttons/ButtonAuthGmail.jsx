import React from 'react';
import {useAuth} from '../../context/authContext'


const ButtonAuthGmail = ({title}) => {
    const {authGmail} = useAuth();
   

    const handleAuthGmail = async () =>{
      authGmail();    
    }
    
  return (
    <button type="button" onClick={handleAuthGmail} className='w-80 h-10 bg-red-400 text-white hover:bg-red-500 rounded mb-4'>
        {title}
    </button>
  )
}

export default ButtonAuthGmail