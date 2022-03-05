import React from 'react';
import * as IoIcons from 'react-icons/io';
import { BiPlusCircle, BiFile, BiLineChartDown, BiCalendarWeek } from "react-icons/bi"
import { FaUserCircle } from "react-icons/fa"
import { IoSettingsOutline } from "react-icons/io5"
import { CgCalculator, CgHomeAlt } from "react-icons/cg"
import { AiOutlineMinusCircle, AiOutlineFolderAdd } from "react-icons/ai";

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/',
    icon: <CgHomeAlt />,
    iconClosed: <BiPlusCircle />,
    iconOpened: <AiOutlineMinusCircle />,
  },
  {
    title: 'Agenda',
    path: '#',
    icon: <BiCalendarWeek />,
    iconClosed: <BiPlusCircle />,
    iconOpened: <AiOutlineMinusCircle />,

    subNav: [
      {
        title: 'Crear Agenda',
        path: '/prueba',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'Option',
        path: '/prueba',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'Option',
        path: '/prueba',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Atencion',
    path: '#',
    icon: <FaUserCircle />,
    iconClosed: <BiPlusCircle />,
    iconOpened: <AiOutlineMinusCircle />,

    subNav: [
      {
        title: 'Crear Paciente',
        path: '/prueba',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'Option',
        path: '/prueba',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'Option',
        path: '/prueba',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Caja',
    path: '#',
    icon: <CgCalculator />,
    iconClosed: <BiPlusCircle />,
    iconOpened: <AiOutlineMinusCircle />,

    subNav: [
      {
        title: 'Crear Caja',
        path: '/prueba',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Option',
        path: '/prueba',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Option',
        path: '/prueba',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Facturacion',
    path: '#',
    icon: <BiFile />,
    iconClosed: <BiPlusCircle />,
    iconOpened: <AiOutlineMinusCircle />,

    subNav: [
      {
        title: 'Crear Factura',
        path: '/prueba',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Option',
        path: '/prueba',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Option',
        path: '/prueba',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Radicacion',
    path: '#',
    icon: <AiOutlineFolderAdd />,
    iconClosed: <BiPlusCircle />,
    iconOpened: <AiOutlineMinusCircle />,

    subNav: [
      {
        title: 'Crear Radicado',
        path: '/prueba',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Option',
        path: '/prueba',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Option',
        path: '/prueba',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Reportes',
    path: '#',
    icon: <BiLineChartDown />,
  },
  {
    title: 'Configuracion',
    path: '#',
    icon: <IoSettingsOutline />,    
  },
];
