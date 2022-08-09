import React,{useState} from 'react';
import Navbar from '../navbar/Navbar';
import WindowEmergente from '../wizard/WindowEmergente';

const LayoutDashboard = ({children}) => {
  const [isWizard,setIsWizard] = useState(true)
 
  return (
    <>
     {isWizard ? <WindowEmergente estado={setIsWizard}/>:null}  
      <Navbar/> 
      {children}
    </>
  )
}

export default LayoutDashboard