import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'


const Table = () => {

    const [data, setData] = useState([]);
    const [preFijo, setPreFijo] = useState([]);

    const [update, setUpdate] = useState(0);

    /** Obtener Facturas */
    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = sessionStorage.getItem('token'); // Obtener el token de sessionStorage
                const response = await fetch('https://api.invoix.co/v1/invoices', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                const jsonData = await response.json();
                setData(jsonData);
                sessionStorage.setItem("prefijo", jsonData);

                console.log(jsonData[0].Number)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [update]);


    console.log(data)


    /*const handleClick = (event) => {
        event.preventDefault();

        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        const pdfUrl = 'https://backend.estrateg.com/API/storage/app/public/72209642/FES-FEVL1.pdf';
        const pdfImage = new Image();
        console.log("PRUEBAS")

        pdfImage.src = pdfUrl;
        pdfImage.onload = () => {
            canvas.width = pdfImage.width;
            canvas.height = pdfImage.height;
            context.drawImage(pdfImage, 0, 0);

            const newWindow = window.open('', '_blank');
            newWindow.document.body.appendChild(canvas);
        };
    };*/

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

    /** Visualizacion de Factura */
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


                const pdfUrl = `https://api.invoix.co/v1/invoice-pdf/${encryptedDBUrl}/${number}`;
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




    const [beareDian, setBeareDian] = useState(null);
    /** Obtener Token para Envio DIAN */
    useEffect(() => {
        const fetchData = async () => {
            const token = sessionStorage.getItem('token');
            try {
                const response = await fetch('https://api.invoix.co/v1/bearerdian', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    },
                });
                const data = await response.json();
                console.log(data[0].api_token)
                setBeareDian(data[0].api_token);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData();
    }, []);

    /** CAPTURAR PREFIJO */
    useEffect(() => {
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
    }, []);


    /** Actualizar Cufe*/
    function ActualizarCufe(cufeData, responseBolean, messageValue, messageValueError, numberValue) {
        const url = 'https://api.invoix.co/v1/updatecufeinvoix';
        const token = sessionStorage.getItem('token');
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", `Bearer ${token}`);

        console.log(cufeData)

        var raw = JSON.stringify({
            "prefix": preFijo,
            "number": numberValue,
            "cufe": cufeData
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
                return response.json();
            })
            .then(data => {
                console.log(data);
                console.log(responseBolean);
                if (responseBolean == "false") {
                    Swal.fire('info', messageValueError, 'info');

                }
                if (responseBolean == "true") {
                    Swal.fire('exit', messageValue, 'exit');
                }

            })
            .catch(error => {
                console.error('Error al obtener los datos:', error);
            });
    }


    /** envio factura endpoint Dian */
    function fetchData(data, numberValue) {
        const url = 'https://backend.estrateg.com/API/public/api/ubl2.1/invoice';
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", `Bearer ${beareDian}`);

        var raw = JSON.stringify(data);
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(url, requestOptions)
            .then(response => {
                console.log(response)
                if (!response.ok) {
                    Swal.fire('info','Network response was not ok', 'info');
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
                console.log(data.cufe);
                let messageValue = data.ResponseDian.Envelope.Body.SendBillSyncResponse.SendBillSyncResult.Message;
                let responseBolean = data.ResponseDian.Envelope.Body.SendBillSyncResponse.SendBillSyncResult.IsValid;
                let messageValueError = data.ResponseDian.Envelope.Body.SendBillSyncResponse.SendBillSyncResult.ErrorMessage.string;
                ActualizarCufe(data.cufe, responseBolean, messageValue, messageValueError, numberValue)
            })
            .catch(error => {
                console.error('Error al obtener los datos:', error);
            });
    }


    /** enviar  factura a la DIAN */
    const handleClickSend = (event, number) => {
        event.preventDefault();

        const url = 'https://api.invoix.co/v1/putsendinvoix';
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
                if (response.status === 200) {
                    console.log('Envío exitoso');
                    return response.json();
                } else if (response.status === 400) {
                    throw new Error('Error en la solicitud');
                } else if (response.status === 500) {
                    throw new Error('Error interno del servidor');
                } else {
                    throw new Error('Error desconocido');
                }
            })
            .then(data => {
                fetchData(data, numberValue);
            })
            .catch(error => {
                console.error('Error al enviar la solicitud:', error);
                Swal.fire('Error', error.message, 'error');
            });
    };


    const handleClickDelete = (event, number) => {
        event.preventDefault();

        const url = 'https://api.invoix.co/v1/deleteinvoices';
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
                            data.map((item, index) => (
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
                                        <button
                                            onClick={(e) => handleClickSend(e, item.Number)}
                                            className={`font-medium text-blue-600 dark:text-blue-500 hover:underline ${item.cufe !== "0" ? 'disabled cursor-not-allowed text-slate-200 dark:text-slate-200' : ''}`}
                                            title={item.cufe !== "0" ? "Factura ya enviada a DIAN" : "Enviar a DIAN"}
                                            disabled={item.cufe !== "0"}
                                        >
                                            <span class="material-symbols-outlined">send</span>
                                        </button>

                                        <button onClick={(e) => handleClickVisualizacion(e, item.Number)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline" title="Imprimir"><span class="material-symbols-outlined">print</span></button>
                                        {/*<button onClick={(e) => item.cufe !== "0" && handleClickPrint(e, item.Number)} className={`font-medium text-blue-600 dark:text-blue-500 hover:underline ${item.cufe !== "0" ? '' : 'disabled cursor-not-allowed'}`} title="Imprimir"><span class="material-symbols-outlined">print</span></button>*/}
                                        <a href={item.cufe === "0" && `/invoice/edit?number=${item.Number}&prefix=${preFijo}`} className={`font-medium text-blue-600 dark:text-blue-500 hover:underline ${item.cufe !== "0" ? 'disabled cursor-not-allowed text-slate-200 dark:text-slate-200' : ''}`} title="Editar"><span class="material-symbols-outlined">edit</span></a>
                                        <button onClick={(e) => item.cufe === "0" && handleClickDelete(e, item.Number)} className={`font-medium text-blue-600 dark:text-blue-500 hover:underline ${item.cufe !== "0" ? 'disabled cursor-not-allowed text-slate-200 dark:text-slate-200' : ''}`} title={item.cufe !== "0" ? "No se puede Eliminar ya fue enviada" : "Eliminar"}><span className="material-symbols-outlined">delete</span></button>
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

export default Table