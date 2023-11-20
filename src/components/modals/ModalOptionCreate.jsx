import React, { useState } from 'react'

const ModalOptionCreate = ({ show }) => {

    return (
        <>
            <div className={`flex ${show ? "" : "hidden"} items-center justify-center  absolute z-30 top-20 right-16 shadow-2xl  `}>
                <div id="dropdown" className=" w-56  bg-blue-500   bg-opacity-25 shadow-lg backdrop-blur-md border-opacity-18 border border-solid border-white rounded-lg p-4">
                    <ul className="space-y-2 text-sm flex flex-col justify-center p-3" aria-labelledby="dropdownDefault">

                        <li className="flex items-center cursor-pointer bg-white  hover:bg-blue-100 p-3 rounded-lg">
                            <svg aria-hidden="true" className=" ml-1 w-7 h-7 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"></path></svg>
                            <label htmlFor="apple" className="ml-2 cursor-pointer text-md font-medium text-gray-900 ">
                                Factura
                            </label>
                        </li>

                        <li className="flex items-center cursor-pointer bg-white  hover:bg-blue-100 p-3 rounded-lg">
                            <svg aria-hidden="true" className=" ml-1 w-7 h-7 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"></path></svg>
                            <label htmlFor="apple" className="ml-2 cursor-pointer text-md font-medium text-gray-900 ">
                                Presupuesto
                            </label>
                        </li>

                        
                    </ul>
                </div>
            </div>
        </>
    )
}

export default ModalOptionCreate