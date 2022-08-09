import React from 'react'

function WindowEmergente(props) {
    const handleCloseButton = ()=>{
        props.estado(false)
    }
  return (
    <div className="w-full h-screen flex justify-center items-center absolute top-0 left-0 bottom-0 z-[9999] bg-transparente backdrop-blur-sm  ">
        <div className="w-96 h-96 flex justify-around bg-white border border-solid border-lime-600">
            <button className="w-56 h-16 bg-lime-600 border border-solid border-lime-700 rounded-md" onClick={handleCloseButton}>Cancelar</button>
        </div> 
    </div>
  )
}

export default WindowEmergente
