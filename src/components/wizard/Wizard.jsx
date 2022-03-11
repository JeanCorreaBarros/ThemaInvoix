import React,{useState} from 'react'
import PasoUno from './PasoUno';
import PasoDos from './PasoDos';
import PasoTres from './PasoTres';
import PasoFinal from './PasoFinal';


const Wizard = () => {
    
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
    const pasoAtras = () =>{
      const {paso}= state;
      setState( {paso: paso -1}) 
    }

    const handleInputChange = ({target:{name, value}})=> {
      setState({...state,[name]: value});
    }
    
    function Wizard () {
        switch(state.paso){
          case 1:
            return <PasoUno 
            handleInputChange={handleInputChange}
            siguientePaso={siguientePaso}   
            />
          case 2:
            return <PasoDos
            handleInputChange={handleInputChange}
            siguientePaso={siguientePaso} 
            pasoAtras={pasoAtras}
             />
          case 3:
            return <PasoTres
            state={state}
            handleInputChange={handleInputChange}
            siguientePaso={siguientePaso} 
            pasoAtras={pasoAtras}
            />   
          case 4:
            return <PasoFinal
            handleInputChange={handleInputChange}
            siguientePaso={siguientePaso} 
            pasoAtras={pasoAtras}
            />  
          default:
            <div>ERROR</div> 
        } 
    } 
   
  return (
    <div className=" w-12/12 h-screen flex justify-center items-center bg-gray-100 ">
      <div className=" bg-gray-300 w-4/12 h-5/6 rounded-md shadow-md border border-gray-300 ">
        {Wizard()}
      </div>

    </div>
    
    
  )
}

export default Wizard