import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'


const TableEstimate = () => {
    const [dataPrice, setDataPrice] = useState([]);
    const [preFijo, setPreFijo] = useState('COT');
    const [update, setUpdate] = useState(0);



    /** Obtener Facturas */
    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = sessionStorage.getItem('token'); // Obtener el token de sessionStorage
                const response = await fetch('https://api.invoix.co/v1/prices', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                const jsonData = await response.json();
                setDataPrice(jsonData);
                sessionStorage.setItem("prefijo", jsonData);

                console.log(jsonData)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [update]);

    /** Visualizacion de Factura */
    /*const handleClickVisualizacion = async (event, number) => {
        console.log(number)
        event.preventDefault();
        const token = sessionStorage.getItem('token');
        try {
            const response = await fetch(`https://api.invoix.co/v1/quotex-pdf/${number}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                },
            });

            // Verificar el estado de la respuesta
            if (response.ok) {
                const url = await response.text();

                // Verificar si la respuesta es una URL válida
                if (url.startsWith('http')) {
                    const newWindow = window.open(url, '_blank');
                    if (newWindow) {
                        newWindow.focus();
                    } else {
                        // Si el bloqueador de ventanas emergentes está activado, muestra un mensaje al usuario.
                        alert('La ventana emergente fue bloqueada. Habilita las ventanas emergentes para abrir el PDF.');
                    }
                } else {
                    // La respuesta no es una URL válida del PDF
                    console.error('Error: Respuesta inválida del servidor');
                    Swal.fire({
                        position: 'center',
                        icon: 'error',
                        title: 'No hay respuesta del server',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            } else {
                // La respuesta no es exitosa (código de estado no 200)
                console.error('Error de respuesta:', response.status);
            }

        } catch (error) {
            console.error('Error:', error);
        }
    };*/



    const handleClickVisualizacion = (event, number) => {
        event.preventDefault();

        const token = sessionStorage.getItem('token');
        const fetchData = async () => {
            try {
                const response = await fetch("https://api.invoix.co/v1/CryptDB", {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                const data = await response.json();
                console.log(data.KryptDB);
                const encryptedDBUrl = data.KryptDB;


                const pdfUrl = `https://api.invoix.co/v1/quote-pdf/${encryptedDBUrl}/${number}`;
                const newWindow = window.open(pdfUrl, '_blank');
                if (newWindow) {
                    newWindow.focus();
                } else {
                    // Si el bloqueador de ventanas emergentes está activado, muestra un mensaje al usuario.
                    alert('La ventana emergente fue bloqueada. Habilita las ventanas emergentes para abrir el PDF.');
                }
                
            } catch (error) {
                // Manejar el error en caso de que ocurra
                console.log("error", error);
            }
        };

        fetchData();
    };


    /** Imprimir Factura Dian */
    const IdNumber = sessionStorage.getItem('IdNumber');
    const handleClickPrint = (event, number) => {
        event.preventDefault();

        const pdfUrl = `https://backend.estrateg.com/API/storage/app/public/${IdNumber}/FES-${number}.pdf`;
        const newWindow = window.open(pdfUrl, '_blank');
        if (newWindow) {
            newWindow.focus();
        } else {
            // Si el bloqueador de ventanas emergentes está activado, muestra un mensaje al usuario.
            alert('La ventana emergente fue bloqueada. Habilita las ventanas emergentes para abrir el PDF.');
        }
    };






    /** CAPTURAR PREFIJO */
    /*useEffect(() => {
        const token = sessionStorage.getItem('token');
        fetch('https://api.invoix.co/v1/resolutions', {
            headers: {
                'Authorization': `Bearer ${token}`
            },
        })
            .then(response => response.json())
            .then(data => {
                console.log(data[0].prefix)
                setPreFijo(data[0].prefix)
            });
    }, []);*/










    /** Eliminar Item de Cotizacion */
    const handleClickDelete = (event, number) => {
        event.preventDefault();

        const url = 'https://api.invoix.co/v1/deleteprices';
        const token = sessionStorage.getItem('token');
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", `Bearer ${token}`);

        var numberValue = number.match(/\d+/)[0];

        var raw = JSON.stringify({
            "prefix": preFijo,
            "number": numberValue
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(url, requestOptions)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                console.log('Envío exitoso');
                /*window.location.reload()*/
                return response.json(); // Obtener los datos JSON de la respuesta
            })
            .then(data => {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: data.message,
                    showConfirmButton: false,
                    timer: 1500
                })
                setUpdate(update + 1);

            })
            .catch(error => {
                console.error('Error al enviar la solicitud:', error);
            });
    };


    return (
        <>
            <div class="relative w-full max-h-[90%] overflow-x-auto shadow-md sm:rounded-lg">

                <table class="w-full text-sm text-center text-gray-500">
                    <thead class="text-xs text-white  bg-green-600 sticky top-0  ">
                        <tr>
                            <th scope="col" class="p-4">
                                <div class="flex items-center">
                                    <input id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label for="checkbox-all-search" class="sr-only">checkbox</label>
                                </div>
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Factura
                            </th>
                            <th scope="col" class="px-6 py-3 text-left">
                                Cliente
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Creacion
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Vencimiento
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Total
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Cobrado
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Saldo
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Estado
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Acciones
                            </th>
                        </tr>
                    </thead>
                    <tbody className=''>
                        {dataPrice.length === 0 ? (
                            <tr className='w-full'>
                                <td colSpan="10" class="px-6 py-4 w-full">
                                    <button class="bg-gray-800  hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                                        <div className='flex items-center'>
                                            <span class="material-symbols-outlined ">add</span>
                                            <a href="/estimate/add">Nueva Contizacion</a>
                                        </div>
                                    </button>
                                </td>
                            </tr>
                        ) : (
                            dataPrice.map((item, index) => (
                                <tr key={index} class="bg-white border-b text-xs  hover:bg-gray-50 ">
                                    <td class="w-4 p-4">
                                        <div class="flex items-center">
                                            <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 " />
                                            <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                                        </div>
                                    </td>
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                        {item.Number}
                                    </th>
                                    <td class="px-6 py-4 text-left whitespace-nowrap" style={{ width: '100px', maxWidth: '100px', overflowX: 'auto' }}>{item.Customer}</td>
                                    <td class="px-6 py-4 whitespace-nowrap">{item.Creation.split(' ')[0]}</td>
                                    <td class="px-6 py-4 whitespace-nowrap">{item.Expiration.split(' ')[0]}</td>
                                    <td class="px-6 py-4 text">{item.Total}</td>
                                    <td class="px-6 py-4">{item.Collected}</td>
                                    <td class="px-6 py-4">{item.Outstanding}</td>
                                    <td class="px-6 py-4 text-red-500">{item.Status}</td>
                                    <td class="px-6 py-4 flex justify-center gap-3  ">
                                        <button onClick={(e) => handleClickVisualizacion(e, item.Number)} className={`font-medium text-blue-600 dark:text-blue-500 hover:underline`} title="Imprimir"><span class="material-symbols-outlined">visibility</span></button>
                                        <a /*href={`/invoice/edit?number=${item.Number}&prefix=${preFijo}`}*/ class="disabled cursor-not-allowed font-medium text-blue-600 dark:text-blue-500 hover:underline" title="Editar"><span class="material-symbols-outlined">edit</span></a>
                                        <button onClick={(e) => handleClickDelete(e, item.Number)} className={`font-medium text-blue-600 dark:text-blue-500 hover:underline`} title="Eliminar"><span className="material-symbols-outlined">delete</span></button>
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

export default TableEstimate