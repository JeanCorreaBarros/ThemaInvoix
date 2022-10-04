import React, { useState } from "react";
import { BiPlusCircle } from "react-icons/bi";
import { VscBellDot } from "react-icons/vsc";
import { AiOutlineMenu } from "react-icons/ai";
import ModalButtonMas from "../modals/ModalButtonMas";
import ModalNotificacion from "../modals/ModalNotificacion";
import ModalPerfil from "../modals/ModalPerfil";
import "./Navbar.css";
import SideBar from "../sidebar/Sidebar";
import { useClickOutside } from "../../services/Mause";
import perfil from "../../assets/img/perfil.png";
import styled from "styled-components";

const Navbar = (props) => {
  const [verdad, setVerdad] = useState(false);

  let mode = useClickOutside(() => {
    setVerdad(false);
  });

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

  const BotomMasMobile = styled.div`
    visibility: ${(props) => (verdad ? "hidden" : "")};

    @media (max-width: 639px) {
      visibility: ${(props) => (verdad ? "visible" : "")};
    }
  `;
  const BotomMas = styled.div`
    visibility: ${(props) => (verdad ? "" : "hidden")};
  `;

  //const user = JSON.parse(sessionStorage.getItem("User"));
  return (
    <>
      <div className="nabvar">
        <div
          id="mobile_mas"
          className="flex ml-36 justify-around items-center gap-x-6 "
        >
          <BotomMasMobile>
            <div
              id="content_mas"
              className={`w-12 h-12 flex justify-center items-center rounded-3xl hover:bg-blue-800 `}
            >
              <NavItem icon={<BiPlusCircle className="opciones" />}>
                <ModalButtonMas />
              </NavItem>
              <span>Crear</span>
            </div>
          </BotomMasMobile>
          <BotomMas>
            <div
              id="moble_buttom-mas"
              className={`w-12 h-12 ml-28 flex justify-center items-center rounded-3xl hover:bg-blue-800`}
            >
              <NavItem icon={<BiPlusCircle className="opciones" />}>
                <ModalButtonMas />
              </NavItem>
            </div>
          </BotomMas>
        </div>
        <div className="content_menu">
          <AiOutlineMenu
            id="menu_mobile"
            ref={mode}
            onClick={() => setVerdad((verdad) => !verdad)}
          />
          <span>Menú</span>
        </div>
        <div
          id="modal_perfil"
          className="flex justify-center items-between gap-x-12 pr-5"
        >
          <div
            id="mobile_notificacion"
            className=" w-12 h-12 flex justify-center  items-center rounded-3xl hover:bg-blue-800"
          >
            <NavItem icon={<VscBellDot className="text-xl text-white " />}>
              <ModalNotificacion />
            </NavItem>
          </div>
          <div
            id="perfil_mobile"
            className=" w-12 h-12 flex justify-center  items-center rounded-3xl hover:bg-blue-800"
          >
            <NavItem
              img={
                <img src={perfil} alt="" className=" w-10 h-10 rounded-3xl" />
              }
            >
              <ModalPerfil />
            </NavItem>
            <span>Perfil</span>
          </div>
        </div>
      </div>
      <div className="flex w-full">
        <SideBar estado={verdad} cambio={setVerdad} />
        {props.children}
      </div>
    </>
  );
};

export default Navbar;
