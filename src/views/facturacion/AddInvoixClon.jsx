import React, { useEffect, useState } from 'react'
import ModalCreateItems from '../../components/modals/ModalCreateItems'
import ModalCreateTercero from '../../components/modals/ModalCreateTercero';
import { ModalCreateTax } from '../../components/modals/ModalCreateTax';
import ModalCreateItem from '../../components/modals/ModalCreateItem';
import TableRowAddInvoix from '../../components/RowTableAddInvoix/TableRowAddInvoix';


const AddInvoix = () => {

    const [show, setShow] = useState(false);
    const [showTax, setShowTax] = useState(false);
    const [showCrearCliente, setShowCrearCliente] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState('');
    const [paymentOption, setPaymentOption] = useState('');
    const [paymentTerm, setPaymentTerm] = useState('');
    const [items, setItems] = useState([]);
    const [logo, setLogo] = useState(null);
    const [nombreTercero, setNombreTercero] = useState({});
    const [selectedContact, setSelectedContact] = useState({});
    const [telefono, setTelefono] = useState("");
    const [identificacion, setIdentificacion] = useState("");
    const [fecha, setFecha] = useState('');
    const [plazoPago, setPlazoPago] = useState('');
    const [vencimiento, setVencimiento] = useState('');



    console.log(items)

    const dataTercero = [
        {
            email: "Jean@Invoix.com.co",
            typeId: "CC",
            NumberId: "1130264365",
            DV: "9",
            RazonSocial: "Strap Technology",
            PrimerNombre: "Jean",
            segundoNombre: "Carlos",
            PrimerApellido: "Correa",
            SegundoApellido: "Barros",
            Telefono: "301940952",
            TypePerson: "Natural",
            RespoTribut: "Responsable de IVA"
        },
        {
            email: "Jean@Invoix.com.co",
            typeId: "CC",
            NumberId: "3595845",
            DV: "9",
            RazonSocial: "Strap Technology",
            PrimerNombre: "Juan",
            segundoNombre: "Manuel",
            PrimerApellido: "Herazo",
            SegundoApellido: "Portillo",
            Telefono: "3519579752",
            TypePerson: "Natural",
            RespoTribut: "Responsable de IVA"
        },
        {
            email: "Jean@Invoix.com.co",
            typeId: "CC",
            NumberId: "223594225",
            DV: "9",
            RazonSocial: "Strap Technology",
            PrimerNombre: "Leandro",
            segundoNombre: "Manuel",
            PrimerApellido: "Castro",
            SegundoApellido: "Castro",
            Telefono: "500002354",
            TypePerson: "Natural",
            RespoTribut: "Responsable de IVA"
        },

    ];


    const [data, setData] = useState([
        { id: 1, name: "Item 1" },
        { id: 2, name: "Item 2" },
        { id: 3, name: "Item 3" },
    ]);
    const [dataTax, setDataTax] = useState([
        { id: 1, name: "Impuesto 1" },
        { id: 2, name: "Impuesto 2" },
        { id: 3, name: "Impuesto 3" },
    ]);



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
    }

    /*mostrar Modal Crear Tercero */
    const handleShowCrearCliente = () => {
        setShowCrearCliente(!show)
    };


    /* Cargar datos obtenidos por contacto en input Identificacion y Telefono*/
    const handleSelectContact = (event) => {
        const { value } = event.target;
        setNombreTercero(value);
        const contact = dataTercero.find((tercero) => {
            return `${tercero.PrimerNombre} ${tercero.segundoNombre} ${tercero.PrimerApellido} ${tercero.SegundoApellido}` === value;
        });

        setSelectedContact(contact);
    };

    const handleTelefonoChange = (event) => {
        const { value } = event.target;
        setTelefono(value);
    };


    const handleIdentificacionChange = (event) => {
        const { value } = event.target;
        setIdentificacion(value);
    };




    /*mostrar formas de pago */
    const handlePaymentMethodChange = (event) => {
        const method = event.target.value;
        setPaymentMethod(method);
        if (method === 'Contado') {
            setPaymentTerm('');
            setPlazoPago('');
            setVencimiento('');

        } else if (method === 'Credito') {
            setPaymentOption('');
        }

    };


    /*Crear Row en Body */
    useEffect(() => {
        setItems(items)
    }, [items])

    const generateUniqueId = () => {
        const timestamp = Date.now().toString(36); // Obtén una representación en base 36 del timestamp actual
        const randomChars = Math.random().toString(36).substr(2, 5); // Genera una cadena aleatoria de 5 caracteres en base 36
        const uniqueId = `${timestamp}-${randomChars}`; // Combina el timestamp y la cadena aleatoria

        return uniqueId;
    };

    const HandleCreateRow = () => {
        const newItem = { id: generateUniqueId(), name: '', reference: '', unitPrice: '', percentage: '', taxes: '', description: '', quantity: '' };
        setItems([...items, newItem]);
    };



    const handleFechaChange = (e) => {
        setFecha(e.target.value);
    };

    const handlePlazoPagoChange = (e) => {
        const { value } = e.target;
        setPlazoPago(value);
    };

    const handleVencimientoChange = (e) => {
        const { value } = e.target;
        setVencimiento(value);
    };

    /* Guardar Factura */

    const handleGuardarFacturaCabecera = () => {
        const formDataCabeceraFactura = new FormData();
        formDataInf.append('logo', logo);
        formDataInf.append('nombreTercero', nombreTercero);
        formDataInf.append('numberId', selectedContact.NumberId);
        formDataInf.append('telefono', selectedContact.Telefono);
        formDataInf.append('fecha', fecha);
        formDataInf.append('paymentMethod', paymentMethod);
        formDataInf.append('paymentOption', paymentOption);
        formDataInf.append('plazoPago', plazoPago);
        formDataInf.append('vencimiento', vencimiento);

        fetch('Aqui va URL de envio de informacion cabecera de Factura', { method: 'POST', body: formDataCabeceraFactura })
            .then((response) => {
                if (response.ok) {
                    // Peticion exitosa
                } else {
                    // Peticion fallida
                }
            })
            .catch((error) => {
                // Manejar errores
                console.log(error);
            });
    };

    

    return (
        <main className="">
            <div className="px-16 mt-5 flex justify-start">
                <h2 className="font-semibold text-gray-600 text-4xl">Crear Factura</h2>
            </div>
            <div class="pt-6 px-4">
                <div class="mb-4 w-full grid grid-cols-1 md:grid-cols-1 xl:grid-cols-1 gap-4">
                    <div class="bg-gray-100 flex justify-center p-4 sm:p-6 xl:p-8">
                        <div className='w-[1000px] h-[75%]  bg-gray-50 shadow-lg rounded-lg absolute top-[7%] left-[9%] z-10'></div>
                        <div className='w-[1500px] h-full  bg-gray-50 shadow-2xl rounded-lg z-10'>

                            <div className='w-full flex justify-around px-20 pt-20'>
                                <div className="flex items-center justify-center w-4/12 bg-gray-100">
                                    <label htmlFor="front_card_side" className="flex bg-gray-100 flex-col items-center justify-center w-full h-24 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer dark:hover:bg-bray-800  hover:bg-gray-100">
                                        {logo ? (
                                            <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${logo})` }} />
                                        ) : (
                                            <div className="flex flex-col items-center justify-center pt-5">
                                                <p className="mb-2 text-2xl font-bold text-gray-500">Carga tu Logo</p>
                                                <p className="mb-2 text-sm text-gray-400 mt-[-10px]">250 x 88 pixeles</p>
                                            </div>
                                        )}
                                        <input id="front_card_side" type="file" className="hidden" onChange={handleLogoChange} />
                                    </label>
                                </div>
                                <div className='flex flex-col items-center justify-center ml-10  w-4/12'>
                                    <span className='w-full font-semibold text-lg text-center'>Nombre Completo Empresa</span>
                                    <p className='w-full font-semibold text-lg text-center'>NIT:1130264365</p>
                                </div>
                                <div className='flex items-center justify-end w-4/12 '>
                                    <span className='font-semibold text-xl mr-3'>No.</span>
                                    <input className='w-2/6 h-10 px-5 rounded-md bg-gray-100' disabled type="text" value={1} />
                                </div>
                            </div>

                            <div className='w-full flex justify-between px-20 py-10'>
                                <div class="flex flex-col px-20 gap-5 items-center justify-center w-full bg-gray-100 shadow-lg h-52 rounded ">
                                    <div className="w-full flex gap-2">
                                        <div className='w-5/12'>
                                            <div className='flex justify-between px-2'>
                                                <label for="name" class="block mb-2 text-sm font-medium text-gray-900  ">Contacto</label>
                                                <label for="name" onClick={handleShowCrearCliente} class="block mb-2 text-sm font-medium text-gray-900  cursor-pointer underline hover:text-green-600" >Crear Tercero</label>
                                            </div>
                                            <select
                                                id="category"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                                                onChange={handleSelectContact}
                                            >
                                                <option value="">Buscar...</option>
                                                {dataTercero.map((tercero, index) => (
                                                    <option
                                                        key={index}
                                                        value={`${tercero.PrimerNombre} ${tercero.segundoNombre} ${tercero.PrimerApellido} ${tercero.SegundoApellido}`}
                                                    >
                                                        {`${tercero.PrimerNombre} ${tercero.segundoNombre} ${tercero.PrimerApellido} ${tercero.SegundoApellido}`}
                                                    </option>
                                                ))}
                                            </select>

                                        </div>
                                        <div className='w-4/12'>
                                            <label for="Identificacion" class="block mb-2 text-sm font-medium text-gray-900">Identificacion</label>
                                            <input type="text" name="identificacion"
                                                value={selectedContact.NumberId || ""}
                                                onChange={handleIdentificacionChange}
                                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                                required=""
                                            />
                                        </div>
                                        <div className='w-3/12'>
                                            <label for="Telefono" class="block mb-2 text-sm font-medium text-gray-900">Telefono</label>
                                            <input
                                                type="text"
                                                id="telefono"
                                                name="telefono"
                                                value={selectedContact.Telefono || ""}
                                                onChange={handleTelefonoChange}
                                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                                required=""
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full flex gap-2">
                                        <div className='w-3/12'>
                                            <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900">Fecha</label>
                                            <input
                                                type="date"
                                                name="price"
                                                id="price"
                                                value={fecha}
                                                onChange={handleFechaChange}
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                                placeholder="$2999"
                                                required
                                            />
                                        </div>
                                        <div className='w-3/12'>
                                            <label for="name" class="block mb-2 text-sm font-medium text-gray-900  ">Formas de Pago</label>
                                            <select id="category" onChange={handlePaymentMethodChange} value={paymentMethod} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 " >
                                                <option>Seleccionar</option>
                                                <option value="Contado">Contado</option>
                                                <option value="Credito">Credito</option>
                                            </select>
                                        </div>
                                        {paymentMethod === 'Contado' && (
                                            <div className="w-4/12">
                                                <label htmlFor="MedioDePago" className="block mb-2 text-sm font-medium text-gray-900">
                                                    Medio de Pago
                                                </label>
                                                <select
                                                    id="category"
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                                                    value={paymentOption}
                                                    onChange={(event) => setPaymentOption(event.target.value)}
                                                >
                                                    <option>Seleccionar</option>
                                                    <option value="Efectivo">Efectivo</option>
                                                    <option value="Tranferencia debito">Tranferencia debito</option>
                                                </select>
                                            </div>
                                        )}
                                        {paymentMethod === 'Credito' && (
                                            <>
                                                <div className="w-3/12">
                                                    <label htmlFor="plazoDePago" className="block mb-2 text-sm font-medium text-gray-900">
                                                        Plazo de Pago
                                                    </label>
                                                    <select
                                                        id="category"
                                                        value={plazoPago}
                                                        onChange={handlePlazoPagoChange}
                                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                                                    >
                                                        <option value="">Seleccionar</option>
                                                        <option value="08(Dias)">08(Dias)</option>
                                                        <option value="15(Dias)">15(Dias)</option>
                                                        <option value="30(Dias)">30(Dias)</option>
                                                        <option value="60(Dias)">60(Dias)</option>
                                                        <option value="Vencimiento Mensual">Vencimiento Mensual</option>
                                                    </select>
                                                </div>
                                                <div className="w-3/12">
                                                    <label htmlFor="vencimiento" className="block mb-2 text-sm font-medium text-gray-900">
                                                        Vencimiento
                                                    </label>
                                                    <input
                                                        type="date"
                                                        name="price"
                                                        id="price"
                                                        value={vencimiento}
                                                        onChange={handleVencimientoChange}
                                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                                        placeholder="$2999"
                                                        required
                                                    />
                                                </div>
                                            </>


                                        )}

                                    </div>

                                </div>
                            </div>

                            <div className='w-full flex flex-col justify-between px-8  py-10 mb-32 '>
                                <div class="flex items-center justify-center w-full">
                                    <table class="text-sm text-center text-gray-500 w-4/5">
                                        <thead class="text-xs text-gray-500 bg-gray-100 ">
                                            <tr className='text-xs'>
                                                <th scope="col" class="px-3 py-3">
                                                    Item
                                                </th>
                                                <th scope="col" class="px-3 py-3">
                                                    Referencia
                                                </th>
                                                <th scope="col" class="px-3 py-3">
                                                    Precio
                                                </th>
                                                <th scope="col" class="px-3 py-3 ">
                                                    Desc %
                                                </th>
                                                <th scope="col" class="px-3 py-3">
                                                    Inpuesto
                                                </th>
                                                <th scope="col" class="px-3 py-3">
                                                    Descripcion
                                                </th>
                                                <th scope="col" class="px-3 py-3">
                                                    Cantidad
                                                </th>
                                                <th scope="col" class="px-3 py-3">
                                                    Total
                                                </th>
                                                <th scope="col" class="px-3 py-3">
                                                    Accion
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className=''>
                                            {items.map((item, index) => (
                                                <TableRowAddInvoix
                                                    key={index}
                                                    index={index}
                                                    setItems={setItems}
                                                    items={items}
                                                    id={item.id}
                                                />
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                <div className='w-full flex justify-end  mt-5 pr-3'>
                                    <button onClick={HandleCreateRow} className='bg-green-500 shadow-xl p-2 rounded text-white flex items-center hover:bg-green-800'><span class="material-symbols-outlined">add</span>Agregar Item</button>
                                    {/*<button onClick={handleShow} className='bg-green-500 shadow-xl p-2 rounded text-white flex items-center hover:bg-green-800'><span class="material-symbols-outlined">add</span>Agregar Item</button>*/}
                                </div>
                            </div>

                            <div className='w-full flex justify-end px-20 pt-5 mb-32'>

                                <div className='flex flex-col items-end w-4/12 '>
                                    <div className='w-full flex justify-around items-center'>
                                        <span className='w-6/12 font-semibold text-lg  text-right'>Subtotal</span>
                                        <span>$0</span>
                                    </div>
                                    <div className='w-full flex justify-around items-center'>
                                        <span className='w-6/12 font-semibold text-lg  text-right'>Descuento</span>
                                        <span>$0</span>
                                    </div>
                                    <div className='w-full flex justify-around items-center'>
                                        <span className='w-6/12 font-semibold text-lg  text-right'>Subtotal</span>
                                        <span>$0</span>
                                    </div>
                                    <hr className='w-full my-4 border-gray-400' />
                                    <div className='w-full flex justify-around items-center'>
                                        <span className='w-6/12 font-semibold text-lg  text-right'>Total</span>
                                        <span>$0</span>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
                <ModalCreateItem showCrearItem={show} setShowCrearItem={setShow} />
                <ModalCreateTax showCrearTax={showTax} setShowCrearTax={setShowTax} />
                <ModalCreateTercero showCrearCliente={showCrearCliente} setShowCrearCliente={setShowCrearCliente} />
            </div>
            <div className='w-full  flex justify-end px-32'>
                <button type="button" class="sm:inline-flex items-center justify-center h-10 text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-xs px-5 py-1.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 shadow-xl">Guardar Factura</button>
            </div>
        </main>

    )
}

export default AddInvoix