import React from 'react'

const PasoDos = (props) => {
  return (
    <div className="w-full h-5/6 ">
      <div className="mt-5 flex flex-col items-center pb-3">
        <h3 className="text-xl">¡Hola,te damos la bienvenida!</h3>
        <span className="text-center">Diligencia estos datos y ayudanos a brindarte <br/>la mejor experiencia</span>
      </div>
      <div className="bg-gray-300 w-full h-80  border items-center pt-5">
        <form className="flex flex-col gap-y-5 items-center">
          <label htmlFor="" className="flex gap-2">
            <input type="text" name="nombre" id="" placeholder="Introducir tu nombre completo" className="w-80 h-10 rounded"/>
          </label>
          <label htmlFor="" className="flex gap-2">
            <input type="text" name="empresa" id="" placeholder=" Nombre de tu Empresa" className="w-80 h-10 rounded" />
          </label>
          <label htmlFor="" className="flex gap-2">
            <input type="text" name="Municipio" id="" placeholder="Municipio" className="w-80 h-10 rounded" />
          </label>
          <span className="text-md text-center">Puedes cambiar tus datos en cualquier momento <br/> desde la configuración</span>

        </form>

        
      </div>
      <div className="w-full h-16 flex justify-between items-center ">
        <button onClick={props.pasoAtras}  name="atras" className="ml-5 w-40 h-10 bg-blue-500 text-white hover:bg-blue-600 rounded">Anterior</button>
        <button onClick={props.siguientePaso}  name="siguiente" className="mr-5 w-40 h-10 bg-blue-500 text-white hover:bg-blue-600 rounded">Siguiente</button>
      </div>
  
    </div>
  )
}

export default PasoDos