import React from 'react';
import {FaPlusCircle} from "react-icons/fa";
import './modals.css';
import OptionBtnPlus from './optionsbtn/OptionBtnPlus';

const ModalButtonMas = () => {
  

  return (
    <div className="modal_mas">
      <div></div>
      <OptionBtnPlus 
        icon={FaPlusCircle}
        title={'Crear Paciente'}
      />
      <OptionBtnPlus 
        icon={FaPlusCircle}
        title={'Crear Ingreso'}
      />
      <OptionBtnPlus 
        icon={FaPlusCircle}
        title={'Crear Agenda'}
      />
      <OptionBtnPlus 
        icon={FaPlusCircle}
        title={'Crear Factura'}
      />
      <OptionBtnPlus 
        icon={FaPlusCircle}
        title={'Crear Radicado'}
      />
      <OptionBtnPlus 
        icon={FaPlusCircle}
        title={'Crear Rips'}
      />
    </div>
  )
}

export default ModalButtonMas