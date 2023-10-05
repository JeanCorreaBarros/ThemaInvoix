import React, { useState } from 'react'

const ModalOptionCreate = ({ show }) => {

    return (
        <>
            <div className={`flex ${show ? "" : "hidden"} items-center justify-center  absolute z-50 top-20 right-16 shadow-2xl `}>
                <div id="dropdown" className=" w-56 p-3 bg-white rounded-lg shadow dark:bg-gray-700">
                    <ul className="space-y-2 text-sm flex flex-col justify-center p-3" aria-labelledby="dropdownDefault">
                        <li className="flex items-center cursor-pointer  hover:bg-green-500 p-1 rounded-lg">
                            <svg aria-hidden="true" className=" ml-1 w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"></path></svg>
                            <label htmlFor="apple" className="ml-2 cursor-pointer text-sm font-medium text-gray-900 dark:text-gray-100">
                                Ingreso
                            </label>
                        </li>
                        <li className="flex items-center  hover:bg-green-500 p-1 rounded-lg">
                            <svg aria-hidden="true" className=" ml-1 w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"></path></svg>
                            <label htmlFor="fitbit" className="ml-2 cursor-pointer text-sm font-medium text-gray-900 dark:text-gray-100">
                                Gasto
                            </label>
                        </li>
                        <li className="flex items-center  hover:bg-green-500 p-1 rounded-lg">
                            <svg aria-hidden="true" className=" ml-1 w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"></path></svg>
                            <label htmlFor="dell" className="ml-2 cursor-pointer text-sm font-medium text-gray-900 dark:text-gray-100">
                                Factura
                            </label>
                        </li>
                        <li className="flex items-center  hover:bg-green-500 p-1 rounded-lg">
                            <svg aria-hidden="true" className=" ml-1 w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"></path></svg>
                            <label htmlFor="asus" className="ml-2 cursor-pointer text-sm font-medium text-gray-900 dark:text-gray-100">
                                Remision
                            </label>
                        </li>
                        <li className="flex items-center  hover:bg-green-500 p-1 rounded-lg">
                            <svg aria-hidden="true" className=" ml-1 w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"></path></svg>
                            <label htmlFor="logitech" className="ml-2 cursor-pointer text-sm font-medium text-gray-900 dark:text-gray-100">
                                Factura Compra
                            </label>
                        </li>
                        <li className="flex items-center  hover:bg-green-500 p-1 rounded-lg">
                            <svg aria-hidden="true" className=" ml-1 w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"></path></svg>
                            <label htmlFor="msi" className="ml-2 cursor-pointer text-sm font-medium text-gray-900 dark:text-gray-100">
                                Orden de Compra
                            </label>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default ModalOptionCreate