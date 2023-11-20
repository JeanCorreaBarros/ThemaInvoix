import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repPassword, setRepPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // Estado para mostrar/ocultar la contraseña

  const [token, setToken] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== repPassword) {
      console.log("Error: Las contraseñas no coinciden");
      return;
    }

    var formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);

    var requestOptions = {
      method: 'POST',
      body: formData,
      redirect: 'follow'
    };

    try {
      const response = await fetch("https://api-dev.gratisfactura.es/consume/register-user.php/", requestOptions);
      const result = await response.json();

      console.log(result);

      if (response.status === 200) {
        // Registro exitoso
        navigate("/auth"); // Redireccionar a "/login"
      } else if (response.status === 400 || response.status === 401) {
        console.log("Error: Invalid credentials");
      } else if (response.status === 500) {
        console.log("Error: Server error");
      }
    } catch (error) {
      console.log('Error Invoix: ', error);
    }
  };





  return (
    <>
      <section className="flex flex-col md:flex-row h-screen items-center">
        <div className="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
          <img src="https://source.unsplash.com/featured/?office" alt="" className="w-full h-full object-cover" />
        </div>

        <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center">
          <div className="w-full h-100">
            <span className="flex items-center mb-6 font-semibold text-white text-5xl">
              <img className="w-20 h-16 mr-2" src="https://i.ibb.co/b1WTgJn/logoGF.png" alt="logoGF" />
              <span className="self-center text-[45px] mt-4 pl-2 drop-shadow-lg font-semibold whitespace-nowrap text-blue-400">Gratis Factura</span>
            </span>

            <form className="mt-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-gray-700">Nombre</label>
                <input
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  name="name"
                  placeholder="Nombre de la cuenta"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 pt-2">Email</label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  name="email"
                  placeholder="name@invoix.com"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 pt-2">Contraseña</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    onChange={(e) => setPassword(e.target.value)}
                    name="password"
                    placeholder="••••••••"
                    className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none pr-10" // Añadido `pr-10` para dejar espacio para el ícono
                    required
                  />
                  <span
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                  >
                    {showPassword ? (
                      <span class="material-symbols-outlined">
                        visibility
                      </span>
                    ) : (
                      <span class="material-symbols-outlined">
                        visibility_off
                      </span>
                    )}
                  </span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full block bg-blue-600 hover:bg-blue-700 focus:bg-blue-800 text-white font-semibold rounded-lg px-4 py-3 mt-6"
              >
                Crear Cuenta
              </button>
            </form>

            <hr className="my-6 border-gray-300 w-full" />

            <p className="mt-8">
              ¿Ya tienes una cuenta? <a href="/auth" className="text-blue-500 hover:text-blue-700 font-semibold hover:underline">Iniciar Sesión</a>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Register