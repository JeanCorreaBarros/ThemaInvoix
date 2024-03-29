import React,{ useState } from 'react'
import ModalCreateItem from './ModalCreateItem'
import {ModalCreateTax} from './ModalCreateTax'

const ModalCreateItems = ({ show, setShow }) => {
    const handleShow = () => {
        setShow(!show)
    }

    const [showCrearItem, setShowCrearItem] = useState(false);
    const handleShowCrearItem = () => {
        setShowCrearItem(!showCrearItem)
    };

    const [showCrearTax, setShowCrearTax] = useState(false);
    const handleShowCrearTax = () => {
        setShowCrearTax(!showCrearTax)
    };

    return (
        <>
            <div id="defaultModal" tabindex="-1" aria-hidden="true" class={`${show ? "" : "hidden"} flex ml-32 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full`}>
                <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">

                    <div class="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">

                        <div class="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                                Agregar Item
                            </h3>
                            <button type="button" onClick={handleShow} class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
                                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                <span class="sr-only">Close modal</span>
                            </button>
                        </div>

                        <form action="#">
                            <div class="grid gap-4 mb-4 sm:grid-cols-2">
                                <div>
                                    <div className='flex justify-between px-2'>
                                        <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Item</label>
                                        <label for="name" onClick={handleShowCrearItem} class="block mb-2 text-sm font-medium text-gray-900 dark:text-white cursor-pointer underline hover:text-green-600">Crear Nuevo Item</label>
                                    </div>
                                    <select id="category" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                        <option selected=""></option>
                                    </select>
                                </div>
                                <div>
                                    <label for="brand" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Referencia</label>
                                    <input type="text" name="brand" id="brand" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Referencia..." required="" />
                                </div>
                                <div>
                                    <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Precio</label>
                                    <input type="number" name="price" id="price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="$2999" required="" />
                                </div>
                                <div>
                                    <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Precio Unitario</label>
                                    <input type="number" name="price" id="price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="$2999" required="" />
                                </div>
                                <div>
                                    <div className='flex justify-between px-2'>
                                        <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Impuesto</label>
                                        <label for="name" onClick={handleShowCrearTax} class="block mb-2 text-sm font-medium text-gray-900 dark:text-white cursor-pointer underline hover:text-green-600">Crear Nuevo Impuesto</label>
                                    </div>
                                    <select id="category" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                        <option selected=""></option>
                                        <option value="TV">Ninguno(0%)</option>
                                        <option value="TV">IVA(0%)</option>
                                        <option value="TV">IVA(5%)</option>
                                        <option value="TV">IVA(159)</option>
                                    </select>
                                </div>
                                <div >
                                    <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                                    <textarea id="description" rows="1" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Write Item description here"></textarea>                    
                                </div>
                                <div>
                                    <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Cantidad</label>
                                    <input type="number" name="price" id="price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="$2999" required="" />
                                </div>
                                <div>
                                    <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Total</label>
                                    <input type="number" name="price" id="price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="$2999" required="" />
                                </div>
                            </div>
                            <button type="submit" class="text-white inline-flex items-center bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">
                                <svg class="mr-1 -ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                                Agregar Item
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <ModalCreateItem showCrearItem={showCrearItem} setShowCrearItem={setShowCrearItem}/>
            <ModalCreateTax showCrearTax={showCrearTax} setShowCrearTax={setShowCrearTax}/>
        </>
    )
}

export default ModalCreateItems