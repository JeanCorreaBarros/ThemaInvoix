import React from 'react'
import './modals.css';
import { OptionBtnNoti } from './optionsbtn/OptionBtnNoti';


const ModalNotificacion = () => {
  return (
    <div className="modal_notificacion flex justify-center pt-5 ">
      <div className="w-11/12 rounded-xl h-20 bg-gray-300">
        <div className=" w-full h-full flex flex-col  justify-center items-center ">
          <h3 className="font-semibold text-lg">Notificaciones</h3>
          <span>Usted Tiene<span className="text-red-600"> 2 </span> Nuevos Mensajes </span>
        </div>
        <div className=" w-full h-64 flex flex-col bg-gray-300 rounded-xl mt-1 pt-7 pb-5 justify-center items-center overflow-y-scroll overflow-hidden ">
          <OptionBtnNoti
            menssages={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsc'}
            color={'bg-red-600'}
          />
          <OptionBtnNoti
            menssages={'Lorem Ipsum is siIpsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic '}
            color={'bg-red-600'}
          />   
        </div>
      </div>
    </div>
  )
}

export default ModalNotificacion