import React, { useState } from "react";
import styled from "styled-components";
import { BiPlusCircle } from "react-icons/bi";
import { VscBellDot } from "react-icons/vsc";
import ModalButtonMas from "../modals/ModalButtonMas";
import ModalNotificacion from "../modals/ModalNotificacion";
import ModalPerfil from "../modals/ModalPerfil";
import "./Navbar.css";
import SideBar from "../sidebar/Sidebar";
import { useClickOutside } from "../../services/Mause";
import perfil from "../../assets/img/perfil.png";
import { motion } from "framer-motion";

const Nav = styled.span`
  background: #0a58ca;
  height: 55px;
  width: 100%;
  position: fixed;
  display: flex;
  vertical-align: top;
  align-items: center;
  padding: 10px;
  z-index: 999;
`;

const Navbar = (props) => {
  const [verdad, setVerdad] = useState(false);
  function NavItem(props) {
    const [isOpen, setIsOpen] = useState(false);

    let domNode = useClickOutside(() => {
      setIsOpen(false);
    });

    return (
      <div ref={domNode} className="nav-item">
        <button onClick={() => setIsOpen((isOpen) => !isOpen)} type="button">
          {props.img}
          {props.icon}
        </button>
        {isOpen && props.children}
      </div>
    );
  }

  //const user = JSON.parse(sessionStorage.getItem("User"));
  return (
    <>
      <Nav className="flex justify-between">
        <div className="flex justify-around items-center gap-x-6 pl-32 ">
        <motion.div  animate={{
          visibility: verdad ? "hidden" : "", 
        }}>
          <div className={`w-12 h-12 flex justify-center items-center rounded-3xl hover:bg-blue-800 `}>
            <NavItem icon={<BiPlusCircle className="opciones" />}>
              <ModalButtonMas />
            </NavItem>
          </div>
          </motion.div>
          <motion.div  animate={{
          visibility: verdad ? "" : "hidden", 
        }}>
          <div className={`w-12 h-12 ml-28 flex justify-center items-center rounded-3xl hover:bg-blue-800`}>
            <NavItem icon={<BiPlusCircle className="opciones" />}>
              <ModalButtonMas />
            </NavItem>
          </div>
          </motion.div>
        </div>
        <div className="flex justify-center items-between gap-x-12 pr-5">
          <div className=" w-12 h-12 flex justify-center  items-center rounded-3xl hover:bg-blue-800">
            <NavItem icon={<VscBellDot className="text-xl text-white " />}>
              <ModalNotificacion />
            </NavItem>
          </div>

          <div className=" w-12 h-12 flex justify-center  items-center rounded-3xl hover:bg-blue-800">
            <NavItem
              img={
                <img src={perfil} alt="" className=" w-10 h-10 rounded-3xl" />
              }
            >
              <ModalPerfil />
            </NavItem>
          </div>
        </div>
      </Nav>
      <div className="flex w-full">
        <SideBar 
        estado={verdad}
        cambio={setVerdad}
        />
        {props.children}
      </div>
    </>
  );
};

export default Navbar;
