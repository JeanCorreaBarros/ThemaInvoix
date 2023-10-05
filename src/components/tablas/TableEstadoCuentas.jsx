import React, { useState } from 'react'
import ModalFiltroFactura from '../modals/ModalFiltroFactura';

const TableEstadoCuentas = () => {
    const data = [
        {
            Name: "Juan Guillermo Herazo",
            Document: "1130264365",
            Phone: "3204568524",
        },
        {
            Name: "Leandro Castro Chavez",
            Document: "1130264365",
            Phone: "3204568524",
        },
        // Puedes añadir más objetos aquí
    ];

    const [show, setShow] = useState(false);

    const handleShow = () => {
        setShow(!show)
    }
    return (
        <>
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <div class="flex items-center justify-end pb-3 pt-2 pr-2">
                    <div>
                        <button id="dropdownRadioButton" onClick={() => handleShow()} data-dropdown-toggle="dropdownRadio" class="inline-flex items-center w-24 justify-around text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                            <span>Filtro</span>
                            <svg class="w-3 h-3 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                        </button>
                    </div>
                </div>
                <table class="w-full text-sm text-center text-gray-500 ">
                    <thead class="text-xs text-white  bg-green-600 ">
                        <tr>
                            <th scope="col" class="p-4">
                                <div class="flex items-center">
                                    <input id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label for="checkbox-all-search" class="sr-only">checkbox</label>
                                </div>
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Nombre
                            </th>
                            <th scope="col" class="px-6 py-3">
                               Identificacion
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Telefono
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Acciones
                            </th>
                        </tr>
                    </thead>
                    <tbody className=''>
                        {data.length === 0 ? (
                            <tr className='w-full'>
                                <td colSpan="10" class="px-6 py-4 w-full">
                                    <button class="bg-gray-800  hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                                        <div className='flex items-center'>
                                            <span class="material-symbols-outlined ">add</span>
                                            <a href="/invoice/add">Nueva Factura</a>
                                        </div>
                                    </button>
                                </td>
                            </tr>
                        ) : (
                            data.map((item) => (
                                <tr key={item.id} class="bg-white border-b text-xs  hover:bg-gray-50 ">
                                    <td class="w-4 p-4">
                                        <div class="flex items-center">
                                            <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 " />
                                            <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                                        </div>
                                    </td>
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                        {item.Name}
                                    </th>
                                    <td class="px-6 py-4">{item.Document}</td>
                                    <td class="px-6 py-4">{item.Phone}</td>
                                    <td class="px-6 py-4 flex justify-center gap-3  ">
                                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline" title="Ver Detalle"><span class="material-symbols-outlined">visibility</span></a>
                                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline" title="Imprimir"><span class="material-symbols-outlined">print</span></a>
                                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline" title="Editar"><span class="material-symbols-outlined">edit</span></a>
                                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline" title="Remover"><span class="material-symbols-outlined">remove</span></a>
                                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline" title="Eliminar"><span class="material-symbols-outlined">delete</span></a>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>

            <ModalFiltroFactura show={show} setShow={setShow} />

        </>
    )
}
export default TableEstadoCuentas