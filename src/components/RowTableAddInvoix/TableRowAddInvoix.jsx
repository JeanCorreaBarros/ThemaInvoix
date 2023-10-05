import React, { useState } from 'react';

const TableRowAddInvoix = ({ index, setItems, items, id,rowData,setRowData }) => {

    const [searchTerm, setSearchTerm] = useState('');
    const [searchTermTax, setSearchTermTax] = useState('');
    const [showResults, setShowResults] = useState(false);
    const [showResultsTax, setShowResultsTax] = useState(false);
    const [show, setShow] = useState(false);
    const [showTax, setShowTax] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [selectedItemTax, setSelectedItemTax] = useState(null);


    const [inputValues, setInputValues] = useState({
        item: '',
        referencia: '',
        precioUnitario: '',
        porcentaje: '',
        impuesto: '',
        descripcion: '',
        cant: '',
        total: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInputValues((prevInputValues) => ({
            ...prevInputValues,
            [name]: value
        }));
    };


    const handleItemClick = (selectedItem) => {
        handleSelectItem(selectedItem); // Llama a la función handleSelectItem con el valor seleccionado
        handleInputChange({ target: { name: 'item', value: selectedItem.name } }); // Llama a la función handleInputChange con el valor seleccionado
    };

    const handleTaxClick = (selectedItem) => {
        handleSelectItemTax(selectedItem); // Llama a la función handleSelectItem con el valor seleccionado
        handleInputChange({ target: { name: 'impuesto', value: selectedItem.name } }); // Llama a la función handleInputChange con el valor seleccionado
    };

    console.log(inputValues)



    const handleShow = () => {
        setShow(!show)
    };

    const handleShowTax = () => {
        setShowTax(!showTax)
    };


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

    const handleSearch = (e, index) => {
        const { value } = e.target;
        setSearchTerm(value);
        console.log(index)
        // Resto de la lógica de búsqueda y filtrado específica de la fila
    };

    /*Seleccionar Item en Input */
    const handleSelectItem = (item) => {
        setSearchTerm(item.name);
        setSelectedItem(item)
        setShowResults(false);
    };

    const handleSearchTax = (e) => {
        const { value } = e.target;
        setSearchTermTax(value);
        setShowResultsTax(true);
        // Resto de la lógica de búsqueda y filtrado de impuestos específica de la fila
    };

    /*Seleccionar Tax en Input */
    const handleSelectItemTax = (item) => {
        setSearchTermTax(item.name);
        setSelectedItemTax(item)
        setShowResultsTax(false);
    }

    /*Eliminar Row de Body*/
    /*Eliminar Row de Body*/


    const handleDelete = (index) => {
        const data = items.filter((_, i) => i !== index)
        console.log(items)
        console.log(data)
        setItems(data);
    }




    const filteredData = data.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const isTyping = searchTerm.length > 0;

    const filteredDataTax = dataTax.filter((item) =>
        item.name.toLowerCase().includes(searchTermTax.toLowerCase())
    );

    const isTypingTax = searchTermTax.length > 0;

    return (
        <tr key={index} class="bg-white border-b text-xs hover:shadow-xl hover:scale-110">
            <td className="px-3 py-4">
                <input
                    type="text"
                    className="w-10 hover:w-24 hover:bg-slate-100  focus:outline-none focus:ring focus:ring-green-300 rounded-sm"
                    name="item"
                    id="item"
                    value={searchTerm}
                    onChange={(e) => {
                        handleInputChange(e); // Llama a la función handleInputChange para capturar el valor del input
                        handleSearch(e, index); // Llama a la función handleSearch para realizar la búsqueda
                    }}
                    onFocus={() => setShowResults(true)}
                    placeholder="Buscar... Item"
                    tabIndex={index}
                />
                {showResults && (
                    <div className="bg-gray-200 relative z-50 shadow-xl rounded-b-md">
                        {filteredData.length > 0 && (
                            <div>
                                <ul>
                                    {filteredData.map((item) => (
                                        <li
                                            className="cursor-pointer"
                                            key={item.id}
                                            onClick={() => handleItemClick(item)}
                                        >
                                            {item.name}
                                        </li>
                                    ))}
                                </ul>
                                <button
                                    onClick={handleShow}
                                    className="underline text-green-500"
                                    href="#"
                                >
                                    Crear nuevo item
                                </button>
                            </div>
                        )}
                    </div>
                )}
            </td>

            <td class="px-3 py-4">
                <input type="text" name="referencia" id="referencia" value={inputValues.referencia} onChange={handleInputChange} className='w-10 hover:w-24 hover:bg-slate-100 focus:outline-none focus:ring focus:ring-green-300 rounded-sm' placeholder='Referencia' />
            </td>
            <td class="px-3 py-4">
                <input type="text" name="precioUnitario" id="precioUnitario" value={inputValues.precioUnitario} onChange={handleInputChange} className='w-10 hover:w-24 hover:bg-slate-100 focus:outline-none focus:ring focus:ring-green-300 rounded-sm' placeholder='Precio unitario' />
            </td>
            <td class="px-3 py-4">
                <input type="number" name="porcentaje" id="porcentaje" value={inputValues.porcentaje} onChange={handleInputChange} className='w-10 hover:w-24 hover:bg-slate-100 focus:outline-none focus:ring focus:ring-green-300 rounded-sm' placeholder='%' />
            </td>
            <td className="px-3 py-4">
                <input
                    type="text"
                    className="w-10 hover:w-24 hover:bg-slate-100  focus:outline-none focus:ring focus:ring-green-300 rounded-sm"
                    value={searchTermTax}
                    onChange={handleSearchTax}
                    onFocus={() => setShowResultsTax(true)}
                    placeholder="Buscar... Item"
                    tabIndex="0"
                />
                {showResultsTax && (
                    <div className="bg-gray-200 relative z-50 shadow-xl rounded-b-md">
                        {filteredDataTax.length > 0 && (
                            <div>
                                <ul>
                                    {filteredDataTax.map((item) => (
                                        <li
                                            className="cursor-pointer"
                                            key={item.id}
                                            onClick={() => handleTaxClick(item)}
                                        >
                                            {item.name}
                                        </li>
                                    ))}
                                </ul>
                                <button
                                    onClick={handleShowTax}
                                    className="underline text-green-500"
                                    href="#"
                                >
                                    Crear nuevo Impuesto
                                </button>
                            </div>
                        )}
                    </div>
                )}
            </td>
            <td class="px-3 py-4">
                <textarea name="descripcion" id="descripcion" value={inputValues.descripcion} onChange={handleInputChange} type="text" className='w-10 hover:w-32 hover:bg-slate-100 focus:outline-none focus:ring focus:ring-green-300 rounded-sm h-5' placeholder='Descripcion' />
            </td>
            <td class="px-3 py-4">
                <input name="cant" id="cant" value={inputValues.cant} onChange={handleInputChange} type="text" className='w-10 hover:w-24 hover:bg-slate-100 focus:outline-none focus:ring focus:ring-green-300 rounded-sm' placeholder='Cant' />
            </td>
            <td class="px-3 py-4">
                <input name="total" id="total" value={inputValues.total} onChange={handleInputChange} type="text" className='w-10 hover:w-24 hover:bg-slate-100 focus:outline-none focus:ring focus:ring-green-300 rounded-sm' disabled placeholder='0.00' />
            </td>
            <td class="px-3 py-4">
                <button class="font-medium text-red-600 hover:underline" onClick={() => handleDelete(index)} title="Eliminar fila"><span class="material-symbols-outlined">delete</span></button>
            </td>
        </tr>
    );
};



export default TableRowAddInvoix