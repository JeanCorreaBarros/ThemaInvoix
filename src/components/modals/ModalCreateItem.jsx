import React, { useState, useEffect } from 'react'
import Swal from 'sweetalert2'

const ModalCreateItem = ({ showCrearItem, setShowCrearItem }) => {
    const [formValues, setFormValues] = useState({});


    const handleShow = () => {
        setShowCrearItem(!showCrearItem)
    }

    const [paymentMethod, setPaymentMethod] = useState('producto');
    const handlePaymentMethodChange = (event) => {
        const selectedValue = event.target.value;
        setPaymentMethod(selectedValue);
    };

    console.log(paymentMethod)



    /*const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };*/

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues((prevState) => ({
            ...prevState,
            [name]: value,
        }));

    };

    useEffect(() => {
        const total = calculateTotal(formValues.precio, formValues.impuesto);
        setFormValues((prevState) => ({
            ...prevState,
            totalItem: total,
        }));
    }, [formValues.precio, formValues.impuesto]);

    useEffect(() => {
        if (paymentMethod === 'servicio') {
            // Si paymentMethod es igual a 'servicio', restablecer los valores de los campos
            setFormValues({
                ...formValues,
                bodega: '',  // Limpiar el valor de bodega
                costoInicial: '',  // Limpiar el valor de costoInicial
                cantidad: '',  // Limpiar el valor de cantidad
            });
        }
    }, [paymentMethod])


    const calculateTotal = (precio, impuesto) => {
        const parsedPrecio = parseFloat(precio);
        const parsedImpuesto = parseFloat(impuesto);
        if (!isNaN(parsedPrecio) && !isNaN(parsedImpuesto)) {
            const impuestoAmount = parsedPrecio * (parsedImpuesto / 100);
            const total = parsedPrecio + impuestoAmount;
            return total.toFixed(2);
        }
        return '';
    };

    /** formteo de miles  */
    const formatNumber = (number) => {
        return number.toLocaleString('es-US', { maximumFractionDigits: 0 });
    };


    /* Crear Item metodo POST */
    const handleCrearItem= (e) => {
        e.preventDefault();
        const formDataItem = new FormData();
        formDataItem.append('tipo', paymentMethod);
        formDataItem.append('nombreItem', formValues.nombreItem);
        formDataItem.append('unidadDeMedida', formValues.unidadDeMedida);
        formDataItem.append('precio', formValues.precio);
        formDataItem.append('impuesto', formValues.impuesto);
        formDataItem.append('bodega', formValues.bodega);
        formDataItem.append('costoInicial', formValues.costoInicial);
        formDataItem.append('cantidad', formValues.cantidad);
        formDataItem.append('totalItem', formValues.totalItem);

        const token = sessionStorage.getItem('token');
        fetch('https://api.invoix.co/v1/saveproducts', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`
            },
            body: formDataItem
        })
            .then((response) => {
                if (response.ok) {
                    // Estado 200 - éxito
                    Swal.fire('Éxito', 'Item Creado Con Exito', 'success');
                    handleShow()
                    .then(() => {
                        window.location.reload(); // Recargar la página
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
            .catch((error) => {
                // Manejar errores
                console.log(error);
            });
    };




    return (
        <>
            <div id="defaultModal" tabindex="-1" aria-hidden="true" class={`${showCrearItem ? "" : "hidden"} flex ml-32 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full`}>
                <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">

                    <div class="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">

                        <div class="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                                Nuevo Item
                            </h3>
                            <button type="button" onClick={handleShow} class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
                                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                <span class="sr-only">Close modal</span>
                            </button>
                        </div>

                        <form >
                            <div class="grid gap-4 mb-4 sm:grid-cols-1">
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tipo de Items</label>
                                    <div className="flex justify-center gap-3">
                                        <label htmlFor="producto" className="bg-gray-50 border flex justify-between border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 w-6/12 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                            <span className="ml-2">Producto</span>
                                            <input
                                                type="checkbox"
                                                id="producto"
                                                name="producto"
                                                value="producto"
                                                className="form-checkbox bg-gray-50 border border-gray-300 text-primary-500 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                                checked={paymentMethod === 'producto'}
                                                onChange={handlePaymentMethodChange}
                                            />
                                        </label>
                                        <label htmlFor="servicio" className="bg-gray-50 border flex justify-between border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 w-6/12 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                            <span className="ml-2">Servicio</span>
                                            <input
                                                type="checkbox"
                                                id="servicio"
                                                name="servicio"
                                                value="servicio"
                                                className="form-checkbox bg-gray-50 border border-gray-300 text-primary-500 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                                checked={paymentMethod === 'servicio'}
                                                onChange={handlePaymentMethodChange}
                                            />
                                        </label>
                                        {/*<label htmlFor="especial" className="bg-gray-50 border flex justify-between border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 w-6/12 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                            <span className="ml-2">Especial</span>
                                            <input
                                                type="checkbox"
                                                id="especial"
                                                name="especial"
                                                value="especial"
                                                className="form-checkbox bg-gray-50 border border-gray-300 text-primary-500 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                                checked={paymentMethod === 'especial'}
                                                onChange={handlePaymentMethodChange}
                                            />
                                        </label>*/}
                                    </div>
                                </div>
                                <hr className="w-full" />

                                <div className={` ${paymentMethod == 'especial' ? 'hidden' : ''}`}>
                                    <div className="flex gap-2">
                                        <div className="w-6/12">
                                            <label htmlFor="nombreItem" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre</label>
                                            <input onChange={(e) => handleInputChange(e)} type="text" name="nombreItem" id="nombreItem" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required="" />
                                        </div>
                                        <div className="w-6/12">
                                            <label htmlFor="unidadDeMedida" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Unidad de medida</label>
                                            <select
                                                id="unidadDeMedida"
                                                name="unidadDeMedida"
                                                onChange={handleInputChange}
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                            >
                                                <option value="">Seleccione</option>
                                                <option value="unidad">Unidad</option>
                                            </select>
                                        </div>


                                    </div>
                                    {paymentMethod === 'producto' && (
                                        <div className="flex gap-2">
                                            <div className="w-6/12">
                                                <label htmlFor="bodega" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Bodega</label>
                                                <select
                                                    id="bodega"
                                                    name='bodega'
                                                    onChange={(e) => handleInputChange(e)}
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                                >
                                                    <option value="">Seleccione </option>
                                                    <option value="principal">Principal</option>
                                                </select>
                                            </div>
                                            <div className="w-3/12">
                                                <label htmlFor="costoInicial" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Costo Inicial</label>
                                                <input
                                                    onChange={(e) => handleInputChange(e)}
                                                    type="number"
                                                    name="costoInicial"
                                                    id="costoInicial"
                                                    value={formValues.costoInicial}
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                                    required=""
                                                />
                                            </div>
                                            <div className="w-3/12">
                                                <label htmlFor="cantidad" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Cantidad</label>
                                                <input onChange={(e) => handleInputChange(e)} type="number" name="cantidad" id="cantidad" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required="" />
                                            </div>
                                        </div>
                                    )}
                                    <div className="flex items-end gap-2">
                                        <div className="w-6/12">
                                            <label htmlFor="precio" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Precio</label>
                                            <input
                                                onChange={(e) => handleInputChange(e)}
                                                type="number"
                                                name="precio"
                                                id="precio"
                                                value={formValues.precio}
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                                required
                                            />
                                        </div>
                                        <div className="w-6/12">
                                            <label htmlFor="impuesto" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Impuesto</label>
                                            <input
                                                onChange={(e) => handleInputChange(e)}
                                                type="text"
                                                name="impuesto"
                                                id="impuesto"
                                                value={formValues.impuesto}
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                                required
                                            />
                                        </div>
                                        <div className="w-6/12">
                                            <label htmlFor="totalItem" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Total</label>
                                            <input
                                                type="text"
                                                name="totalItem"
                                                id="totalItem"
                                                value={formatNumber(Number(formValues.totalItem))}
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                                required
                                                readOnly
                                            />
                                        </div>
                                    </div>

                                </div>
                                <div className={` ${paymentMethod == 'especial' ? '' : 'hidden'} h-52 overflow-y-scroll `}>
                                    <div className="flex flex-col px-3 items-center gap-2">
                                        <div className="w-full">
                                            <label htmlFor="NombreSpecial" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre</label>
                                            <input onChange={(e) => handleInputChange(e)} type="text" name="NombreSpecial" id="NombreSpecial" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required="" />
                                        </div>
                                        <div className='w-full flex gap-3'>
                                            <div className="w-6/12">
                                                <label htmlFor="referenciaSpecial" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Referencia</label>
                                                <input onChange={(e) => handleInputChange(e)} type="text" name="referenciaSpecial" id="referenciaSpecial" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required="" />
                                            </div>
                                            <div className="w-6/12">
                                                <label htmlFor="bodegaSpecial" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Bodega</label>
                                                <input onChange={(e) => handleInputChange(e)} type="text" name="bodegaSpecial" id="bodegaSpecial" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required="" />
                                            </div>
                                        </div>
                                        <div className='w-full flex gap-3'>
                                            <div className="w-6/12">
                                                <label htmlFor="codigodeProductoSpecial" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Codigo de Producto</label>
                                                <input onChange={(e) => handleInputChange(e)} type="text" name="codigodeProductoSpecial" id="codigodeProductoSpecial" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required="" />
                                            </div>
                                            <div className="w-6/12">
                                                <label htmlFor="unidaddeMedidaSpecial" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Unidad de Medida</label>
                                                <input onChange={(e) => handleInputChange(e)} type="text" name="unidaddeMedidaSpecial" id="unidaddeMedidaSpecial" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required="" />
                                            </div>
                                        </div>
                                        <div className='w-full flex gap-3 mb-5'>
                                            <div className="w-6/12">
                                                <label htmlFor="categoriaSpecial" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Categoria</label>
                                                <input onChange={(e) => handleInputChange(e)} type="text" name="categoriaSpecial" id="categoriaSpecial" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required="" />
                                            </div>
                                            <div className="w-6/12">
                                                <label htmlFor="descripcionSpecial" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Descripcion</label>
                                                <textarea onChange={(e) => handleInputChange(e)} type="text" name="descripcionSpecial" id="descripcionSpecial" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required="" />
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="w-full" />
                                    <div className="flex items-end gap-2 px-3 mt-5 mb-5">
                                        <div className="w-6/12">
                                            <label htmlFor="precioSpecial" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Precio</label>
                                            <input onChange={(e) => handleInputChange(e)} type="text" name="precioSpecial" id="precioSpecial" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required="" />
                                        </div>
                                        <div className="w-6/12">
                                            <label htmlFor="impuestoSpecial" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Impuesto</label>
                                            <input onChange={(e) => handleInputChange(e)} type="text" name="impuestoSpecial" id="impuestoSpecial" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required="" />
                                        </div>
                                        <div className="w-6/12">
                                            <label htmlFor="totalSpecial" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Total</label>
                                            <input onChange={(e) => handleInputChange(e)} type="text" name="totalSpecial" id="totalSpecial" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required="" />
                                        </div>
                                    </div>
                                    <hr className="w-full" />
                                </div>


                            </div>

                            <button onClick={(e)=>handleCrearItem(e)}  class=" my-5 text-white inline-flex items-center bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">
                                <svg class="mr-1 -ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                                Crear Nuevo Item
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalCreateItem