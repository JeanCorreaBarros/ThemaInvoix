import React from 'react';
import SRC from '../../assets/img/buenaSuerte.svg';
import {useAuth} from '../../context/authContext'

const PasoFinal = (props) => {
    
    const {handlepop} = useAuth()

    
  return (
    <div className="w-full h-5/6 ">
      <div className="mt-5 flex flex-col items-center pb-3">
        <h3 className="text-xl">¡Gracias Por preferirnos!</h3>
        <span className="text-center">Te deseamos la mejor experiencia</span>
      </div>
      <div className=" w-full h-96 flex justify-center  border  ">
          <img src={SRC} alt="img" className="w-5/6 h-96 pt-3"/>
          
      </div>
      <div className="w-full h-16 flex justify-between items-center ">
        <button onClick={props.pasoAtras}  name="atras" className="ml-5 w-40 h-10 bg-blue-500 text-white hover:bg-blue-600 rounded">Anterior</button>
        <button onClick={handlepop}  name="siguiente" className="mr-5 w-40 h-10 bg-blue-500 text-white hover:bg-blue-600 rounded">Iniciar Ya!!</button>
      </div>
  
    </div>
  )
}

export default PasoFinal