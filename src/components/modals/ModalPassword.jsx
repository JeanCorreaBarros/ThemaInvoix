import React from 'react'

const ModalPassword = (props) => {
    
    return (
        <div className={`bg-gradient-to-r from-slate-500 w-full ${props.active ? '' :'hidden'} h-full grid place-items-center absolute z-10`}>
            <div className=" w-2/5 h-2/5 bg-white border-black rounded-xl text-center relative bottom-20">
               <div className="mt-5">
                   <h3>Restablece tu Contraseña</h3>
               </div>
               <div className="">
                   <label htmlFor="newPassword">
                        <input type="password" name="" id="" placeholder="NewPassword"/>
                   </label>
               </div>
                <button 
                    type="button"
                    onClick={()=> props.setActive(!props.active)}
                    className='mt-32 rounded-md ring-2 w-40 h-10 text-sky-400 '
                >
                    Guardar Cambios 
                </button>
            </div>
        </div>
    )
}

export default ModalPassword
