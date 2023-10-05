import React,{useState} from 'react'

export const ModalCreateTax = ({ showCrearTax, setShowCrearTax }) => {

    const handleShow = () => {
        setShowCrearTax(!showCrearTax)
    };

    const [inputValues, setInputValues] = useState({
        nameTax: '',
        typeTax: '',
        percentage: '',
        description: '',
    });

    console.log(inputValues)

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInputValues((prevInputValues) => ({
            ...prevInputValues,
            [name]: value
        }));
    };

    const handleCrearTax = () => {
        const formData = new FormData();
        formData.append('nameTax', inputValues.nameTax);
        formData.append('typeTax', inputValues.typeTax);
        formData.append('percentage', inputValues.percentage);
        formData.append('description', inputValues.description);

        fetch('URL_DE_LA_API', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                // Manejar la respuesta de la API
                console.log(data);
            })
            .catch(error => {
                // Manejar errores
                console.error(error);
            });
    };

    return (
        <>
            <div id="defaultModal" tabindex="-1" aria-hidden="true" class={`${showCrearTax ? "" : "hidden"} flex ml-32 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full`}>
                <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">

                    <div class="relative w-10/12 p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5 ">

                        <div class="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                                Nuevo Impuesto
                            </h3>
                            <button type="button" onClick={handleShow} class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
                                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                <span class="sr-only">Close modal</span>
                            </button>
                        </div>

                        <form action="#">
                            <div class="grid gap-4 mb-4 sm:grid-cols-1">
                                <div>
                                    <label for="nameTax" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre</label>
                                    <input
                                        type="text"
                                        name="nameTax"
                                        id="nameTax"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        required=""
                                        value={inputValues.nameTax || ""}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className='flex'>
                                    <div className='w-6/12'>
                                        <div className='flex justify-between px-2'>
                                            <label for="typeTax" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tipo de Impuesto</label>
                                        </div>
                                        <select
                                        name="typeTax"
                                            id="typeTax"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                            onChange={handleInputChange}
                                        >
                                            <option selected="iva">IVA</option>
                                            <option selected="ico">ICO</option>
                                            <option selected="otro">OTRO</option>
                                        </select>
                                    </div>
                                    <div className='w-6/12'>
                                        <label for="percentage" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Porcentaje</label>
                                        <input
                                            type="number"
                                            name="percentage"
                                            id="percentage"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                            required=""
                                            value={inputValues.percentage || ""}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Descripcion</label>
                                    <textarea
                                        type="number"
                                        name="description"
                                        id="description"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="Descripcion de Impuesto..."
                                        required=""
                                        value={inputValues.description || ""}
                                        onChange={handleInputChange}
                                    />
                                </div>

                            </div>
                            <button onClick={handleCrearTax} type="submit" class="my-10 text-white inline-flex items-center bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">
                                <svg class="mr-1 -ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                                Crear Impuesto
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
