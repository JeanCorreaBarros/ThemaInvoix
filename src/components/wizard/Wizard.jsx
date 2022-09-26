import React,{useState} from 'react'
import PasoOne from "./PasoOne"
import PasoTwo from "./PasoTwo";


const Wizard = (props) => {
    
  const [state,setState] = useState({
    paso: 1,
    especialidad:'',
    nombre: '',
    empresa: '',
    municipio:'',
  })

    const siguientePaso = () =>{
      const {paso}= state;
      setState({paso: paso +1})
      
    }
    const omitir = () =>{
      const {paso}= state;
      setState( {paso: paso -1}) 
    }

    const handleInputChange = ({target:{name, value}})=> {
      setState({...state,[name]: value});
    }
    
    function Wizard () {
        switch(state.paso){
          case 1:
            return <PasoOne
            handleInputChange={handleInputChange}
            siguientePaso={siguientePaso}   
            />
          case 2:
            return <PasoTwo
            estado={props.estado}
            handleInputChange={handleInputChange}
            siguientePaso={siguientePaso} 
            omitir={omitir}
             />
          default:
            <div>ERROR</div> 
        } 
    } 
   
  return (
    <>
      {Wizard()}
    </>
  )
}

export default Wizard