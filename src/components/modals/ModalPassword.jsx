import React from 'react';


const ModalPassword = (props) => {
    
    return (
        <div className={`bg-gradient-to-r from-slate-500 w-full ${props.active ? '' :'hidden'} h-full grid place-items-center absolute z-10`}>
            <div className=" w-2/5 h-3/5 flex  flex-col justify-center  bg-white border-black rounded-xl text-center relative bottom-20">
               <div className=" mb-5 w-full flex justify-center items-center ">
                   <h3 className="text-xl">¿No puedes iniciar sesión?</h3>
               </div>
               <div className=" w-full mb-5 flex flex-col justify-center items-center rounded ">
                   <label htmlFor="newPassword" className="flex flex-col items-start">
                        <span className="text-sm text-gray-400">Enviaremos un enlace de recuperación a</span>
                        <input type="email" name="newpasswordcorrea" id="" placeholder="Introducir tu correo " className=" ring-2 w-72 h-10 pl-2  text-gray-500 rounded"/>
                   </label>
               </div>
                <div className=" w-full flex flex-col justify-center items-center gap-10"> 
                <button 
                    type="button"
                    onClick={()=> props.setActive(!props.active)}
                    className='rounded-md ring-2  w-72 h-10  bg-blue-500 text-white hover:bg-blue-600'
                >
                   Enviar enlace de recuperacion
                </button>

                
                
                <button 
                    type="button"
                    onClick={()=> props.setActive(!props.active)}
                    className='  hover:underline  ring-red-300  w-72 h-10 text-blue-400   '
                >
                    Volver a Inicio de sesión
                </button>
                
                </div>
            </div>
        </div>
    )
}

export default ModalPassword
