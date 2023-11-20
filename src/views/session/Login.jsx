import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import Swal from 'sweetalert2'



const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // Estado para mostrar/ocultar la contraseña


  const handleGoogleLogin = () => {
    const googleLoginUrl = 'https://accounts.google.com/o/oauth2/v2/auth';
    const clientId = '1014952640043-r1e9kckavm5lg9ocmjrisnsjb1o29pnk.apps.googleusercontent.com';
    const redirectUri = 'http://localhost:5173/'; // URL de redirección después de la autenticación

    const queryParams = new URLSearchParams({
      client_id: clientId,
      redirect_uri: redirectUri,
      response_type: 'token',
      scope: 'email profile',
    });

    const authUrl = `${googleLoginUrl}?${queryParams.toString()}`;
    window.location.href = authUrl;
  };





  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    var formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    var requestOptions = {
      method: 'POST',
      body: formData,
      redirect: 'follow'
    };

    try {
      const response = await fetch("https://api-dev.gratisfactura.es/consume/login.php/", requestOptions);
      const result = await response.json();

      if (response.status === 200 && result.token) {
        sessionStorage.setItem("token", result.token);
        sessionStorage.setItem("email", result[0].email);
        sessionStorage.setItem("name", result[0].name);
        sessionStorage.setItem("comercialname", result.Company.comercialname);
        sessionStorage.setItem("IdNumber", result.Company.identification_number);
        console.log(result)
        Swal.fire('Éxito', 'Ingreso con Éxito', 'success');
        navigate("/");
      } else if (response.status === 400 || response.status === 401) {
        Swal.fire('Error', 'Credenciales inválidas', 'error');
        console.log("Error: Credenciales inválidas");
      } else if (response.status === 500) {
        Swal.fire('Error', 'Error del servidor', 'error');
        console.log("Error: Error del servidor");
      } else if (result.message === "No hay datos" && result.code === "1") {
        // Mostrar SweetAlert cuando no hay datos
        Swal.fire('Advertencia', 'Parece que las credenciales no son las correctas', 'warning');
        console.log("Advertencia: No hay datos disponibles");
      }
    } catch (error) {
      console.log('Error: ', error);
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
            <span href="#" class="flex items-center mb-6  font-semibold text-white text-5xl">
              <img class="w-20 h-16 mr-2 " src="https://i.ibb.co/b1WTgJn/logoGF.png" alt="logoGF" />
              <span class="self-center text-[45px] mt-4 pl-2 drop-shadow-lg font-semibold whitespace-nowrap text-blue-400"> Gratis Factura</span>
            </span>

            <form className="mt-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-gray-700">Usuario</label>
                <input
                  type="email"
                  name="email"
                  placeholder="name@gratisfactura.com"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="mt-4 relative">
                <label className="block text-gray-700">Contraseña</label>
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


              <div className="text-right mt-2">
                <a href="#" className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700 hover:underline">¿Olvidaste tu contraseña?</a>
              </div>

              <button
                type="submit"
                className="w-full block bg-blue-600 hover:bg-blue-700 focus:bg-blue-800 text-white font-semibold rounded-lg px-4 py-3 mt-6"
              >
                Iniciar Sesión
              </button>
            </form>

            <hr className="my-6 border-gray-300 w-full" />

            <p className="mt-8">¿No tienes una cuenta? <a href="/register" className="text-blue-500 hover:text-blue-700 font-semibold hover:underline">Registrarte</a></p>

          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
