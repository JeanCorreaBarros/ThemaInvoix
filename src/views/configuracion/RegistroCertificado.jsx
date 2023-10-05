import React, { useEffect, useState, useRef } from 'react'
import Swal from 'sweetalert2'

const RegistroCertificado = () => {

    const [form, setForm] = useState({
        id: '',
        pin: '',
        certificate: '',
        password: '',
        typeDocument: '',
        prefijo: '',
        resolution: '',
        fechResolution: '',
        technicalkey: '',
        numeroDesde: '',
        numeroHasta: '',
        fechaNumeracionDesde: '',
        fechaNumeracionHasta: '',

    });


    const [beareDian, setBeareDian] = useState(null);
    const typeDocument = [
        { id: 1, name: 'Factura de Venta Nacional' },
        { id: 2, name: 'Factura de Exportación' },
        { id: 3, name: 'Factura de Contingencia' },
        { id: 4, name: 'Nota Crédito' },
        { id: 5, name: 'Nota Débito' },
        { id: 6, name: 'ZIP' },
        { id: 7, name: 'AttachedDocument' },
        { id: 8, name: 'ApplicationResponse' },
        { id: 9, name: 'Nomina Individual' },
        { id: 10, name: 'Nomina Individual de Ajuste' },
        { id: 11, name: 'Documento Soporte Electrónico' },
        { id: 12, name: 'Factura electrónica de Venta - tipo 04' },
        { id: 13, name: 'Nota de Ajuste al Documento Soporte Electrónico' }
    ];





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




    /* Cacturar value input */
    const handleInputChange = (event) => {
        const { id, value } = event.target;
        setForm((prevForm) => ({
            ...prevForm,
            [id]: value,
        }));
    };




    const handleRegisterSoftware = (e) => {
        e.preventDefault();

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", `Bearer ${beareDian}`);

        var raw = JSON.stringify({
            "id": form.id,
            "pin": form.pin
        });

        var requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(`https://backend.estrateg.com/API/public/api/ubl2.1/config/software`, requestOptions)
            .then(response => {
                if (response.ok) {
                    // Estado 200 - éxito
                    Swal.fire('Éxito', 'Registro de Software guardados con éxito', 'success');
                } else if (response.status === 400) {
                    // Estado 400 - error de solicitud
                    Swal.fire('Error', 'Error en la solicitud', 'error');
                } else if (response.status === 500) {
                    // Estado 500 - error interno del servidor
                    Swal.fire('Error', 'Error interno del servidor', 'error');
                } else {
                    // Otros errores
                    Swal.fire('Error', 'Error desconocido', 'error');
                }
            })
            .catch(error => {
                // Aquí puedes manejar errores de la solicitud
                console.error(error);
            });
    };

    const handleRegisterCertificado = (e) => {
        e.preventDefault();

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", `Bearer ${beareDian}`);

        var raw = JSON.stringify({
            "certificate": form.certificate,
            "password": form.password,


        });

        var requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(`https://backend.estrateg.com/API/public/api/ubl2.1/config/certificate`, requestOptions)
            .then(response => {
                if (response.ok) {
                    // Estado 200 - éxito
                    Swal.fire('Éxito', 'Registro de Certificado Guardados con éxito', 'success');
                } else if (response.status === 400) {
                    // Estado 400 - error de solicitud
                    Swal.fire('Error', 'Error en la solicitud', 'error');
                } else if (response.status === 500) {
                    // Estado 500 - error interno del servidor
                    Swal.fire('Error', 'Error interno del servidor', 'error');
                } else {
                    // Otros errores
                    Swal.fire('Error', 'Error desconocido', 'error');
                }
            })
            .catch(error => {
                // Aquí puedes manejar errores de la solicitud
                console.error(error);
            });
    };



    const handleRegisterResolucion = (e) => {
        e.preventDefault();

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", `Bearer ${beareDian}`);

        var raw = JSON.stringify({
            "type_document_id": form.typeDocument,
            "prefix": form.prefijo,
            "resolution": form.resolution,
            "resolution_date": form.fechResolution,
            "technical_key": form.technicalkey,
            "from": form.numeroDesde,
            "to": form.numeroHasta,
            "generated_to_date": 0,
            "date_from": form.fechaNumeracionDesde,
            "date_to": form.fechaNumeracionHasta
        });

        var requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(`https://backend.estrateg.com/API/public/api/ubl2.1/config/resolution`, requestOptions)
            .then(response => {
                if (response.ok) {
                    // Estado 200 - éxito
                    Swal.fire('Éxito', 'Registro de Software guardados con éxito', 'success');
                } else if (response.status === 400) {
                    // Estado 400 - error de solicitud
                    Swal.fire('Error', 'Error en la solicitud', 'error');
                } else if (response.status === 500) {
                    // Estado 500 - error interno del servidor
                    Swal.fire('Error', 'Error interno del servidor', 'error');
                } else {
                    // Otros errores
                    Swal.fire('Error', 'Error desconocido', 'error');
                }
            })
            .catch(error => {
                // Aquí puedes manejar errores de la solicitud
                console.error(error);
            });
    };


    const handleNextProduction = (e) => {
        e.preventDefault();

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", `Bearer ${beareDian}`);

        var raw = JSON.stringify({
            "type_environment_id": 1,
            "payroll_type_environment_id": 1
        });

        var requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(`https://backend.estrateg.com/API/public/api/ubl2.1/config/environment `, requestOptions)
            .then(response => {
                if (response.ok) {
                    // Estado 200 - éxito
                    Swal.fire('Éxito', 'Registro de Software guardados con éxito', 'success');
                } else if (response.status === 400) {
                    // Estado 400 - error de solicitud
                    Swal.fire('Error', 'Error en la solicitud', 'error');
                } else if (response.status === 500) {
                    // Estado 500 - error interno del servidor
                    Swal.fire('Error', 'Error interno del servidor', 'error');
                } else {
                    // Otros errores
                    Swal.fire('Error', 'Error desconocido', 'error');
                }
            })
            .catch(error => {
                // Aquí puedes manejar errores de la solicitud
                console.error(error);
            });
    };


    /** Obtener Data Certificado */
    const [softwareData, setSoftwareData] = useState([]);
    const [certificateData, setCertificateData] = useState([]);
    const [resolutionData, setResolutionData] = useState([]);

    useEffect(() => {
        const token = sessionStorage.getItem('token');

        const fetchSoftwareData = async () => {
            try {
                const response = await fetch('https://api.invoix.co/v1/showsoftware', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                const data = await response.json();
                setSoftwareData(data[0]); // Solo se asume un elemento en el arreglo, puedes ajustar esto según tus necesidades
                console.log(data[0])
            } catch (error) {
                console.error('Error fetching company data:', error);
            }
        };

        const fetchCertificateData = async () => {
            try {
                const response = await fetch('https://api.invoix.co/v1/showcertificate', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                const data = await response.json();
                setCertificateData(data[0]); // Solo se asume un elemento en el arreglo, puedes ajustar esto según tus necesidades
                console.log(data[0])
            } catch (error) {
                console.error('Error fetching certificate data:', error);
            }
        };

        const fetchResolutionData = async () => {
            try {
                const response = await fetch('https://api.invoix.co/v1/showresolution', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                const data = await response.json();
                setResolutionData(data[0]); // Solo se asume un elemento en el arreglo, puedes ajustar esto según tus necesidades
                console.log(data[0])
            } catch (error) {
                console.error('Error fetching resolution data:', error);
            }
        };

        fetchSoftwareData();
        fetchCertificateData();
        fetchResolutionData();
    }, []);


    useEffect(() => {
        if (softwareData) {
            setForm({
                id: softwareData.identifier,
                pin: softwareData.pin,
                certificate: certificateData.name,
                password: certificateData.password,
            });
        }
    }, [softwareData, certificateData]);







    return (
        <main className="">
            <div className="px-16 mt-5 flex justify-between">
                <h2 className="font-bold text-3xl">Registro de Certificados</h2>

            </div>
            <div className="pt-6 px-4">
                <div className="mb-4 w-full grid grid-cols-1 md:grid-cols-1 xl:grid-cols-1 gap-4">
                    <div className="bg-white h-full shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                        <div className="px-16 flex justify-between">
                            <h2 className="font-bold text-gray-800 text-xl mb-2">Registrar Software</h2>
                        </div>
                        <div className="flex items-center justify-center pb-3 pt-2 pr-2 sticky top-0">
                            <div className=' w-full px-24'>
                                <form action="#">
                                    <div className='flex items-center w-12/12 gap-4'>
                                        <div className='w-6/12'>
                                            <label htmlFor="id" className="block  text-sm font-medium text-gray-900 ">ID</label>
                                            <input
                                                type="text"
                                                name="id"
                                                id="id"
                                                value={form.id}
                                                onChange={handleInputChange}
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " />
                                        </div>
                                        <div className='w-6/12'>
                                            <label htmlFor="pin" className="block  text-sm font-medium text-gray-900 ">PIN</label>
                                            <input
                                                type="text"
                                                name="pin"
                                                id="pin"
                                                value={form.pin}
                                                onChange={handleInputChange}
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " />
                                        </div>
                                    </div>
                                    <div className="flex w-full justify-start items-center mt-5">
                                        <button onClick={(e) => handleRegisterSoftware(e)} className=" w-full text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                            Guardar Software
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pt-6 px-4">
                <div className="mb-4 w-full grid grid-cols-1 md:grid-cols-1 xl:grid-cols-1 gap-4">
                    <div className="bg-white h-full shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                        <div className="px-16 flex justify-between">
                            <h2 className="font-bold text-gray-800 text-xl mb-2">Registrar Certificado</h2>
                        </div>
                        <div className="flex items-center justify-center pb-3 pt-2 pr-2 sticky top-0">
                            <div className=' w-full px-24'>
                                <form action="#">
                                    <div className='flex items-center w-12/12 gap-4'>
                                        <div className='w-6/12'>
                                            <label htmlFor="certificate" className="block  text-sm font-medium text-gray-900 ">Certificado</label>
                                            <textarea
                                                type="text"
                                                name="certificate"
                                                id="certificate"
                                                value={form.certificate}
                                                onChange={handleInputChange}
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " />
                                        </div>
                                        <div className='w-6/12'>
                                            <label htmlFor="password" className="block  text-sm font-medium text-gray-900 ">Password</label>
                                            <input
                                                type="text"
                                                name="password"
                                                id="password"
                                                value={form.password}
                                                onChange={handleInputChange}
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " />
                                        </div>
                                    </div>
                                    <div className="flex w-full justify-end items-center mt-5">
                                        <button onClick={(e) => handleRegisterCertificado(e)} className="w-full text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                            Guardar Certificado
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pt-6 px-4">
                <div className="mb-4 w-full grid grid-cols-1 md:grid-cols-1 xl:grid-cols-1 gap-4">
                    <div className="bg-white h-full shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                        <div className="px-16 flex justify-between">
                            <h2 className="font-bold text-gray-800 text-xl mb-2"> Pasar A Production</h2>
                        </div>
                        <div className="flex items-center justify-center pb-3 pt-2 pr-2 sticky top-0">
                            <div className=' w-full px-24'>
                                <form action="#">
                                    <div className="flex w-full justify-end items-center mt-5">
                                        <button onClick={(e) => handleNextProduction(e)} className="w-full text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                            Obtener technical Key
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-6 px-4">
                <div className="mb-4 w-full grid grid-cols-1 md:grid-cols-1 xl:grid-cols-1 gap-4">
                    <div className="bg-white h-full shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                        <div className="px-16 flex justify-between">
                            <h2 className="font-bold text-gray-800 text-xl mb-2">Registrar Resolucion</h2>
                        </div>
                        <div className="flex items-center justify-center pb-3 pt-2 pr-2 sticky top-0">
                            <div className=' w-full px-24'>
                                <form action="#">
                                    <div className='md:flex xs:block  items-center w-12/12 gap-4'>
                                        <div className='md:w-6/12 w-12/12'>
                                            <label htmlFor="typeDocument" className="block text-sm font-medium text-gray-900">Tipo de Documento</label>
                                            <select
                                                id="typeDocument"
                                                value={form.typeDocument}
                                                onChange={handleInputChange}
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                                            >
                                                <option value="">Seleccione</option>
                                                {typeDocument.map((item) => (
                                                    <option key={item.id} value={item.id}>{item.name}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className='md:w-6/12 w-12/12'>
                                            <label htmlFor="prefijo" className="block  text-sm font-medium text-gray-900 ">Prefijo</label>
                                            <input
                                                type="text"
                                                name="prefijo"
                                                id="prefijo"
                                                value={form.prefijo}
                                                onChange={handleInputChange}
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " />
                                        </div>
                                        <div className='md:w-6/12 w-12/12'>
                                            <label htmlFor="resolution" className="block  text-sm font-medium text-gray-900 ">Resolucion</label>
                                            <input
                                                type="text"
                                                name="resolution"
                                                id="resolution"
                                                value={form.resolution}
                                                onChange={handleInputChange}
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " />
                                        </div>
                                        <div className='w-6/12'>
                                            <label htmlFor="fechResolution" className="block  text-sm font-medium text-gray-900 ">Fecha de Resolucion</label>
                                            <input
                                                type="date"
                                                name="fechResolution"
                                                id="fechResolution"
                                                value={form.fechResolution}
                                                onChange={handleInputChange}
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " />
                                        </div>
                                    </div>
                                    <div className='flex items-center w-12/12 gap-3'>
                                        <div className='w-8/12'>
                                            <label htmlFor="technicalkey" className="block  text-sm font-medium text-gray-900 ">Llave Tecnica</label>
                                            <input
                                                type="text"
                                                name="technicalkey"
                                                id="technicalkey"
                                                value={form.technicalkey}
                                                onChange={handleInputChange}
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " />
                                        </div>
                                        <div className='w-4/12'>
                                            <label htmlFor="numeroDesde" className="block  text-sm font-medium text-gray-900 ">Numeracion Desde</label>
                                            <input
                                                type="text"
                                                name="numeroDesde"
                                                id="numeroDesde"
                                                value={form.numeroDesde}
                                                onChange={handleInputChange}
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " />
                                        </div>
                                        <div className='w-4/12'>
                                            <label htmlFor="numeroHasta" className="block  text-sm font-medium text-gray-900 ">Numeracion Hasta</label>
                                            <input
                                                type="text"
                                                name="numeroHasta"
                                                id="numeroHasta"
                                                value={form.numeroHasta}
                                                onChange={handleInputChange}
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " />
                                        </div>

                                    </div>

                                    <div className='flex items-center w-12/12 gap-4'>
                                        <div className='w-6/12'>
                                            <label htmlFor="fechaNumeracionDesde" className="block  text-sm font-medium text-gray-900 ">Fecha de Numeracion Desde</label>
                                            <input
                                                type="date"
                                                name="fechaNumeracionDesde"
                                                id="fechaNumeracionDesde"
                                                value={form.fechaNumeracionDesde}
                                                onChange={handleInputChange}
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " />
                                        </div>
                                        <div className='w-6/12'>
                                            <label htmlFor="fechaNumeracionHasta" className="block  text-sm font-medium text-gray-900 ">Fecha de Numeracion Hasta</label>
                                            <input
                                                type="date"
                                                name="fechaNumeracionHasta"
                                                id="fechaNumeracionHasta"
                                                value={form.fechaNumeracionHasta}
                                                onChange={handleInputChange}
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " />
                                        </div>
                                    </div>
                                    <div className="flex w-full justify-end items-center mt-5">
                                        <button onClick={(e) => handleRegisterResolucion(e)} className="w-full text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                            Guardar Resolucion de Factura
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="pt-6 px-4">
                <div className="mb-4 w-full grid grid-cols-1 md:grid-cols-1 xl:grid-cols-1 gap-4">
                    <div className="bg-white h-full shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                        <div className="px-16 flex justify-between">
                            <h2 className="font-bold text-gray-800 text-xl mb-2">Listado de  Resolucion</h2>
                        </div>
                        <div class="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">

                            {resolutionData ? (
                                <div class="overflow-x-auto">
                                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                        <thead class="text-xs uppercase bg-gray-700 text-gray-400">
                                            <tr>
                                                <th scope="col" class="px-4 py-3 text-[10px] whitespace-nowrap">Tipo de Documento</th>
                                                <th scope="col" class="px-4 py-3 text-[10px] whitespace-nowrap">Prefijo</th>
                                                <th scope="col" class="px-4 py-3 text-[10px] whitespace-nowrap">Resolucion</th>
                                                <th scope="col" class="px-4 py-3 text-[10px] whitespace-nowrap">Fecha de Resolucion</th>
                                                <th scope="col" class="px-4 py-3 text-[10px] whitespace-nowrap">Llave Tecnica</th>
                                                <th scope="col" class="px-4 py-3 text-[10px] whitespace-nowrap">Numeracion Desde</th>
                                                <th scope="col" class="px-4 py-3 text-[10px] whitespace-nowrap">Numeracion Hasta</th>
                                                <th scope="col" class="px-4 py-3 text-[10px] whitespace-nowrap">Fecha de Numeracion Desde</th>
                                                <th scope="col" class="px-4 py-3 text-[10px] whitespace-nowrap">Fecha de Numeracion Hasta</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr class="border-b bg-gray-100 border-gray-200 text-green-600 text-center">
                                                <td class="px-4 py-3">{resolutionData.type_document_id}</td>
                                                <td class="px-4 py-3">{resolutionData.prefix}</td>
                                                <td class="px-4 py-3">{resolutionData.resolution}</td>
                                                <td class="px-4 py-3">{resolutionData.resolution_date}</td>
                                                <td class="px-4 py-3">{resolutionData.technical_key}</td>
                                                <td class="px-4 py-3">{resolutionData.from}</td>
                                                <td class="px-4 py-3">{resolutionData.to}</td>
                                                <td class="px-4 py-3">{resolutionData.date_from}</td>
                                                <td class="px-4 py-3">{resolutionData.date_to}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            ) : (
                                <p>Loading...</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>

        </main>


    )
}

export default RegistroCertificado