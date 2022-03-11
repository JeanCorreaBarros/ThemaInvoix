import React,{useState} from 'react'
import {Link }from 'react-router-dom'
import ItemsSubMenu from './ItemsSubMenu';

const ItemsMenu = ({item}) => {
    const [subnav, setSubnav] = useState(false);

    const showSubnav = () => setSubnav(!subnav);
  return (
    <li className=""  key={item.key} onClick={item.subNav && showSubnav}>
            <div className="relative flex justify-between text-lime-800  cursor-pointer rounded hover:bg-lime-600 hover:text-white   ">
              <div className="flex items-center w-full">
                  <div className=" flex items-center pl-2 pointer-events-none ">
                    <span className="w-5 h-5 ">{item.icon}</span>
                  </div>
                  <Link to={item.path} className="inline-block w-full py-2 pl-8 pr-4 text-sm ">
                    {item.title}
                  </Link>
              </div>
              <button className=" flex justify-center items-center pr-2 " tabIndex="-1">
              {item.subNav && subnav
              ? item.iconOpened
              : item.subNav
                ? item.iconClosed
                : null}
              </button>
            </div>
            {subnav && item.subNav.map((item, index) => {
                return (
                    <ItemsSubMenu to={item.path} key={index} title={item.title}/>
                );
            })}
        </li>
  )
}

export default ItemsMenu