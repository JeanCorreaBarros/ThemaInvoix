import React from 'react';


const ModalPassword = (props) => {
    
    return (
        <div className={`bg-gradient-to-r from-slate-500 w-full ${props.active ? '' :'hidden'} h-full grid place-items-center absolute z-10`}>
            <div className=" w-2/5 h-2/5 flex  flex-col justify-center  bg-white border-black rounded-xl text-center relative bottom-20">
               <div className=" mb-5 w-full flex justify-center items-center ">
                   <h3>Restablece tu Contraseña</h3>
               </div>
               <div className=" w-full mb-5 flex justify-center items-center rounded ">
                   <label htmlFor="newPassword">
                        <input type="email" name="" id="" placeholder="Ingresa tu Correo " className=" ring-2 w-64 h-10 pl-2  text-gray-500 rounded"/>
                   </label>
               </div>
                <div className=" w-full flex justify-center items-center gap-10"> 
                <button 
                    type="button"
                    onClick={()=> props.setActive(!props.active)}
                    className=' rounded-md ring-2  ring-red-300  w-32 h-10 text-red-400 hover:bg-red-400 hover:text-white '
                >
                    Cancelar 
                </button>
                <button 
                    type="button"
                    onClick={()=> props.setActive(!props.active)}
                    className='rounded-md ring-2  w-32 h-10 text-sky-400 hover:bg-blue-500 hover:text-white '
                >
                   Enviar
                </button>
                </div>
            </div>
        </div>
    )
}

export default ModalPassword
