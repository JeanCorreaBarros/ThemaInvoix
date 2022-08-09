import React from 'react';
import {Link }from 'react-router-dom'
import './modals.css';

import perfil from '../../assets/img/perfil.png';

const ModalPerfil = () => {
  const  user = JSON.parse(sessionStorage.getItem('User'));

  const handleCloseButton = () => {
    sessionStorage.removeItem('User');
    window.location.reload();
  }
  

  return (
    <div className="modal_perfil">
       <div className=" w-full h-28 flex flex-col justify-center items-center">
          <div>
            <img src={user.photo_perfil ? user.photo_perfil  : perfil } alt="" className="w-10 h-10 rounded-3xl" />
          </div>
          <div className="text-sm pt-1">{user.name ? user.name : user.email}</div>
          <div className="text-xs pt-1">Administrador</div>
        </div>
        <hr/>
        <div className=" h-2/6 flex flex-col justify-center  ">
          <div className="w-full h-10 flex hover:bg-gray-200 cursor-pointer">
            <Link  to="#" className="pl-2 pt-2 ">Mi Cuenta</Link>
          </div>
          <div className="w-full h-10 flex hover:bg-gray-200 cursor-pointer ">
            <Link  to="#" className="pl-2 pt-2">Configuracion</Link >
          </div>
          <div className="w-full h-10 flex hover:bg-gray-200 cursor-pointer ">
            <Link  to="#" className="pl-2 pt-2">Restableces Contraseña</Link> 
          </div>
        </div>
        <hr/>
        <div className="flex justify-center item-center">
          <button onClick={handleCloseButton}   className=" rounded-md w-3/5 h-8 mt-7 text-white bg-lime-600  hover:bg-lime-700 " >Cerrar Sesion</button>
        </div>
    </div>
  )
}

export default ModalPerfil