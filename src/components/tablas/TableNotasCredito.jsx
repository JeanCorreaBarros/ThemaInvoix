import React, { useEffect, useState } from 'react'
import ModalFiltroFactura from '../modals/ModalFiltroFactura';

const TableNotasCredito = () => {
    /*const data = [
        {
            Number: "0017",
            Customer: "Juan Guillermo Herazo",
            DateNumber: "2023/04/16",
            Total: "2.000.000",
            ToApply: "1.000.000",
        },
        {
            Number: "0018",
            Customer: "Juan Guillermo Herazo",
            DateNumber: "2023/04/16",
            Total: "2.000.000",
            ToApply: "1.000.000",
        },
        // Puedes añadir más objetos aquí
    ];*/

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = sessionStorage.getItem('token'); // Obtener el token de sessionStorage
                const response = await fetch('https://api.invoix.co/v1/creditnotes', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    
    return (
        <>
            <div class="relative w-full max-h-[90%] overflow-x-auto shadow-md sm:rounded-lg">
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
                                Numero
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Cliente
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Fecha
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Total
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Por Aplicar
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Acciones
                            </th>
                        </tr>
                    </thead>
                    <tbody className=''>
                        {data.length === 0 ? (
                            <tr className='w-full hidden'>
                                <td colSpan="10" class="px-6 py-4 w-full">
                                    <button class="bg-gray-800  hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                                        <div className='flex items-center'>
                                            <span class="material-symbols-outlined ">add</span>
                                            <a href="#">Nueva Nota</a>
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
                                        {item.Number}
                                    </th>
                                    <td class="px-6 py-4">{item.Customer}</td>
                                    <td class="px-6 py-4">{item.DateNumber}</td>
                                    <td class="px-6 py-4">{item.Total}</td>
                                    <td class="px-6 py-4">{item.ToApply}</td>
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
        </>
    )
}

export default TableNotasCredito