import React, { useState, useEffect } from "react";
import Swal from 'sweetalert2'
import { menu } from '../utils/DataMenu'

const Sidebar = () => {
  const [menuList, setMenuList] = useState([]);

  /*useEffect(() => {
    const fetchMenu = async () => {
      try {
        const token = sessionStorage.getItem('token'); // Obtener el token de sessionStorage
        const response = await fetch('https://api.invoix.co/v1/load-menu', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        setMenuList(data.menu);
        // Guardar en el localStorage
        localStorage.setItem('menu', JSON.stringify(data.menu));
      } catch (error) {
        console.error('Error fetching menu:', error);
      }
    };

    fetchMenu();
  }, []);*/

  useEffect(() => {
    const storedMenu = localStorage.getItem('menu');
    if (storedMenu) {
      const menuData = JSON.parse(storedMenu);
      setMenuList(menuData);
    } else {
      // No hay datos almacenados en el localStorage, realizar alguna acción por defecto
      // ...
    }
  }, []);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const token = sessionStorage.getItem('token');
        const response = await fetch('https://api.invoix.co/v1/load-menu', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        setMenuList(data.menu);

        // Guardar en el localStorage
        localStorage.setItem('menu', JSON.stringify(data.menu));
      } catch (error) {
        console.error('Error fetching menu:', error);
      }
    };

    fetchMenu();
  }, []);

  const handleCloseSession = () => {
    Swal.fire(
      'Cerrando Session!',
      'Te esperamos Pronto!',
      'success'
    )
    setTimeout(() => {
      sessionStorage.removeItem("token")
      location.reload()

    }, 2000);

  }

  /*const userRole = "free";

  const filteredMenu = menu.filter(option => option.role === "all" || option.role.split(",").includes(userRole));*/

  return (
    <aside
      id="sidebar"
      className={`hidden fixed z-20 h-full top-0 left-0 pt-10  lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75 overflow-y-hidden`}
      aria-label="Sidebar"
    >
      <div className="relative flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white pt-0">
        <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
          <div className="flex flex-col justify-between h-screen bg-white border-r">

            <div className="px-4 py-2">
              <nav aria-label="Main Nav" className="flex flex-col mt-2 space-y-1">
                <a

                  href="/"
                  className="flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-green-600 hover:text-gray-50"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 opacity-75"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      stroke-linecap="round"
                      strokeLinejoin="round"
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      stroke-linecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="ml-3 text-sm font-medium">
                    DashBoard
                  </span>
                </a>
                {menuList.map((item, index) => {
                  switch (item.type) {
                    case "link":
                      return (
                        <a
                          key={index}
                          href={item.link}
                          className="flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-green-600 hover:text-gray-50"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 opacity-75"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path
                              stroke-linecap="round"
                              strokeLinejoin="round"
                              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                            />
                            <path
                              stroke-linecap="round"
                              strokeLinejoin="round"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                          <span className="ml-3 text-sm font-medium">
                            {item.title}
                          </span>
                        </a>
                      );
                    case "details":
                      return (
                        <details
                          key={index}
                          className="group summary::-webkit-details-marker:hidden"
                        >
                          <summary className="flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-green-600 hover:text-gray-50">
                            <span className="material-symbols-outlined">{item.icon}</span>
                            <span className="ml-3 text-sm font-medium">
                              {item.title}
                            </span>
                            <span className="ml-auto transition duration-300 shrink-0 group-open:-rotate-180">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-5 h-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </span>
                          </summary>
                          <ul className="bg-gray-200 rounded-lg">
                            {item.items.map((subitem, subindex) => {
                              return (
                                <li key={subindex} className="">
                                  <a
                                    href={subitem.link}
                                    className="flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-green-600 hover:text-gray-50"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="w-5 h-5 opacity-75"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                                      />
                                    </svg>
                                    <span className="ml-3 text-sm font-medium">
                                      {subitem.title}
                                    </span>
                                  </a>
                                </li>
                              );
                            })}
                          </ul>
                        </details>
                      );
                    default:
                      return null;
                  }
                })}
              </nav>
            </div>

          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
