import React from 'react'
import { FaHospital } from "react-icons/fa";


const PasoUno = (props) => {
  return (
    <div className="w-full h-96 ">
      <div className="mt-5 flex flex-col items-center pb-3">
        <h3 className="text-xl">¡Hola, 🤗 te damos la bienvenida!</h3>
        <span className="text-center">Elije tu Especialidad y ayudanos a brindarte<br/> la mejor experiencia</span>
      </div>
      <div className="bg-gray-300 w-full h-80 flex flex-col border  items-center   ">
        <button onClick={props.handleInputChange}   className=" bg-blue-400 rounded w-10/12 h-16 flex items-center gap-5 hover:bg-blue-600 cursor-pointer mt-3" name="especialidad" value='medicina general'>
          <span className="pl-5 text-white"><FaHospital/></span>
          <h3  className="text-white">Medicina General</h3>
        </button>
        <button onClick={props.handleInputChange}   className=" bg-blue-400 rounded w-10/12 h-16 flex items-center gap-5 hover:bg-blue-600 cursor-pointer mt-3" name="especialidad" value='Pediatria'>
          <span className="pl-5 text-white"><FaHospital/></span>
          <h3  className="text-white">Pediatria</h3>
        </button>
        <button onClick={props.handleInputChange}   className=" bg-blue-400 rounded w-10/12 h-16 flex items-center gap-5 hover:bg-blue-600 cursor-pointer mt-3" name="especialidad" value='Odontologia'>
          <span className="pl-5 text-white"><FaHospital/></span>
          <h3  className="text-white">Odontologia</h3>
        </button>
        <button onClick={props.handleInputChange}   className=" bg-blue-400 rounded w-10/12 h-16 flex items-center gap-5 hover:bg-blue-600 cursor-pointer mt-3" name="especialidad" value='Psicologia'>
          <span className="pl-5 text-white"><FaHospital/></span>
          <h3  className="text-white">Psicologia</h3>
        </button>
        
      </div>

      <div className="w-full h-16 flex justify-end items-center ">
        <button onClick={props.siguientePaso}   name="paso" className="mr-5 w-40 h-10 bg-blue-500 text-white hover:bg-blue-600 rounded">Siguiente</button>
      </div>
  
    </div>
  )
}

export default PasoUno