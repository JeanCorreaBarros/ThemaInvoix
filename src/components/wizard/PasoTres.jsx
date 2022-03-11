import React from 'react'
import SRC from '../../assets/videos/video-wizard.mp4';

const PasoTres = (props) => {
 
  return (
    <div className="w-full h-5/6 ">
      <div className="mt-5 flex flex-col items-center pb-3">
        <h3 className="text-xl">¡Hola,te damos la bienvenida!</h3>
        <span className="text-center">Mira esta pequeña guia y ayudanos a brindarte <br/>la mejor experiencia</span>
      </div>
      <div className="bg-gray-300 w-full h-80  border items-center ">
      <video
        className=' object-cover w-full h-80' 
        controls={true}
        autoPlay={false}
        loop={false}
        muted={true}>
        <source 
          src={SRC}
          type="video/mp4" />
      </video>
      </div>
      <div className="w-full h-16 flex justify-between items-center ">
        <button onClick={props.pasoAtras}  name="atras" className="ml-5 w-40 h-10 bg-blue-500 text-white hover:bg-blue-600 rounded">Anterior</button>
        <button onClick={props.siguientePaso}  name="siguiente" className="mr-5 w-40 h-10 bg-blue-500 text-white hover:bg-blue-600 rounded">Siguiente</button>
      </div>
  
    </div>
  )
}

export default PasoTres