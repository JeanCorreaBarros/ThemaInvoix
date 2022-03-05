import React from 'react';
import {  BiFile, BiLineChartDown, BiCalendarWeek } from "react-icons/bi"
import { FaUserCircle } from "react-icons/fa"
import { IoSettingsOutline } from "react-icons/io5"
import { CgCalculator, CgHomeAlt } from "react-icons/cg"
import {  AiOutlineFolderAdd } from "react-icons/ai";

export const ModalDataMas = [
    {
      title: 'Dashboard',
      path: '/',
      icon: <CgHomeAlt />,
    },
    {
      title: 'AGENDA',
      path: '#',
      icon: <BiCalendarWeek />,   
    },
    {
      title: 'ATENCION',
      path: '#',
      icon: <FaUserCircle />,   
    },
    {
      title: 'CAJA',
      path: '#',
      icon: <CgCalculator />,
    },
    {
      title: 'FACTURACION',
      path: '#',
      icon: <BiFile />,
    },
    {
      title: 'RADICACIONES',
      path: '#',
      icon: <AiOutlineFolderAdd />,
    },
    {
      title: 'REPORTES',
      path: '#',
      icon: <BiLineChartDown />,
    },
    {
      title: 'CONFIGURACION',
      path: '#',
      icon: <IoSettingsOutline />,    
    },
  ];
  
