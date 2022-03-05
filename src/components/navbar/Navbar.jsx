import React,{ useState} from 'react';
import styled from 'styled-components';
import * as FaIcons from 'react-icons/fa';
import { BiPlusCircle } from "react-icons/bi";
import { VscBellDot } from "react-icons/vsc";
import ModalButtonMas from '../modals/ModalButtonMas';
import ModalNotificacion from '../modals/ModalNotificacion';
import ModalPerfil from '../modals/ModalPerfil';
import './Navbar.css';
import {Sidebar} from '../sidebar/Sidebar';
import {useClickOutside} from '../../services/Mause'
import perfil from '../../assets/img/perfil.png';



const Nav = styled.span`
  background: #2d78b1;
  height: 55px;
  width:100%;
  position:fixed;
  display: flex;
  vertical-align: top;
  align-items: center;
  padding: 10px;
  box-shadow: -1px 7px 24px -8px #2d78b175;
  z-index: 999;
`;

const Navbar = (props) => {

  function NavItem(props) {

    const [isOpen, setIsOpen] = useState(false);

    let domNode = useClickOutside(() => {
      setIsOpen(false);
    });

    return (
      <div ref={domNode}  className="nav-item">
        <button onClick={() => setIsOpen((isOpen) => !isOpen)}  type="button" >
          {props.img}
          {props.icon}
        </button>
        {isOpen && props.children}
      </div>
    );
  }

  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () =>{
    setSidebar(!sidebar);
  } 

  const user = JSON.parse(localStorage.getItem('user'));


  return (
    <>
      <Nav className="flex justify-between">

        <div className="flex justify-around items-center gap-x-6 pl-5 ">
          <button onClick={showSidebar} className="text-white  w-12 h-12 flex justify-center items-center rounded-3xl hover:bg-blue-600 ">
            <FaIcons.FaBars  />
          </button>

          <div className="w-40 h-12 flex justify-center items-center text-white">
            <a href={'/'} className=''>GenomaX MD</a>
          </div>

          <div className=" w-12 h-12 flex justify-center  items-center rounded-3xl hover:bg-blue-600 ">
            <NavItem icon={<BiPlusCircle className="opciones" />}>
              <ModalButtonMas/> 
            </NavItem>
          </div>
        </div>

        <div className="flex justify-center items-between gap-x-12 pr-5">

          <div className=" w-12 h-12 flex justify-center  items-center rounded-3xl hover:bg-blue-600">
            <NavItem icon={<VscBellDot className="text-xl text-white "/> }>
              <ModalNotificacion /> 
            </NavItem>
          </div>

          <div className=" w-12 h-12 flex justify-center  items-center rounded-3xl hover:bg-blue-600">
            <NavItem img={<img src={user.photoURL ? user.photoURL : perfil} alt="" className=" w-10 h-10 rounded-3xl" />}>
              <ModalPerfil />
            </NavItem>
          </div>
         
        </div>
      </Nav>
      <Sidebar 
        sidebar={sidebar}
        setSidebar={setSidebar}
        showSidebar={showSidebar}
      />
    </>
  )
}

export default Navbar