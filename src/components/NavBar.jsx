import React, { useState, useEffect } from "react";
import Swal from 'sweetalert2'
import ModalOptionCreate from "./modals/ModalOptionCreate";

const NavBar = ({ isVisible, setIsVisible }) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');


  useEffect(() => {
    // Obtener los valores del Session Storage al cargar el componente
    const storedName = sessionStorage.getItem('name');
    const storedEmail = sessionStorage.getItem('email');

    // Guardar los valores en los estados correspondientes
    setName(storedName);
    setEmail(storedEmail);
  }, []);

  const handleCloseSession = () => {
    const token = sessionStorage.getItem('token'); // Obtener el token de sessionStorage
    fetch('https://api.invoix.co/v1/logout', {
      method: 'POST', // Ajusta el método según lo requerido por la API
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => {
        if (response.ok) {
          // La solicitud de cierre de sesión fue exitosa
          console.log('Se ha cerrado la sesión correctamente.');
          // Aquí puedes realizar cualquier otra acción necesaria, como redireccionar al usuario a la página de inicio de sesión.
        } else {
          // La solicitud de cierre de sesión falló
          console.log('Error al cerrar la sesión.');
          // Manejar el error o mostrar un mensaje al usuario, según sea necesario
        }
      })
      .catch(error => {
        console.log('Error en la solicitud:', error);
        // Manejar el error o mostrar un mensaje al usuario, según sea necesario
      });

    Swal.fire(
      'Cerrando Session!',
      'Te esperamos Pronto!',
      'success'
    )
    setTimeout(() => {
      sessionStorage.removeItem("token")
      sessionStorage.removeItem("email")
      sessionStorage.removeItem("name")
      sessionStorage.removeItem("comercialname")
      sessionStorage.removeItem("idNumber")
      sessionStorage.removeItem("prefijo")
      localStorage.removeItem("menu")
      location.reload()

    }, 2000);

  }


  const toggleVisibilitySidebar = () => {
    setIsVisible(!isVisible);
    console.log(isVisible)
  };

  const [modalPerfil, setModalPerfil] = useState(true)
  const ToggleModalPerfil = () => {
    setModalPerfil(!modalPerfil)
  }

  const [modalNotification, setModalNotification] = useState(true)
  const ToggleModalNotification = () => {
    setModalNotification(!modalNotification)
    console.log("Notificacion")
  }

  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show)
  }


  return (
    <>
      <nav className="px-4 lg:px-6 py-2.5 bg-white fixed z-30 w-full bg-opacity-25 shadow-lg backdrop-blur-4 border-opacity-18 border border-solid border-white rounded-lg p-4">
        <div className="flex flex-wrap justify-between items-center">

          <div className="flex justify-start items-center">

            <button id="toggleSidebar" onClick={toggleVisibilitySidebar} aria-expanded="true" aria-controls="sidebar" className="hidden p-2 mr-3  rounded cursor-pointer lg:inline  text-white bg-blue-500 hover:bg-blue-600">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
            </button>

            <button aria-expanded="true" aria-controls="sidebar" onClick={toggleVisibilitySidebar} className="hidden p-2 mr-2 text-gray-600 rounded-lg cursor-pointer lg:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100  ">
              <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
              <svg aria-hidden="true" className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              <span className="sr-only">Toggle sidebar</span>
            </button>

            <a href="/" className="flex  items-center ml-44 md:ml-5 mr-4">
              <img src="https://i.ibb.co/b1WTgJn/logoGF.png" className="mr-2 h-8 rounded-sm" alt="Invoix Logo" />
              <span className="self-center text-[20px] pt-2 font-semibold whitespace-nowrap dark:text-white">
                <span className="text-blue-500  font-bold">Gratis Factura</span>
              </span>
            </a>


            <form action="#" method="GET" className="hidden ml-5 lg:block lg:pl-2">
              <label htmlFor="topbar-search" className="sr-only">Search</label>
              <div className="relative mt-1 lg:w-96">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg className="w-5 h-5 text-blue-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                </div>
                <input type="text" name="email" id="topbar-search" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 " placeholder="Buscador General" />
              </div>
            </form>
          </div>

          <div className="hidden md:flex items-center lg:order-2">
            <button onClick={() => handleShow()} type="button" className="hidden sm:inline-flex items-center justify-center text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-xs px-5 py-1.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"><svg aria-hidden="true" className="mr-1 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"></path></svg>Crear Nuevo</button>
            <button id="toggleSidebarMobileSearch" type="button" className=" hidden p-2 text-gray-500 rounded-lg lg:hidden hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              <span className="sr-only">Mas</span>
              <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
            </button>

            {/** Btn Notificaciones */}
            <button type="button" onClick={ToggleModalNotification} data-dropdown-toggle="notification-dropdown" className=" p-2 mr-1 text-blue-500 rounded-full  hover:bg-blue-100 ">
              <span className="sr-only">View notifications</span>
              <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path></svg>
            </button>

            {/** Modal Notificaciones */}
            <div className={`${modalNotification ? "hidden" : "absolute top-[52px] right-28 overflow-hidden z-50 my-4 max-w-sm text-base list-none bg-white  divide-y divide-gray-100   bg-opacity-25 shadow-lg backdrop-blur-md border-opacity-18 border border-solid border-white rounded-lg p-4"}`} id="notification-dropdown">
              <div className="block py-2 px-4 text-base font-medium text-center  bg-gray-50 dark:bg-blue-500 rounded-md text-gray-50">
                Notifications
              </div>
              <div>

                <a href="#" className="flex py-3 px-4 border-b my-5 bg-white hover:bg-gray-600 shadow-sm hover:border-blue-600 rounded-md">
                  <div className="flex-shrink-0">
                    <img className="w-11 h-11 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Bonnie Green avatar" />
                    <div className="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 rounded-full border border-white bg-primary-700 dark:border-gray-700">
                      <svg aria-hidden="true" className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path><path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path></svg>
                    </div>
                  </div>
                  <div className="pl-3 w-full">
                    <div className="text-gray-500 font-normal text-sm mb-1.5 ">New message from <span className="font-semibold text-blue-500">Bonnie Green</span>: "Hey, what's up? All set for the presentation?"</div>
                    <div className="text-xs font-medium text-gray-700 ">a few moments ago</div>
                  </div>
                </a>
                
              </div>
              <a href="#" className="block py-2 text-base font-normal text-center   hover:bg-blue-500 bg-blue-500 rounded-md text-white hover:underline">
                <div className="inline-flex items-center ">
                  <svg aria-hidden="true" className="mr-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path><path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"></path></svg>
                  View all
                </div>
              </a>
            </div>

          
            {/** Btn Perfil */}
            <button type="button" onClick={ToggleModalPerfil} className="flex mx-3 text-sm bg-blue-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-blue-500" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="dropdown">
              <span className="sr-only">Open user menu</span>
              <img className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo" />
            </button>

            {/** Modal Perfil */}
            <div className={`${modalPerfil ? "hidden" : "absolute top-[52px] right-2 z-50 my-4 w-56 text-base list-none bg-blue-500   divide-y divide-gray-100 bg-opacity-25 shadow-lg backdrop-blur-md border-opacity-18 border border-solid border-white rounded-lg p-4"}`} id="dropdown">
              <div className="py-3 px-4">
                <span className="block text-md font-bold text-blue-700 ">{name}</span>
                <span className="block text-sm font-bold text-gray-600 truncate">{email}</span>
              </div>
              <ul className="py-1 font-light text-gray-600" aria-labelledby="dropdown">
                {/*<li>
                  <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-green-600 dark:text-gray-400 dark:hover:text-white font-bold">My profile</a>
                </li>*/}
                <li>
                  <a href="perfile" className="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-blue-600 rounded-md hover:text-white font-bold">Datos de Perfil</a>
                </li>
              </ul>
              <ul className="py-1 font-bold text-gray-600" aria-labelledby="dropdown">
                <li>
                  <a href="#" className="flex justify-between items-center py-2 px-4 text-sm hover:bg-gray-100 rounded-md dark:hover:bg-blue-600 dark:hover:text-white font-bold">
                    <span className="flex items-center">
                      <svg aria-hidden="true" className="mr-2 w-5 h-5 text-primary-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd"></path></svg> Pro version
                    </span>
                    <svg aria-hidden="true" className="w-5 h-5  text-blue-500 hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                  </a>
                </li>

              </ul>
              <ul className="py-1 font-bold text-gray-600" aria-labelledby="dropdown">
                <li>
                  <a href="#" onClick={handleCloseSession} className="block py-2 px-4 text-sm rounded-md hover:bg-gray-100 dark:hover:bg-blue-600 dark:hover:text-white font-bold">Cerrar Session </a>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </nav>
      <ModalOptionCreate show={show} setShow={setShow} />
    </>
  );
};

export default NavBar;
