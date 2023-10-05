import React, { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import ModalCreateItems from '../../components/modals/ModalCreateItems'
import ModalCreateTercero from '../../components/modals/ModalCreateTercero';
import { ModalCreateTax } from '../../components/modals/ModalCreateTax';
import ModalCreateItem from '../../components/modals/ModalCreateItem';
import TableRowAddInvoix from '../../components/RowTableAddInvoix/TableRowAddInvoix';
import Swal from 'sweetalert2'


const AddInvoix = () => {

    const [showItem, setShowItem] = useState(false);
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

    const [fetchResponse, setFetchResponse] = useState([]);
    const [dataPrefijo, setDataPrefijo] = useState('');


    const [customers, setCustomers] = useState([]);
    console.log(customers)

    console.log(items)
    /** sumar campos para resultado de valor de factura */
    const [subtotal, setSubtotal] = useState(0);
    const [descuento, setDescuento] = useState(0);
    const [impuesto, setImpuesto] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const fetchCustomers = async () => {
            try {
                const token = sessionStorage.getItem('token');
                const response = await fetch('https://api.invoix.co/v1/customers', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                const data = await response.json();
                setCustomers(data);
            } catch (error) {
                console.error('Error fetching customers:', error);
            }
        };

        fetchCustomers();
    }, [showCrearCliente]);


    /** calcular el total de impuestos de la factura */
    function calcularTaxGlobal(impuesto) {
        let sum = 0;

        for (let key in impuesto) {
            if (impuesto.hasOwnProperty(key)) {
                sum += impuesto[key];
            }
        }

        return sum;
    }

    const taxGlobal = calcularTaxGlobal(impuesto);

    /* Cargar Img Logo Factura */
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








    /*mostrar Modal Crear Tercero */
    const handleShowCrearCliente = () => {
        setShowCrearCliente(!showCrearCliente)
    };

    /*mostrar Modal Crear Item */
    const handleShowCrearItem = () => {
        setShowItem(!showItem)
    };

    /*mostrar Modal Crear Tax */
    const handleShowCrearTax = () => {
        setShowTax(!showTax)
    };


    /* Cargar datos obtenidos por contacto en input Identificacion y Telefono*/
    const handleSelectContact = (event) => {
        const { value } = event.target;
        setNombreTercero(value);
        const contact = customers.find((tercero) => {
            return `${tercero.RazonSocial} ` === value;
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




    /* Capturar Fecha de cabecera */
    const handleFechaChange = (e) => {
        setFecha(e.target.value);
    };


    /** capturas estados para cabecera  */
    const [resolution, setResolution] = useState([]);
    const [companyId, setCompanyId] = useState([]);

    useEffect(() => {
        const token = sessionStorage.getItem('token');
        fetch('https://api.invoix.co/v1/resolutions', {
            headers: {
                'Authorization': `Bearer ${token}`
            },
        })
            .then(response => response.json())
            .then(data => {
                // Obtener el valor del prefijo
                const companyData = data.find(item => item.hasOwnProperty('company_id')).company_id;
                const resolutionData = data.find(item => item.hasOwnProperty('resolution')).resolution;
                setCompanyId(companyData)
                setResolution(resolutionData)
                // Actualizar el estado con el valor del prefijo
                setFetchResponse([data[0]])

            });
    }, []);



    /* Capturar Prefijo de cabecera */
    const handleDataPrefijoChange = (e) => {
        setDataPrefijo(e.target.value);
    };


    /* Capturar Plazo de pago Cabecera */
    const handlePlazoPagoChange = (e) => {
        const { value } = e.target;
        setPlazoPago(value);
    };
    /* Capturar Fecha de vencimiento */
    const handleVencimientoChange = (e) => {
        const { value } = e.target;
        setVencimiento(value);
    };


    /** Crear y capturar dv con numero de documento */
    const [dv, setDV] = useState("");
    const calcularDV = (numero) => {
        if (!numero) {
            return '';
        }
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

    useEffect(() => {
        const nuevoDV = calcularDV(selectedContact.NumberId);
        setDV(nuevoDV);
    }, [selectedContact.NumberId]);



    /* Guardar Factura cabecera */
    const handleGuardarFacturaCabecera = () => {
        const totalBase = subtotal - descuento;
        const formDataCabeceraFactura = new FormData();

        formDataCabeceraFactura.append('order_subtotal_before_tax', subtotal);
        formDataCabeceraFactura.append('order_total_desc', descuento);
        formDataCabeceraFactura.append('order_total_before_tax', totalBase);
        formDataCabeceraFactura.append('order_total_tax', taxGlobal);
        formDataCabeceraFactura.append('order_total_after_tax', total);

        if (typeof inputValues.observation === 'undefined') {
            formDataCabeceraFactura.append('observation', '');
        } else {
            formDataCabeceraFactura.append('observation', inputValues.observation);
        }
        
        formDataCabeceraFactura.append('prefijo', dataPrefijo);
        formDataCabeceraFactura.append('resolution', resolution);
        formDataCabeceraFactura.append('company_id', companyId);
        formDataCabeceraFactura.append('order_receiver_address', selectedContact.address);

        formDataCabeceraFactura.append('nombreTercero', nombreTercero);
        formDataCabeceraFactura.append('numberId', selectedContact.NumberId);
        formDataCabeceraFactura.append('dv', dv);
        formDataCabeceraFactura.append('telefono', selectedContact.Telefono);
        formDataCabeceraFactura.append('fecha', fecha);
        formDataCabeceraFactura.append('paymentMethod', paymentMethod);
        formDataCabeceraFactura.append('paymentOption', paymentOption || '2');
        formDataCabeceraFactura.append('plazoPago', plazoPago || '0');
        formDataCabeceraFactura.append('vencimiento', vencimiento || '0');

        const token = sessionStorage.getItem('token');
        fetch('https://api.invoix.co/v1/saveinvoix', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`
            },
            body: formDataCabeceraFactura
        })
            .then((response) => {
                if (response.ok) {
                    // Estado 200 - éxito
                    /*Swal.fire('Éxito', 'Cabecera Enviada Con Exito', 'success');*/
                    setDataPrefijo('');
                    setNombreTercero('');
                    setSelectedContact({
                        NumberId: '',
                        Telefono: '',
                    });
                    setFecha('');
                    setPaymentMethod('');
                    setPaymentOption('');
                    setPlazoPago('');
                    setVencimiento('');

                    // Crear las variables de sesión
                    response.json().then((data) => {
                        sessionStorage.setItem('prefijo', data.prefijo);
                        sessionStorage.setItem('factura', data.consecutivo);
                        setTimeout(() => {
                            handleSaveDetails();
                        },);
                        /*setTimeout(() => {
                            location.reload();
                        }, timeoutReload);*/
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




    /*SECCION DE  ITEMS DE FACTURA */
    const [inputValues, setInputValues] = useState({
        item: '',
        reference: '',
        unitPrice: '',
        percentage: '',
        tax: '',
        description: '',
        quantity: '',
        total: 0,
        observation: ''
    });



    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInputValues((prevInputValues) => ({
            ...prevInputValues,
            [name]: value
        }));
        if (name === 'unitPrice' || name === 'percentage' || name === 'tax' || name === 'quantity') {
            calculateTotal();
        }
    };




    useEffect(() => {
        calculateTotal();
    }, [inputValues.unitPrice, inputValues.percentage, inputValues.tax, inputValues.quantity]);

    /** Calcular Total */
    const calculateTotal = () => {
        const unitPrice = parseFloat(inputValues.unitPrice || 0);
        const percentage = parseFloat(inputValues.percentage || 0);
        const tax = parseFloat(inputValues.tax || 0);
        const quantity = parseFloat(inputValues.quantity || 0);

        let total = unitPrice - percentage;

        if (tax !== undefined && tax !== null && tax !== 0) {
            const impuestoPorcentaje = (total * tax) / 100;
            total += impuestoPorcentaje;
        }
        /*if (!isNaN(tax)) {
            total += tax;
        }*/
        total *= quantity;

        setInputValues((prevValues) => ({
            ...prevValues,
            total: total.toFixed(2),
        }));
    };






    useEffect(() => {
        sumarSubtotal();
        sumarDescuento();
        sumarImpuesto();
        calculateTotalFactura()
    }, [items]);

    useEffect(() => {
        calculateTotalFactura()
    }, [subtotal]);



    const sumarSubtotal = () => {
        let suma = 0;
        let comuladoIVA = 0
        items.forEach((item) => {
            const itemSubtotal = item.unitPrice * item.quantity;
            suma += itemSubtotal;
        });
        setSubtotal(suma);
    };
    const sumarDescuento = () => {
        let suma = 0;
        items.forEach((item) => {
            const itemDescuento = item.percentage * item.quantity;
            suma += itemDescuento;
        });
        setDescuento(suma);
    };





    const sumarImpuesto = () => {
        const taxValues = {};
        console.log(items)
        items.forEach((item) => {
            const { tax, unitPrice, percentage, quantity } = item;
            const impuesto = ((unitPrice - percentage) * tax / 100)
            const totalImpuesto = impuesto * quantity;
            if (tax in taxValues) {
                taxValues[tax] += totalImpuesto;
            } else {
                taxValues[tax] = totalImpuesto;
            }
        });


        setImpuesto(taxValues);
    };



    const calculateTotalFactura = () => {
        let total = subtotal - descuento;

        if (Array.isArray(impuesto)) {
            impuesto.forEach((tax) => {
                if (tax !== 0) {
                    const impuestoPorcentaje = (subtotal - descuento) * tax / 100;
                    total += impuestoPorcentaje;
                }
            });
        } else {
            Object.values(impuesto).forEach((value) => {

                total += value;
            });
        }

        setTotal(Number(total));
    };




    /** formteo de miles  */
    const formatNumber = (number) => {
        return number.toLocaleString('es-US', { maximumFractionDigits: 0 });
    };


    /** Agregar Elemento a Tabla */
    const HandleCreateRow = () => {
        // Verifica si todos los campos de entrada tienen valores
        if (
            !inputValues.item ||
            !inputValues.reference ||
            !inputValues.unitPrice ||
            !inputValues.percentage === undefined ||
            !inputValues.tax === undefined ||  // Permitir que tax tenga valor cero
            !inputValues.description === undefined ||
            !inputValues.quantity ||
            !inputValues.total
        ) {
            // Muestra una alerta indicando que hay campos vacíos
            Swal.fire({
                icon: 'error',
                title: 'Campos vacíos',
                text: 'Por favor, complete todos los campos de entrada.',
            });
            // Si algún campo está vacío, no se agrega el nuevo elemento
            return;
        }

        // Añadir un cero al campo "tax" si está vacío
        if (inputValues.tax === undefined) {
            inputValues.tax = '0'
        }

        // Añadir un cero al campo "percentage" si está vacío
        if (inputValues.percentage === '') {
            inputValues.percentage = '0'
            /*setInputValues(prevInputValues => ({
                ...prevInputValues,
                percentage: '0',
            }));*/
        }

        // Obtiene los valores de los campos del estado inputValues
        const newItem = {
            item: inputValues.item,
            reference: inputValues.reference,
            unitPrice: inputValues.unitPrice,
            percentage: inputValues.percentage ?? 0,
            tax: inputValues.tax,
            description: inputValues.description,
            quantity: inputValues.quantity,
            total: inputValues.total
        };

        // Agrega el nuevo item al estado de los items
        setItems(prevItems => [...prevItems, newItem]);

        // Reinicia los valores de los campos a su estado inicial
        setSearchText('');
        setSearchTextTax('');
        setInputValues({
            item: '',
            reference: '',
            unitPrice: '',
            percentage: '',
            tax: '',
            description: '',
            quantity: '',
            total: ''
        });

        sumarSubtotal();
    };


    /** Eliminar  Elemento de Tabla */
    /*const handleDelete = (index) => {
        setItems((prevItems) => {
            const updatedItems = [...prevItems];
            updatedItems.splice(index, 1); // Elimina el elemento en el índice especificado
            return updatedItems;
        });
        sumarSubtotal();
    };*/

    const handleDelete = (index) => {
        setItems((prevItems) => {
            const updatedItems = [...prevItems];
            updatedItems.splice(index, 1);
            return updatedItems;
        });

        setImpuesto((prevImpuesto) => {
            const updatedImpuesto = Array.isArray(prevImpuesto) ? [...prevImpuesto] : []; // Asegurar que prevImpuesto sea un array
            updatedImpuesto.splice(index, 1);
            return updatedImpuesto;
        });

        calculateTotalFactura();
    };


    /*const [data, setData] = useState([
        { id: 1, name: "Gaseosa (2) Litro" },
        { id: 2, name: "Pan Blanco Grande" },
        { id: 3, name: "Salchichon Cervercero" },
    ]);*/

    /** Get de Items */
    const [datat, setDatat] = useState([]);

    const lastResponseRef = useRef(null);

    useEffect(() => {
        const fetchData = async () => {
            const token = sessionStorage.getItem('token');
            try {
                const response = await fetch('https://api.invoix.co/v1/products', {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    },
                });
                const jsonData = await response.json();
                console.log(jsonData);
                lastResponseRef.current = jsonData;
                setDatat(jsonData);
            } catch (error) {
                console.log('Error fetching data:', error);
            }
        };

        fetchData();
    }, [showItem]);

    // Vuelve a ejecutar el useEffect al actualizar lastResponseRef.current
    useEffect(() => {
        // Coloca aquí el código que deseas ejecutar cada vez que la respuesta cambie
        console.log('La respuesta del fetch ha cambiado:', datat);
    }, []);








    const dataItems = datat.map((item, index) => ({
        id: index + 1,
        name: item.nombreItem,
        type: item.tipo,
        warehouse: item.bodega,
        quantity: item.cantidad,
        initialCost: item.costoInicial,
        tax: item.impuesto,
        price: item.precio,
        totalItem: item.totalItem,
        unitOfMeasure: item.unidadDeMedida
    }));



    /*const [dataTax, setDataTax] = useState([
        { id: 1, name: "IVA-(0%)", tax: '0' },
        { id: 2, name: "IVA-(5%)", tax: '5' },
        { id: 3, name: "IVA-(19%)", tax: '19' },
    ]);*/


    /** Get de Tax */
    const [taxdata, settaxData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const token = sessionStorage.getItem('token');
            try {
                const response = await fetch('https://api.invoix.co/v1/taxeslist', {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    },
                });
                const jsonData = await response.json();
                settaxData(jsonData);
            } catch (error) {
                console.log('Error fetching data:', error);
            }
        };

        fetchData();
    }, [showTax]);



    const dataTax = taxdata.map((item, index) => ({
        id: index + 1,
        name: `${item.typeTax}-(${item.percentage}%)`,
        tax: item.percentage
    }));




    /* filtro de buscador item en input */
    const [searchText, setSearchText] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [selectedItem, setSelectedItem] = useState('');

    const filteredData = dataItems.filter(item =>
        item.name.toLowerCase().includes(searchText.toLowerCase())
    );



    const inputRef = useRef(null);
    const modalRef = useRef(null);

    const handleInputFocus = () => {
        setShowModal(true);
    };

    const handleModalClose = () => {
        setShowModal(false);
    };

    /*const handleItemClick = (item) => {
        setSelectedItem(item);
        handleInputChange({ target: { name: 'item', value: item.name } });
        setSearchText(item.name);
        setShowModal(false);
    };*/

    const handleItemClick = (item) => {
        setSelectedItem(item);
        setInputValues({
            reference: item.reference || '',
            unitPrice: item.price || '',
            percentage: item.percentage || '',
            description: item.description || '',
            quantity: item.quantity || '',
            total: item.total || ''
        });
        handleInputChange({ target: { name: 'item', value: item.name } });
        setSearchText(item.name);
        setShowModal(false);
    }


    /* filtro de buscador TAX en input */
    const [searchTextTax, setSearchTextTax] = useState('');
    const [showModalTax, setShowModalTax] = useState(false);
    const [selectedTax, setSelectedTax] = useState('');


    console.log(searchTextTax);

    const filteredDataTax = dataTax.filter(item =>
        item.name.toLowerCase().includes(searchTextTax.toLowerCase())
    );

    const inputRefTax = useRef(null);
    const modalRefTax = useRef(null);

    const handleInputFocusTax = () => {
        setShowModalTax(true);
    };

    const handleModalCloseTax = () => {
        setShowModalTax(false);
    };

    const handleItemClickTax = (item) => {
        console.log(item)
        setSelectedTax(item);
        handleInputChange({ target: { name: 'tax', value: Number(item.tax) } });
        setSearchTextTax(item.name);
        setShowModalTax(false);
    };

    /* Detectar si estoy posionado en input */
    const handleOutsideClick = (event) => {
        if (
            inputRef.current &&
            !inputRef.current.contains(event.target) &&
            modalRef.current &&
            !modalRef.current.contains(event.target)
        ) {
            setShowModal(false);
        }
    };

    /* Detectar si estoy posionado Tax en input */
    const handleOutsideClickTax = (event) => {
        if (
            inputRefTax.current &&
            !inputRefTax.current.contains(event.target) &&
            modalRefTax.current &&
            !modalRefTax.current.contains(event.target)
        ) {
            setShowModalTax(false);
        }
    };


    useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClickTax);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClickTax);
        };
    }, []);



    /*const handleSaveDetails = () => {
        const formData = new FormData();
        const prefijo = sessionStorage.getItem('prefijo');
        const factura = sessionStorage.getItem('factura');
        items.forEach((item, index) => {
            formData.append(`items[${index}].prefijo`, prefijo);
            formData.append(`items[${index}].factura`, factura);
            formData.append(`items[${index}].item`, item.item);
            formData.append(`items[${index}].reference`, item.reference);
            formData.append(`items[${index}].unitPrice`, item.unitPrice);
            formData.append(`items[${index}].percentage`, item.percentage);
            formData.append(`items[${index}].tax`, item.tax);
            formData.append(`items[${index}].description`, item.description);
            formData.append(`items[${index}].quantity`, item.quantity);
            formData.append(`items[${index}].total`, item.total);
        });

        const token = sessionStorage.getItem('token');
        fetch('https://api.invoix.co/v1/savedetailinvoix', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`
            },
            body: formData
        })
            .then(response => {
                if (response.ok) {
                    // Estado 200 - éxito
                    Swal.fire('Éxito', 'Detalles guardados con éxito', 'success');
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
                // Aquí puedes manejar la respuesta del servidor
                console.log(data);
            })
            .catch(error => {
                // Aquí puedes manejar errores de la solicitud
                console.error(error);
            });
    };*/
    const navigate = useNavigate();
    const handleSaveDetails = () => {

        const itemsPayload = items.map(item => ({
            prefijo: sessionStorage.getItem('prefijo'),
            factura: sessionStorage.getItem('factura'),
            codprod: "01001",
            item: item.item,
            reference: item.reference,
            unitPrice: item.unitPrice,
            percentage: item.percentage,
            tax: item.tax,
            description: item.description,
            quantity: item.quantity,
            total: item.total
        }));

        const payload = {
            items: itemsPayload
        };

        console.log(itemsPayload)

        const token = sessionStorage.getItem('token');
        fetch('https://api.invoix.co/v1/savedetailinvoix', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
            .then(response => {
                if (response.ok) {
                    // Estado 200 - éxito
                    Swal.fire('Éxito', 'Factura Guardada con éxito', 'success');
                    navigate('/invoice'); // Navegar a la ruta "/invoice"
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
                // Aquí puedes manejar la respuesta del servidor
                console.log(data);
            })
            .catch(error => {
                // Aquí puedes manejar errores de la solicitud
                console.error(error);
            });
    };

    const storedName = sessionStorage.getItem('name');
    const comercialname = sessionStorage.getItem('comercialname');
    const IdNumber = sessionStorage.getItem('IdNumber');

    return (
        <main className="">
            <div className="px-16 mt-5 flex justify-start">
                <h2 className="font-semibold text-gray-600 text-4xl">Crear Factura</h2>
            </div>
            <div class="pt-6 px-4">
                <div class="mb-4 w-full grid grid-cols-1 md:grid-cols-1 xl:grid-cols-1 gap-4">
                    <div class="bg-gray-100 flex justify-center p-4 sm:p-6 xl:p-8">
                        {/*<div className='w-[1190px] h-[75%]  bg-gray-50 shadow-lg rounded-lg absolute top-[6.5%] left-[9%] z-10'></div>*/}
                        <div className='w-[1500px] h-full  bg-gray-50 shadow-2xl rounded-lg z-10'>

                            <div className='w-full flex justify-around px-20 pt-20'>
                                {/*<div className="flex items-center justify-center w-4/12 bg-gray-100">
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
                                </div>*/}
                                <div className="flex items-center justify-center w-4/12 bg-gray-100">
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
                                <div className='flex flex-col items-center justify-center ml-10  w-4/12'>
                                    <span className='w-full font-semibold text-lg text-center'>{comercialname}</span>
                                    <span className='w-full font-semibold text-lg text-center'>{storedName}</span>
                                    <p className='w-full font-semibold text-lg text-center'>NIT:{IdNumber}</p>
                                </div>
                                <div className='flex items-center justify-end w-4/12 '>
                                    <span className='font-semibold text-xl mr-3'>No.</span>
                                    <input className='w-2/6 h-10 px-3 rounded-md bg-gray-100' disabled type="text" value={"Creando..."} />
                                </div>
                            </div>

                            {/* SECCION DE CABECERA */}
                            <div className='w-full flex justify-between px-20 py-10'>
                                <div class="flex flex-col px-20 gap-5 items-center justify-center w-full bg-gray-100 shadow-lg h-52 rounded ">
                                    <div className="w-full flex gap-2">
                                        <div className='w-5/12'>
                                            <div className='flex justify-between px-2'>
                                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">
                                                    Contacto
                                                </label>
                                                <label htmlFor="name" onClick={handleShowCrearCliente} className="block mb-2 text-sm font-medium text-gray-900 cursor-pointer underline hover:text-green-600">
                                                    Crear Tercero
                                                </label>
                                            </div>
                                            <select
                                                id="category"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                                                onChange={handleSelectContact}
                                            >
                                                <option value="">Buscar...</option>
                                                {customers.map((customer, index) => (
                                                    <option
                                                        key={index}
                                                        value={`${customer.RazonSocial} `}
                                                    >
                                                        {`${customer.RazonSocial} `}
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
                                            <label htmlFor="prefijo" className="block mb-2 text-sm font-medium text-gray-900">Prefijo</label>
                                            <select
                                                name="prefijo"
                                                id="prefijo"
                                                value={dataPrefijo}
                                                onChange={handleDataPrefijoChange}
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                                required
                                            >
                                                <option disabled selected value="">Seleccionar Prefijo</option>
                                                {fetchResponse.map((option, index) => (
                                                    <option key={index} value={option.value}>
                                                        {option.prefix}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className='w-3/12'>
                                            <label for="name" class="block mb-2 text-sm font-medium text-gray-900  ">Formas de Pago</label>
                                            <select id="category" onChange={handlePaymentMethodChange} value={paymentMethod} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 " >
                                                <option value="0" selected>Seleccionar</option>
                                                <option value="1">Contado</option>
                                                <option value="2">Credito</option>
                                            </select>
                                        </div>
                                        {paymentMethod === '1' && (
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
                                                    <option value="2">Credito ACH</option>
                                                    <option value="3">Debito ACH</option>
                                                    <option value="10">Efectivo</option>
                                                    <option value="13">Credito Ahorro</option>
                                                    <option value="14">Debito Ahorro</option>
                                                    <option value="20">Cheque</option>
                                                </select>
                                            </div>
                                        )}
                                        {paymentMethod === '2' && (
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
                                                        <option value="0">Seleccionar</option>
                                                        <option value="1">Semanal</option>
                                                        <option value="2">Decenal</option>
                                                        <option value="3">Catorcenal</option>
                                                        <option value="4">Quincenal</option>
                                                        <option value="5">Mensual</option>
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

                            {/* SECCION DE ITEMS */}
                            <div className='w-full flex flex-col justify-between px-20 py-10 '>
                                <div class="flex flex-col px-5 gap-5 items-center justify-center w-full bg-gray-100 shadow-lg py-5  rounded ">
                                    <div className="w-full flex gap-2">
                                        <div className='w-5/12'>
                                            <div className='flex justify-between px-2'>
                                                <label htmlFor="item" className="block mb-2 text-sm font-medium text-gray-900">Item</label>
                                            </div>
                                            <div ref={inputRef}>
                                                <input
                                                    type="text"
                                                    placeholder="Buscar..."
                                                    value={searchText}
                                                    onChange={e => setSearchText(e.target.value)}
                                                    onFocus={handleInputFocus}
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                                                />
                                            </div>
                                            {showModal && (
                                                <div ref={modalRef}>
                                                    <div className="bg-white p-4 rounded-lg shadow-lg">
                                                        <ul className="divide-y divide-gray-200">
                                                            {filteredData.slice(0, 3).map((item, index) => (
                                                                <li
                                                                    key={index}
                                                                    className="py-2 cursor-pointer text-xs hover:bg-gray-100"
                                                                    onClick={() => handleItemClick(item)}
                                                                >
                                                                    {item.name}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                        <button
                                                            onClick={handleShowCrearItem}
                                                            className="block mt-4 text-sm font-medium text-gray-900 cursor-pointer underline hover:text-green-600"
                                                        >
                                                            Crear Item
                                                        </button>
                                                    </div>
                                                </div>
                                            )}
                                        </div>


                                        <div className='w-4/12'>
                                            <label for="reference" class="block mb-2 text-sm font-medium text-gray-900">Referencia</label>
                                            <input
                                                type="text"
                                                name="reference"
                                                id="reference"
                                                value={inputValues.reference || ""}
                                                onChange={handleInputChange}
                                                class="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                                required=""
                                                placeholder='Obligatorio'
                                            />
                                        </div>
                                        <div className='w-3/12'>
                                            <label for="unitPrice" class="block mb-2 text-sm font-medium text-gray-900">Precio</label>
                                            <input
                                                type="number"
                                                id="unitPrice"
                                                name="unitPrice"
                                                value={inputValues.unitPrice || ""}
                                                onChange={handleInputChange}
                                                class="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                                required=""
                                                placeholder='Obligatorio'
                                            />
                                        </div>
                                        <div className='w-3/12'>
                                            <label for="percentage" class="block mb-2 text-sm font-medium text-gray-900">Desc/to($)</label>
                                            <input
                                                type="number"
                                                id="percentage"
                                                name="percentage"
                                                value={inputValues.percentage || ""}
                                                onChange={handleInputChange}
                                                class="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                                required=""
                                                placeholder='Opcional'
                                            />
                                        </div>
                                        <div className='w-5/12'>
                                            <div className='flex justify-between px-2'>
                                                <label htmlFor="tax" className="block mb-2 text-sm font-medium text-gray-900">Impuesto</label>
                                            </div>
                                            <div ref={inputRefTax}>
                                                <input
                                                    type="text"
                                                    placeholder="Buscar..."
                                                    value={searchTextTax}
                                                    onChange={e => setSearchTextTax(e.target.value)}
                                                    onFocus={handleInputFocusTax}
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                                                />
                                            </div>
                                            {showModalTax && (
                                                <div ref={modalRefTax} >
                                                    <div className="bg-white p-4 rounded-lg shadow-lg">
                                                        <ul className="divide-y text-xs divide-gray-200">
                                                            {filteredDataTax.slice(0, 3).map((item, index) => (
                                                                <li
                                                                    key={index}
                                                                    className="py-2 cursor-pointer hover:bg-gray-100"
                                                                    onClick={() => handleItemClickTax(item)}
                                                                    value={item.name}
                                                                >
                                                                    {item.name}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                        <button
                                                            onClick={handleShowCrearTax}
                                                            className="block mt-4 text-sm font-medium text-gray-900 cursor-pointer underline hover:text-green-600"
                                                        >
                                                            Crear Impuesto
                                                        </button>
                                                    </div>
                                                </div>
                                            )}
                                        </div>


                                        <div className='w-3/12'>
                                            <label for="description" class="block mb-2 text-sm font-medium text-gray-900">Descripcion</label>
                                            <textarea
                                                type="text"
                                                id="description"
                                                name="description"
                                                value={inputValues.description || ""}
                                                onChange={handleInputChange}
                                                class="bg-gray-50 border h-10 border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                                required=""
                                                placeholder='Opcional'
                                            />
                                        </div>
                                        <div className='w-3/12'>
                                            <label for="quantity" class="block mb-2 text-sm font-medium text-gray-900">Cantidad</label>
                                            <input
                                                type="number"
                                                id="quantity"
                                                name="quantity"
                                                value={inputValues.quantity || ""}
                                                onChange={handleInputChange}
                                                class="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                                required=""
                                            />
                                        </div>
                                        <div className='w-3/12'>
                                            <label for="total" class="block mb-2 text-sm font-medium text-gray-900">Total</label>
                                            <input
                                                type="text"
                                                id="total"
                                                name="total"
                                                disabled
                                                value={inputValues.total || ""}
                                                onChange={handleInputChange}
                                                class="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                                required=""
                                                placeholder='0.00'
                                            />
                                        </div>
                                        {/* Boton de Agregar Items */}
                                        <div className='w-3/12' >
                                            <label for="total" class="block mb-2 text-sm font-medium text-gray-900"></label>
                                            <button onClick={HandleCreateRow} className='bg-green-500 shadow-xl p-2 text-xs mt-7 rounded text-white flex items-center hover:bg-green-800'><span class="material-symbols-outlined">add</span>Agregar</button>
                                            {/*<button onClick={handleShow} className='bg-green-500 shadow-xl p-2 rounded text-white flex items-center hover:bg-green-800'><span class="material-symbols-outlined">add</span>Agregar Item</button>*/}
                                        </div>
                                    </div>
                                </div>



                                {/* Tbla de Items Agregados */}
                                <div class="flex items-center justify-center w-full mt-5">
                                    <table class="text-sm text-center text-gray-500 w-full">
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
                                                    Descuento
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
                                        <tbody className={items.length === 0 ? 'sin-datos' : ''}>
                                            {items.length === 0 && (
                                                <tr className="bg-white border-b h-24  ">
                                                    <td colSpan="9">Sin datos <br /> Agrega Items</td>
                                                </tr>
                                            )}
                                            {items.map((item, index) => (
                                                <tr key={index} className="bg-white border-b text-xs hover:shadow-xl hover:scale-110">
                                                    <td className="px-3 py-4">{item.item}</td>
                                                    <td className="px-3 py-4">{item.reference}</td>
                                                    <td className="px-3 py-4">{formatNumber(Number(item.unitPrice))}</td>
                                                    <td className="px-3 py-4">{formatNumber(Number(item.percentage))}</td>
                                                    <td className="px-3 py-4">{item.tax}%</td>
                                                    <td className="px-3 py-4">{item.description}</td>
                                                    <td className="px-3 py-4">{item.quantity}</td>
                                                    <td className="px-3 py-4">{formatNumber(Number(item.total))}</td>
                                                    <td className="px-3 py-4">
                                                        <button className="font-medium text-red-600 hover:underline" onClick={() => handleDelete(index)} title="Eliminar fila">
                                                            <span className="material-symbols-outlined">delete</span>
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>

                                    </table>
                                </div>
                            </div>

                            <div className='w-full flex justify-between px-20 pt-5 mb-32'>

                                <div className='flex flex-col items-center w-4/12'>
                                    <label htmlFor="" className="">
                                        <span className='font-semibold text-lg'>Observaciones</span>
                                    </label>
                                    <textarea
                                        className='bg-gray-100'
                                        name="observation"
                                        id="observation"
                                        cols="30"
                                        rows="3"
                                        value={inputValues.observation || ""}
                                        onChange={handleInputChange}
                                    ></textarea>
                                </div>

                                <div className='flex flex-col items-end w-4/12 '>
                                    <div className='w-full flex justify-around items-center'>
                                        <span className='w-6/12 font-semibold text-lg  text-right'>Subtotal</span>
                                        <span>${formatNumber(subtotal)}</span>
                                    </div>
                                    <div className='w-full flex justify-around items-center'>
                                        <span className='w-6/12 font-semibold text-lg  text-right'>Descuento</span>
                                        <span>-${formatNumber(descuento)}</span>
                                    </div>

                                    <div className='w-full flex justify-around items-center'>
                                        <span className='w-6/12 font-semibold text-lg  text-right'>Total Base</span>
                                        <span>${formatNumber(subtotal - descuento)}</span>
                                    </div>


                                    {
                                        Object.entries(impuesto).map(([tax, value], index) => (
                                            <div className='w-full flex justify-center' key={index}>
                                                <span className='w-6/12 font-semibold text-lg text-right'>
                                                    Impuesto({tax === 0 ? "Exento" : `${formatNumber(tax)}%`})
                                                </span>
                                                <span className='pl-16'>
                                                    {tax === 0 ? "Exento" : `$${formatNumber(value)}`}
                                                </span>
                                            </div>
                                        ))}





                                    <hr className='w-full my-4 border-gray-400' />
                                    <div className='w-full flex justify-around items-center'>
                                        <span className='w-6/12 font-semibold text-lg  text-right'>Total</span>
                                        <span>${formatNumber(total)}</span>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
                <ModalCreateItem showCrearItem={showItem} setShowCrearItem={setShowItem} />
                <ModalCreateTax showCrearTax={showTax} setShowCrearTax={setShowTax} />
                <ModalCreateTercero showCrearCliente={showCrearCliente} setShowCrearCliente={setShowCrearCliente} />
            </div>
            <div className="w-full flex justify-end px-16">
                <button
                    type="button"
                    className="sm:inline-flex items-center justify-center  h-14 text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-xs px-5 py-1.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 shadow-xl"
                    onClick={handleGuardarFacturaCabecera}
                >
                    Guardar Factura
                </button>
            </div>

        </main>

    )
}

export default AddInvoix