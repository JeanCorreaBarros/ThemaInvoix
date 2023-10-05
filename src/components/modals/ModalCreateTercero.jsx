import React, { useState } from 'react'
import Swal from 'sweetalert2'

const ModalCreateCliente = ({ showCrearCliente, setShowCrearCliente }) => {


    const [numeroIdentificacion, setNumeroIdentificacion] = useState("");
    const [dv, setDV] = useState("");
    const [tipoPersona, setTipoPersona] = useState("Persona Juridica");
    const [razonSocial, setRazonSocial] = useState("");
    const [comercialName, setComercialName] = useState("");
    const [primerNombre, setPrimerNombre] = useState("");
    const [segundoNombre, setSegundoNombre] = useState("");
    const [primerApellido, setPrimerApellido] = useState("");
    const [segundoApellido, setSegundoApellido] = useState("");
    const [contactType, setContactType] = useState({
        cliente: false,
        proveedor: false
    });
    const [emailTercero, setEmailTercero] = useState('');
    const [tipoIdentificacion, setTipoIdentificacion] = useState('');
    const [responsabilidadTributaria, setResponsabilidadTributaria] = useState('');
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");

    const handleShow = () => {
        setShowCrearCliente(!showCrearCliente)
    }

    const tiposDocumentos = [
        { codigo: "NIT", descripcion: "NIT - Número de Identificación Tributaria" },
        { codigo: "CC", descripcion: "CC - Cédula de Ciudadanía" },
        { codigo: "CE", descripcion: "CE - Cédula de Extranjería" },
        { codigo: "TI", descripcion: "TI - Tarjeta de Identidad" },
        { codigo: "RC", descripcion: "RC - Registro Civil" },
        { codigo: "PA", descripcion: "PA - Pasaporte" },
        { codigo: "PEP", descripcion: "PEP - Permiso Especial de Permanencia" },
        { codigo: "DNI", descripcion: "DNI - Documento Nacional de Identidad" },
    ];


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

    const handleNumeroIdentificacionChange = (event) => {
        const { value } = event.target;

        setNumeroIdentificacion(value);

        const nuevoDV = calcularDV(value);

        setDV(nuevoDV);
    };

    const handleTipoPersonaChange = (event) => {
        const { value } = event.target;

        setTipoPersona(value);
    };

    const handleRazonSocialChange = (event) => {
        const { value } = event.target;

        setRazonSocial(value);
    };

    const handleComercialNameChange = (event) => {
        const { value } = event.target;

        setComercialName(value);
    };

    const handleOneNameChange = (event) => {
        const { value } = event.target;

        setPrimerNombre(value);
    };

    const handleTwoNameChange = (event) => {
        const { value } = event.target;

        setSegundoNombre(value);
    };

    const handleOneLastChange = (event) => {
        const { value } = event.target;

        setPrimerApellido(value);
    };

    const handleTwoLastChange = (event) => {
        const { value } = event.target;

        setSegundoApellido(value);
    };

    const handleInputCheckChange = (event) => {
        const { id, checked } = event.target;
        console.log(id, checked)
        setContactType(prevState => ({
            ...prevState,
            [id]: checked
        }));
    };
    const handleInputEmailChange = (event) => {
        const { value } = event.target;

        setEmailTercero(value);
    };

    const handleInputTypeIdChange = (event) => {
        const { value } = event.target;

        setTipoIdentificacion(value);
    };

    const handleInputRespTriChange = (event) => {
        const { value } = event.target;

        setResponsabilidadTributaria(value);
    };


    const handleInputPhone = (event) => {
        const { value } = event.target;
        setPhone(value);
    };

    const handleInputAddress = (event) => {
        const { value } = event.target;
        setAddress(value);
    };



    const handleCrearTercero = (e) => {
        e.preventDefault();
        const formData = new FormData();

        formData.append('numeroIdentificacion', numeroIdentificacion);
        formData.append('dv', dv);
        formData.append('tipoPersona', tipoPersona);
        formData.append('phone', phone);
        formData.append('address', address);
        formData.append('razonSocial', razonSocial);
        formData.append('comercialname', comercialName);
        formData.append('primerNombre', primerNombre);
        formData.append('segundoNombre', segundoNombre);
        formData.append('primerApellido', primerApellido);
        formData.append('segundoApellido', segundoApellido);
        formData.append('cliente', contactType.cliente);
        formData.append('proveedor', contactType.proveedor);
        formData.append('emailTercero', emailTercero);
        formData.append('tipoIdentificacion', tipoIdentificacion);
        formData.append('responsabilidadTributaria', responsabilidadTributaria);

        const token = sessionStorage.getItem('token');

        fetch('https://api.invoix.co/v1/savecustomers', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`
            },
            body: formData
        })
            .then(response => {
                if (response.ok) {
                    // Estado 200 - éxito
                    handleShow()
                    Swal.fire('Éxito', 'Tercero Creado con Éxito', 'success')
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
                return response.json();
            })
            .then(data => {
                
            })
            .catch(error => {
                // Manejar errores de red
                console.error(error);
            });
    };








    return (
        <>
            <div id="defaultModal" tabindex="-1" aria-hidden="true" class={`${showCrearCliente ? "" : "hidden"} flex ml-16 mt-8 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full`}>
                <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">

                    <div class="relative p-4  rounded-lg shadow bg-gray-800 sm:p-5">

                        <div class="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 border-gray-600">
                            <h3 class="text-lg font-semibold  text-white">
                                Crear Tercero
                            </h3>
                            <button type="button" onClick={handleShow} class="text-gray-400 bg-transparent  rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:bg-gray-600 hover:text-white" data-modal-toggle="defaultModal">
                                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                <span class="sr-only">Close modal</span>
                            </button>
                        </div>

                        <form className=' h-[400px] overflow-y-scroll' >
                            <div class="grid gap-4 mb-4 sm:grid-cols-1">
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-white">Tipo de Contacto</label>
                                    <div className="flex justify-center gap-3">
                                        <label htmlFor="cliente" className=" border flex justify-between   text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 w-6/12 p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500">
                                            <span className="ml-2">Cliente</span>
                                            <input
                                                type="checkbox"
                                                id="cliente"
                                                name="contactType"
                                                value="Cliente"
                                                className="form-checkbox  border  text-primary-500 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
                                                checked={contactType.cliente}
                                                onChange={handleInputCheckChange}
                                            />
                                        </label>
                                        <label htmlFor="proveedor" className=" border flex justify-between  text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 w-6/12 p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500">
                                            <span className="ml-2">Proveedor</span>
                                            <input
                                                type="checkbox"
                                                id="proveedor"
                                                name="contactType"
                                                value="Proveedor"
                                                className="form-checkbox  border  text-primary-500 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
                                                checked={contactType.proveedor}
                                                onChange={handleInputCheckChange}
                                            />
                                        </label>
                                    </div>

                                </div>


                                <div className="flex gap-3">
                                    <div className="w-4/12">
                                        <label htmlFor="name" className="block mb-2 text-sm font-medium  text-white">Tipo de Identificación</label>
                                        <select
                                            id="category"
                                            className=" border  text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
                                            value={tipoIdentificacion}
                                            onChange={handleInputTypeIdChange}
                                        >
                                            <option value="" disabled></option>
                                            {tiposDocumentos.map((documento) => (
                                                <option key={documento.codigo} value={documento.codigo}>{documento.descripcion}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className='flex w-8/12'>
                                        <div className="w-[70%]">
                                            <label htmlFor="numeroIdentificacion" className="block mb-2 text-sm font-medium  text-white">Número de Identificación</label>
                                            <input
                                                type="text"
                                                name="numeroIdentificacion"
                                                id="numeroIdentificacion"
                                                className=" border  text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
                                                required
                                                value={numeroIdentificacion}
                                                onChange={handleNumeroIdentificacionChange}
                                            />
                                        </div>
                                        <div className="w-[30%]">
                                            <label htmlFor="dv" className="block mb-2 text-sm font-medium  text-white">DV</label>
                                            <input
                                                type="text"
                                                name="dv"
                                                id="dv"
                                                className=" border  text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
                                                required
                                                value={dv}
                                                readOnly
                                            />
                                        </div>
                                    </div>
                                </div>




                                {tipoPersona === "Persona Juridica" && (
                                    <div>
                                        <label htmlFor="razonSocial" class="block mb-2 text-sm font-medium  text-white">Razón Social:</label>
                                        <textarea
                                            class="block p-2.5 w-full text-sm  rounded-lg border  focus:ring-primary-500 focus:border-primary-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
                                            placeholder="Write Item description here"
                                            type="text"
                                            id="razonSocial"
                                            name="razonSocial"
                                            value={razonSocial}
                                            onChange={handleRazonSocialChange}
                                        />
                                    </div>
                                )}

                                {tipoPersona === "Persona Juridica" && (
                                    <div>
                                        <label htmlFor="comercialname" class="block mb-2 text-sm font-medium  text-white">Nombre Comercial:</label>
                                        <textarea
                                            class="block p-2.5 w-full text-sm  rounded-lg border  focus:ring-primary-500 focus:border-primary-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
                                            placeholder="Write Item description here"
                                            type="text"
                                            id="comercialname"
                                            name="comercialname"
                                            value={comercialName}
                                            onChange={handleComercialNameChange}
                                        />
                                    </div>
                                )}


                                {tipoPersona === "Persona Natural" && (
                                    <>
                                        <div className='flex gap-3 text-white'>
                                            <div className='w-6/12'>
                                                <label htmlFor="primerNombre">Primer Nombre:</label>
                                                <input
                                                    className=" border   text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
                                                    type="text"
                                                    id="primerNombre"
                                                    name="primerNombre"
                                                    value={primerNombre}
                                                    onChange={handleOneNameChange}
                                                />
                                            </div>
                                            <div className='w-6/12'>
                                                <label htmlFor="segundoNombre">Segundo Nombre:</label>
                                                <input
                                                    className=" border   text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
                                                    type="text"
                                                    id="segundoNombre"
                                                    name="segundoNombre"
                                                    value={segundoNombre}
                                                    onChange={handleTwoNameChange}
                                                />
                                            </div>
                                        </div>
                                        <div className='flex gap-3 text-white'>
                                            <div className='w-6/12'>
                                                <label htmlFor="primerApellido">Primer Apellido:</label>
                                                <input
                                                    className=" border   text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
                                                    type="text"
                                                    id="primerApellido"
                                                    name="primerApellido"
                                                    value={primerApellido}
                                                    onChange={handleOneLastChange}
                                                />
                                            </div>
                                            <div className='w-6/12'>
                                                <label htmlFor="segundoApellido">Segundo Apellido:</label>
                                                <input
                                                    className=" border   text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
                                                    type="text"
                                                    id="segundoApellido"
                                                    name="segundoApellido"
                                                    value={segundoApellido}
                                                    onChange={handleTwoLastChange}
                                                />
                                            </div>
                                        </div>
                                    </>
                                )}

                                <div className='flex gap-1 text-white'>
                                    <div className='w-4/12'>
                                        <label htmlFor="phone" className="block mb-2 text-sm font-medium  text-white">Phone:</label>
                                        <input
                                            className=" border   text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
                                            type="text"
                                            id="phone"
                                            name="phone"
                                            value={phone}
                                            onChange={handleInputPhone}
                                        />
                                    </div>
                                    <div className='w-4/12'>
                                        <label htmlFor="address" className="block mb-2 text-sm font-medium  text-white">Direccion:</label>
                                        <input
                                            className=" border   text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
                                            type="text"
                                            id="address"
                                            name="address"
                                            value={address}
                                            onChange={handleInputAddress}
                                        />
                                    </div>
                                    <div className="w-4/12">
                                        <label htmlFor="emailTercero" className="block mb-2 text-sm font-medium  text-white">Correo Electronico </label>
                                        <input
                                            type="text"
                                            name="emailTercero"
                                            id="emailTercero"
                                            className=" border   text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
                                            required
                                            placeholder='Email@Invoix.com.co'
                                            value={emailTercero}
                                            onChange={handleInputEmailChange}
                                        />
                                    </div>
                                </div>


                                <div className='flex gap-2'>
                                    <div className='w-6/12'>
                                        <label for="TipodePersona" class="block mb-2 text-sm font-medium  text-white">Tipo de Persona</label>
                                        <select
                                            id="TipodePersona"
                                            className=" border   text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
                                            value={tipoPersona}
                                            onChange={handleTipoPersonaChange}
                                        >
                                            <option value="Persona Juridica">Persona Juridica</option>
                                            <option value="Persona Natural">Persona Natural</option>
                                        </select>
                                    </div>
                                    <div className='w-6/12'>
                                        <label htmlFor="Responsabilidadtributaria" className="block mb-2 text-sm font-medium  text-white">Responsabilidad tributaria</label>
                                        <select
                                            id="Responsabilidadtributaria"
                                            className=" border   text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
                                            value={responsabilidadTributaria}
                                            onChange={handleInputRespTriChange}
                                        >
                                            <option value="Responsable de IVA">Responsable de IVA</option>
                                            <option value="No Responsable de IVA">No Responsable de IVA</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <button onClick={(e) => handleCrearTercero(e)} class="text-white inline-flex items-center bg-green-700 mt-3 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">
                            <svg class="mr-1 -ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                            Crear Tercero
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalCreateCliente