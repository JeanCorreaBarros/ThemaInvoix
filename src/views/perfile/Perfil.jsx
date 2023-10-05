import React, { useState, useEffect } from 'react'
import Swal from 'sweetalert2'

const Perfil = () => {

    /*** Cambio de Contraseña */
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [message, setMessage] = useState('');
    const showMessage = (text) => {
        setMessage(text);
        setTimeout(() => {
            setMessage('');
        }, 5000);
    };

    const handleChangePassword = () => {
        // Validar que la nueva contraseña coincida con la repetición
        const token = sessionStorage.getItem('token'); // Obtener el token de sessionStorage
        if (oldPassword === '') {
            setMessage('Por favor, ingresa la contraseña antigua.');
            return;
        }
        if (newPassword !== repeatPassword) {
            setMessage('La nueva contraseña no coincide con la repetición.');
            return;
        }


        // Crear el objeto FormData y agregar los campos
        const formData = new FormData();
        formData.append('current_password', oldPassword);
        formData.append('new_password', newPassword);
        formData.append('new_password_confirmation', repeatPassword);

        // Realizar la solicitud POST al endpoint
        fetch('https://api.invoix.co/v1/change-password', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`,
            },
            body: formData,
        })
            .then(response => {
                if (response.status >= 200 && response.status < 300) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Contraseña actualizada correctamente',
                        text: '',
                    });
                    // Restablecer los valores de los campos de entrada
                    setOldPassword('');
                    setNewPassword('');
                    setRepeatPassword('');
                    return response.text();
                } else if (response.status >= 400 && response.status < 500) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error del cliente',
                        text: 'Por favor, inténtalo de nuevo.',
                    });
                    throw new Error('Error del cliente');
                } else if (response.status >= 500) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error del servidor',
                        text: 'Por favor, inténtalo de nuevo más tarde.',
                    });
                    throw new Error('Error del servidor');
                } else {
                    throw new Error('Error desconocido');
                }
            })
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                showMessage('Error en la solicitud. Por favor, inténtalo de nuevo.');
                Swal.fire({
                    icon: 'error',
                    title: 'Error en la solicitud',
                    text: 'Por favor, inténtalo de nuevo.',
                });
                console.error(error);
            });

    };

    /** Cambio de img de perfil */
    const [profileImage, setProfileImage] = useState(localStorage.getItem('profileImage') || '');
    const handleChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = (e) => {
            const imageData = e.target.result;
            setProfileImage(imageData);
            localStorage.setItem('profileImage', imageData);
        };

        reader.readAsDataURL(file);
    };

    useEffect(() => {
        const storedProfileImage = localStorage.getItem('profileImage');
        if (storedProfileImage) {
            setProfileImage(storedProfileImage);
        }
    }, []);

    /** notificacion de modulo de prueba */
    useEffect(() => {
        Swal.fire({
            icon: 'error',
            title:  'Ya casi esta listo!',
            text: 'Solo esta habilitado  la opcion cambio de contraseña.',

          })
    }, []);

    return (
        <div id="updateProductModal" tabindex="-1" aria-hidden="true" class="overflow-y-auto w-12/12 overflow-x-hidden s justify-center items-center w-full md:inset-0 h-modal md:h-full">
            <div class=" flex relative p-4 w-12/12  h-full md:h-auto gap-5">

                <div class="w-4/12 relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">

                    <div class="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                            Perfil
                        </h3>
                    </div>

                    <form action="#">
                        <div className="grid gap-4">
                            <div className="w-40 h-40 mx-auto">
                                {profileImage ? (
                                    <img src={profileImage} alt="Profile" className="w-full h-full rounded-full object-cover" />
                                ) : (
                                    <div className="w-full h-full bg-gray-200 rounded-full"></div>
                                )}
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <label htmlFor="profileImage" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Imagen de Perfil
                                </label>
                                <input type="file" id="profileImage" onChange={handleChange} accept="image/*" className="hidden" />
                                <button
                                    className="bg-gray-200 hover:bg-gray-300 text-gray-900 font-medium px-4 py-2 rounded-lg"
                                    onClick={() => {
                                        document.getElementById('profileImage').click();
                                    }}
                                >
                                    Cambiar Imagen
                                </button>
                            </div>
                        </div>
                    </form>
                </div>

                <div class="w-8/12 relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                    <form action="#">
                        <div class="grid gap-4 mb-4 sm:grid-cols-1">
                            <div>
                                <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre Completo</label>
                                <input type="text" name="name" id="name" value="jhon Doe" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />
                            </div>
                            <div>
                                <label for="brand" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Correo electronico de contacto</label>
                                <input type="text" name="brand" id="brand" value="info@invoix.com" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />
                            </div>
                            <div>
                                <label for="brand" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Rol</label>
                                <input type="text" name="brand" id="brand" value="Admin" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />
                            </div>
                        </div>
                        <div class="flex items-center space-x-4">
                            <button type="button" class=" inline-flex items-center  border focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center border-blue-500 text-blue-500 hover:text-white hover:bg-blue-600 focus:ring-blue-900">
                                <span class="material-symbols-outlined pr-3">
                                    save
                                </span>
                                Actualizar Datos
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div class=" flex relative p-4 w-12/12  h-full md:h-auto gap-5">
                <div class="w-4/12  relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                    <div class="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                            Cambio de Contraseña
                        </h3>
                    </div>
                    <form action="#">
                        <div class="grid gap-4 mb-4 sm:grid-cols-1">
                            <div>
                                <label htmlFor="oldPassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Contraseña Antigua
                                </label>
                                <input
                                    placeholder="****************"
                                    type="password"
                                    name="oldPassword"
                                    id="oldPassword"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    value={oldPassword}
                                    onChange={(e) => setOldPassword(e.target.value)}
                                />
                            </div>
                            <div>
                                <label htmlFor="newPassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Contraseña Nueva
                                </label>
                                <input
                                    placeholder="****************"
                                    type="password"
                                    name="newPassword"
                                    id="newPassword"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                />
                            </div>
                            <div>
                                <label htmlFor="repeatPassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Repetir Contraseña Nueva
                                </label>
                                <input
                                    placeholder="****************"
                                    type="password"
                                    name="repeatPassword"
                                    id="repeatPassword"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    value={repeatPassword}
                                    onChange={(e) => setRepeatPassword(e.target.value)}
                                />
                            </div>

                        </div>
                        <div className="flex items-center space-x-4">
                            <button
                                type="button"
                                className="inline-flex items-center border focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center border-blue-500 text-blue-500 hover:text-white hover:bg-blue-600 focus:ring-blue-900"
                                onClick={handleChangePassword}
                                disabled={!oldPassword || !newPassword || !repeatPassword}
                            >
                                <span className="material-symbols-outlined pr-3">save</span>
                                Actualizar Contraseña
                            </button>
                        </div>
                        {message && (
                            <p className='text-white text-xs flex justify-center pt-5'>{message}</p>
                        )}
                    </form>
                </div>
                <div class="w-8/12  relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                    <div class="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                            Informacion del plan
                        </h3>
                    </div>
                    <form action="#">
                        <div className="grid gap-4">
                            <div>
                                <label htmlFor="currentPlan" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Plan Actual
                                </label>
                                <input
                                    type="text"
                                    id="currentPlan"
                                    value={"Essentials"}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="planDescription" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Descripción del Plan
                                </label>
                                <textarea
                                    id="planDescription"
                                    rows="5"
                                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Escribe una descripción..."
                                ></textarea>
                            </div>
                        </div>
                        <div className="flex items-center mt-5 space-x-4">
                            <button
                                type="button"
                                className="inline-flex items-center border focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center border-blue-500 text-blue-500 hover:text-white hover:bg-blue-600 focus:ring-blue-900"

                            >
                                <span class="material-symbols-outlined pr-3">
                                    save
                                </span>
                                Actualizar Plan
                            </button>
                        </div>
                    </form>
                </div>
            </div>



        </div>
    )
}

export default Perfil