import React, { useEffect, useState, useRef } from 'react'
import Swal from 'sweetalert2'

const DatosEmpresa = () => {
    const [logo, setLogo] = useState(null);
    const [form, setForm] = useState({
        tipoDeIdentificacion: '',
        razonSocial: '',
        nombreComercial: '',
        departamento: '',
        municipio: '',
        telefono: '',
        codigoPostal: '',
        responsabilidadTributaria: '',
        direccion: '',
        correoElectronico: '',
        registroMercantil: '',
        regimenTributario: ''
    });





    const [nit, setNit] = useState("");
    const [dv, setDV] = useState("");
    const [personaJuridica, setPersonaJuridica] = useState(false);
    const [personaNatural, setPersonaNatural] = useState(false);
    const [dataTypeId, setDataTypeId] = useState([]);
    const [dataDepartament, setDataDepartament] = useState([]);
    const [dataMunicipalities, setDataMunicipalities] = useState([]);





    /* Cacture de Input Check Value */
    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;

        if (name === 'personaJuridica') {
            setPersonaJuridica(checked);
            if (checked) {
                setPersonaNatural(false); // Deseleccionar el otro checkbox si se selecciona "Persona Juridica"
                console.log(personaNatural)
            }
        } else if (name === 'personaNatural') {
            setPersonaNatural(checked);
            if (checked) {
                setPersonaJuridica(false); // Deseleccionar el otro checkbox si se selecciona "Persona Natural"
                console.log(personaJuridica)
            }
        }
    };


    /* Get de TypeId */
    useEffect(() => {
        const fetchData = async () => {
            const token = sessionStorage.getItem('token'); // Obtener el token de sessionStorage
            try {
                const response = await fetch('https://api.invoix.co/v1/typedocumentidentifications', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                if (response.ok) {
                    const data = await response.json();
                    setDataTypeId(data);
                } else {
                    console.error('Error:', response.status);
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData();
    }, []);

    /* Get de Departament */
    useEffect(() => {
        const fetchData = async () => {
            const token = sessionStorage.getItem('token'); // Obtener el token de sessionStorage
            try {
                const response = await fetch('https://api.invoix.co/v1/departments', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                if (response.ok) {
                    const data = await response.json();
                    setDataDepartament(data);
                } else {
                    console.error('Error:', response.status);
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData();
    }, []);

    /* Get de Municipalities */
    useEffect(() => {
        const fetchData = async () => {
            const token = sessionStorage.getItem('token'); // Obtener el token de sessionStorage
            try {
                const response = await fetch('https://api.invoix.co/v1/municipalities', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                if (response.ok) {
                    const data = await response.json();
                    setDataMunicipalities(data);
                } else {
                    console.error('Error:', response.status);
                }
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


    /* Cargar Img Logo Factura */
    function handleLogoChange(event) {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = function (e) {
            setLogo(e.target.result);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    /* Calcular DV */
    const calcularDV = (numero) => {
        let coeficientes = [3, 7, 13, 17, 19, 23, 29, 37, 41, 43, 47, 53, 59, 67, 71];
        let suma = 0;

        for (let i = numero.length - 1; i >= 0; i--) {
            let digito = parseInt(numero.charAt(i), 10);
            suma += digito * coeficientes[numero.length - 1 - i];
        }

        let modulo = suma % 11;
        let resultado = modulo < 2 ? modulo : 11 - modulo;

        return resultado.toString();
    };

    /* generar dv en input */
    const handleNumeroIdentificacionChange = (event) => {
        const { value } = event.target;

        setNit(value);

        const nuevoDV = calcularDV(value);

        setDV(nuevoDV);
    };






    const [updateLogo, setUpdateLogo] = useState(0);
    function handleLogoChange(event) {
        const file = event.target.files[0];
        const token = sessionStorage.getItem('token');
        const formdata = new FormData();
        formdata.append("image", file);

        const requestOptions = {
            method: "POST",
            headers: {
                'Authorization': `Bearer ${token}`
            },
            body: formdata,
            redirect: "follow",
        };

        fetch("https://api.invoix.co/v1/upload-image/logo", requestOptions)
            .then((response) => response.json())
            .then((data) => {
                // Guardar la URL del logotipo en el estado 'logo'
                /*setLogo(data.url);*/
                setUpdateLogo(updateLogo + 1)
            })
            .catch((error) => {
                // Manejar el error en caso de que ocurra
                console.log("error", error);
            });
    }
    /**Obtener Img de Logo */
    useEffect(() => {
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
                const imageUrl = data.KryptDB;
                console.log(updateLogo)
                const timestamp = new Date().getTime(); // Genera una marca de tiempo única
                const url = `https://api.invoix.co/images/${imageUrl}/logo.jpg?timestamp=${timestamp}`;
                setLogo(url);
            } catch (error) {
                // Manejar el error en caso de que ocurra
                console.log("error", error);
            }
        };
        console.log(updateLogo)
        fetchData();
    }, [updateLogo]);

    const handleSaveDataEmpresa = (e) => {
        e.preventDefault();
        let type_organization_id;
        if (personaJuridica) {
            type_organization_id = '1';
        } else if (personaNatural) {
            type_organization_id = '2';
        }

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "type_document_identification_id": form.tipoDeIdentificacion,
            "type_organization_id": type_organization_id,
            "type_regime_id": form.regimenTributario,
            "type_liability_id": form.responsabilidadTributaria,
            "business_name": form.razonSocial,
            "merchant_registration": form.registroMercantil,
            "municipality_id": form.municipio,
            "address": form.direccion,
            "phone": form.telefono,
            "email": form.correoElectronico
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(`https://backend.estrateg.com/API/public/api/ubl2.1/config/${nit}/${dv}`, requestOptions)
            .then(response => {
                if (response.ok) {
                    // Estado 200 - éxito
                    return response.json().then(data => {
                        if (data.message === 'Empresa creada/actualizada con éxito') {
                            // Llamar a la función para realizar el segundo fetch
                            performSecondFetch(data.company, data.token);
                        } else {
                            Swal.fire('Éxito', 'Detalles guardados con éxito', 'success');
                        }
                    });
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

    function performSecondFetch(company, token) {
        const tokenStorage = sessionStorage.getItem('token');
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", `Bearer ${tokenStorage}`);

        var raw = JSON.stringify({
            "id": company.id,
            "user_id": company.user_id,
            "identification_number": company.identification_number,
            "dv": company.dv,
            "name": company.user.name,
            "language_id": company.language_id,
            "tax_id": company.tax_id,
            "type_environment_id": company.type_environment_id,
            "payroll_type_environment_id": company.payroll_type_environment_id,
            "type_operation_id": company.type_operation_id,
            "type_document_identification_id": company.type_document_identification_id,
            "country_id": company.country_id,
            "type_currency_id": company.country_id,
            "type_organization_id": company.type_organization_id,
            "type_regime_id": company.type_regime_id,
            "type_liability_id": company.type_liability_id,
            "municipality_id": company.municipality_id,
            "merchant_registration": company.merchant_registration,
            "address": company.address,
            "phone": company.phone,
            "email": company.user.email,
            "token": token
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://api.invoix.co/v1/registercompany", requestOptions)
            .then(response => response.json())
            .then(data => {
                // Manejar la respuesta del segundo fetch
                console.log(data);
            })
            .catch(error => {
                // Manejar errores del segundo fetch
                console.error(error);
            });
    };



    /** Get Company */
    const [companyData, setCompanyData] = useState(null);
    useEffect(() => {
        const token = sessionStorage.getItem('token');
        const fetchCompanyData = async () => {
            try {
                const response = await fetch('https://api.invoix.co/v1/showcompany', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                const data = await response.json();
                setCompanyData(data[0]); // Solo se asume un elemento en el arreglo, puedes ajustar esto según tus necesidades
                console.log(data);
            } catch (error) {
                console.error('Error fetching company data:', error);
            }
        };

        fetchCompanyData();
    }, []);

    useEffect(() => {
        if (companyData) {
            setNit(companyData.identification_number);
            setDV(companyData.dv);
            if (companyData.type_organization_id === 1) {
                setPersonaNatural(true);
                setPersonaJuridica(false);
            } else if (companyData.type_organization_id === 2) {
                setPersonaNatural(false);
                setPersonaJuridica(true);
            }
            setForm({
                tipoDeIdentificacion: companyData.type_document_identification_id.toString(),
                nit: companyData.identification_number,
                dv: companyData.dv,
                razonSocial: companyData.razon,
                nombreComercial: '',
                departamento: "",
                municipio: companyData.municipality_id,
                telefono: companyData.phone,
                codigoPostal: '',
                responsabilidadTributaria: companyData.type_liability_id,
                direccion: companyData.address,
                correoElectronico: companyData.email,
                registroMercantil: companyData.merchant_registration,
                regimenTributario: companyData.type_regime_id
                // otros campos del formulario
            });
        }
    }, [companyData]);



    return (
        <main className="">
            <div className="px-16 mt-5 flex justify-between">
                <h2 className="font-bold text-3xl">Datos de Empresa</h2>

            </div>
            <div className="pt-6 px-4">
                <div className="mb-4 w-full grid grid-cols-1 md:grid-cols-1 xl:grid-cols-1 gap-4">
                    <div className="bg-white h-full shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                        <div className="flex items-center justify-center pb-3 pt-2 pr-2 sticky top-0">
                            <div className=' w-full px-24'>
                                <form action="#">
                                    <div className='flex items-center w-12/12 gap-4'>
                                        <div className='w-4/12'>
                                            {/*<div className="flex  items-center justify-center w-12/12 bg-gray-100">
                                                <label htmlFor="logo" className="flex bg-gray-100 flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer dark:hover:bg-bray-800  hover:bg-gray-100">
                                                    {logo ? (
                                                        <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${logo})` }} />
                                                    ) : (
                                                        <div className="flex flex-col items-center justify-center pt-5">
                                                            <p className="mb-2 text-2xl font-bold text-gray-500">Carga tu Logo</p>
                                                            <p className="mb-2 text-sm text-gray-400 mt-[-10px]">250 x 88 pixeles</p>
                                                        </div>
                                                    )}
                                                    <input id="logo" type="file" className="hidden" onChange={handleLogoChange} />
                                                </label>
                                            </div>*/}
                                            <div className="flex items-center justify-center w-12/12 bg-gray-100">
                                                <label
                                                    htmlFor="logo"
                                                    className="flex bg-gray-100 flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer dark:hover:bg-bray-800  hover:bg-gray-100"
                                                >
                                                    {logo ? (
                                                        <div
                                                            className="w-full h-full bg-cover bg-center"
                                                            style={{
                                                                backgroundImage: `url(${logo})`,
                                                                backgroundSize: 'contain',
                                                                backgroundPosition: 'center',
                                                                backgroundRepeat: 'no-repeat', // Evita que la imagen se repita
                                                            }}
                                                        />
                                                    ) : (
                                                        <div className="flex flex-col items-center justify-center pt-5">
                                                            <p className="mb-2 text-2xl font-bold text-gray-500">Carga tu Logo</p>
                                                            <p className="mb-2 text-sm text-gray-400 mt-[-10px]">250 x 88 pixeles</p>
                                                        </div>
                                                    )}
                                                    <input id="logo" type="file" className="hidden" onChange={handleLogoChange} />
                                                </label>
                                            </div>

                                        </div>

                                        <div className=" block w-8/12">
                                            <div className='flex w-full gap-5'>
                                                <div className='w-6/12'>
                                                    <label htmlFor="tipoDeIdentificacion" className="block text-sm font-medium text-gray-900">Tipo de Identificacion</label>
                                                    <select
                                                        id="tipoDeIdentificacion"
                                                        value={form.tipoDeIdentificacion}
                                                        onChange={handleInputChange}
                                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                                                    >
                                                        <option value="" disabled>Seleccione</option>
                                                        {dataTypeId.map((item) => (
                                                            <option key={item.id} value={item.id}>{item.name}</option>
                                                        ))}
                                                    </select>
                                                </div>

                                                <div className='flex w-8/12'>
                                                    <div className="w-[70%]">
                                                        <label htmlFor="nit" className="block  text-sm font-medium text-gray-900 ">Número de Identificación</label>
                                                        <input
                                                            type="text"
                                                            name="nit"
                                                            id="nit"
                                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                                            required
                                                            value={nit}
                                                            onChange={handleNumeroIdentificacionChange}
                                                        />
                                                    </div>
                                                    <div className="w-[30%]">
                                                        <label htmlFor="dv" className="block  text-sm font-medium text-gray-900 ">DV</label>
                                                        <input
                                                            type="text"
                                                            name="dv"
                                                            id="dv"
                                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                                            required
                                                            value={dv}
                                                            readOnly
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='w-12/12'>
                                                <label htmlFor="razonSocial" className="block  text-sm font-medium text-gray-900 ">Razon Social</label>
                                                <input
                                                    type="text"
                                                    name="razonSocial"
                                                    id="razonSocial"
                                                    value={form.razonSocial}
                                                    onChange={handleInputChange}
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " />
                                            </div>

                                        </div>

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
                        <div className="flex items-center justify-center pb-3 pt-2 pr-2 sticky top-0">
                            <div className=' w-full px-44'>
                                <form action="#">
                                    <div className='flex w-12/12 gap-4'>

                                        <div className=" w-6/12">
                                            <label htmlFor="cliente" className="bg-gray-50 border flex justify-between border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 p-2.5 ">
                                                <span className="ml-2">Persona Juridica</span>
                                                <input
                                                    type="checkbox"
                                                    id="personaJuridica"
                                                    name="personaJuridica"
                                                    checked={personaJuridica}
                                                    onChange={handleCheckboxChange}
                                                    className="form-checkbox bg-gray-50 border border-gray-300 text-primary-500 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"

                                                />
                                            </label>
                                            {/*<div className=''>
                                                <label for="nombreComercial" class="block  text-sm font-medium text-gray-900 ">Nombre Comercial</label>
                                                <input
                                                    value={form.nombreComercial}
                                                    onChange={handleInputChange}
                                                    type="text"
                                                    name="nombreComercial"
                                                    id="nombreComercial"
                                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " />
                                            </div>*/}
                                            <div className='flex w-full gap-3'>
                                                <div className='w-6/12'>
                                                    <label htmlFor="departamento" className="block  text-sm font-medium text-gray-900 ">Departamento</label>
                                                    <select
                                                        id="departamento"
                                                        value={form.departamento}
                                                        onChange={handleInputChange}
                                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 ">
                                                        <option value="">Seleccione</option>
                                                        {dataDepartament.map((item) => (
                                                            <option key={item.id} value={item.id}>{item.name}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                                <div className='w-6/12'>
                                                    <label htmlFor="municipio" className="block  text-sm font-medium text-gray-900 ">Municipio</label>
                                                    <select
                                                        id="municipio"
                                                        value={form.municipio}
                                                        onChange={handleInputChange}
                                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 ">
                                                        <option value="">Seleccione</option>
                                                        {dataMunicipalities.map((item) => (
                                                            <option key={item.id} value={item.id}>{item.name}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>
                                            <div className=''>
                                                <label htmlFor="telefono" className="block  text-sm font-medium text-gray-900 ">Telefono</label>
                                                <input
                                                    type="text"
                                                    name="telefono"
                                                    id="telefono"
                                                    value={form.telefono}
                                                    onChange={handleInputChange}
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " />
                                            </div>
                                            {/*<div className=''>
                                                <label htmlFor="codigoPostal" class="block  text-sm font-medium text-gray-900 ">Codigo Postal</label>
                                                <input
                                                    type="text"
                                                    name="codigoPostal"
                                                    id="codigoPostal"
                                                    value={form.codigoPostal}
                                                    onChange={handleInputChange}
                                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " />
                                            </div>*/}
                                            <div className=''>
                                                <label htmlFor="correoElectronico" className="block  text-sm font-medium text-gray-900 ">Correo Electronico</label>
                                                <input
                                                    type="text"
                                                    name="correoElectronico"
                                                    id="correoElectronico"
                                                    value={form.correoElectronico}
                                                    onChange={handleInputChange}
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " />
                                            </div>
                                            <div className=''>
                                                <label htmlFor="registroMercantil" className="block  text-sm font-medium text-gray-900 ">Registro Mercantil</label>
                                                <input
                                                    type="text"
                                                    name="registroMercantil"
                                                    id="registroMercantil"
                                                    value={form.registroMercantil}
                                                    onChange={handleInputChange}
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " />
                                            </div>

                                        </div>


                                        <div className="w-6/12">
                                            <label htmlFor="cliente" className="bg-gray-50 border flex justify-between border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 p-2.5 ">
                                                <span className="ml-2">Persona Natural</span>
                                                <input
                                                    type="checkbox"
                                                    id="personaNatural"
                                                    name="personaNatural"
                                                    checked={personaNatural}
                                                    onChange={handleCheckboxChange}
                                                    className="form-checkbox bg-gray-50 border border-gray-300 text-primary-500 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"

                                                />
                                            </label>
                                            <div>
                                                <label htmlFor="responsabilidadTributaria" className="block  text-sm font-medium text-gray-900 ">Responsabilidad Tributaria</label>
                                                <select
                                                    id="responsabilidadTributaria"
                                                    value={form.responsabilidadTributaria}
                                                    onChange={handleInputChange}
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 ">
                                                    <option value="">Seleccione</option>
                                                    <option value="7">Gran contribuyente</option>
                                                    <option value="9">Autorretenedor</option>
                                                    <option value="14">Agente de retención en el impuesto sobre las ventas</option>
                                                    <option value="112">Régimen Simple de Tributación – SIMPLE</option>
                                                    <option value="117">No responsable</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label htmlFor="regimenTributario" className="block  text-sm font-medium text-gray-900 ">Regimen Tributario</label>
                                                <select
                                                    id="regimenTributario"
                                                    value={form.regimenTributario}
                                                    onChange={handleInputChange}
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 ">
                                                    <option value="">Seleccione</option>
                                                    <option value="1">Responsable de IVA</option>
                                                    <option value="2">No responsable de IVA</option>
                                                </select>
                                            </div>
                                            <div className=''>
                                                <label htmlFor="direccionme" className="block  text-sm font-medium text-gray-900 ">Direccion</label>
                                                <input
                                                    type="text"
                                                    name="direccion"
                                                    id="direccion"
                                                    value={form.direccion}
                                                    onChange={handleInputChange}
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " />
                                            </div>

                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex w-full justify-end items-center 4">
                    <button onClick={(e) => handleSaveDataEmpresa(e)} className="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                        Guardar Cambios
                    </button>
                </div>
            </div>
        </main>
    )
}

export default DatosEmpresa