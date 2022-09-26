import React,{useState} from 'react';
import Navbar from '../navbar/Navbar';
import Wizard from '../wizard/Wizard';

const LayoutDashboard = ({children}) => {

  const [isWizard,setIsWizard] = useState(true)
 
  return (
    <>
     {isWizard ? <Wizard estado={setIsWizard}/>:null}  
      <Navbar>
         {children}
      </Navbar>
      
    </>
  )
}

export default LayoutDashboard