import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import Swal from 'sweetalert2'



const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  

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
      const response = await fetch("https://api.invoix.co/v1/login", requestOptions);
      const result = await response.json();

  
      if (response.status === 200 && result.token) {
           
        sessionStorage.setItem("token", result.token);
        sessionStorage.setItem("email", result[0].email);
        sessionStorage.setItem("name", result[0].name);
        sessionStorage.setItem("comercialname", result.Company.comercialname);
        sessionStorage.setItem("IdNumber", result.Company.identification_number);
        console.log(result)
        Swal.fire('Éxito', 'Ingreso con Exito', 'success');
        navigate("/");
      } else if (response.status === 400 || response.status === 401) {
        Swal.fire('Érror', 'Invalid credentials', 'error');
        console.log("Error: Invalid credentials");
      } else if (response.status === 500) {
        Swal.fire('Érror', 'Error: Server error', 'error');
        console.log("Error: Server error");
      }
    } catch (error) {
      console.log('Error: ', error);
    }
  };


  return (
    <>
      <section class=" h-screen md:h-full bg-gray-900 ">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a href="#" class="flex items-center mb-6  font-semibold text-white text-5xl">
            <img class="w-16 h-16 mr-2" src="https://i.ibb.co/6v80KFy/logo-nexus-it.png" alt="logo" />
            <a href="/" class="self-center text-[45px] font-semibold whitespace-nowrap text-white"> <span className="text-green-500 font-bold ">IN</span>VOIX</a>
          </a>
          <div class="w-full  rounded-lg md:shadow md:border md:mt-0 sm:max-w-md xl:p-0 md:bg-gray-800 md:border-gray-700">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold text-center leading-tight tracking-tight text-gray-50 md:text-2xl md:text-gray-50 ">
                Ingresa a tu cuenta
              </h1>
              <div class="flex items-center space-x-4">
                <hr class="w-full border border-gray-300" />
                <div class="font-semibold text-gray-400">OR</div>
                <hr class="w-full border border-gray-300" />
              </div>
              <form class="space-y-4 md:space-y-6" action="#" onSubmit={handleSubmit}>
                <div>
                  <label for="email" class="block mb-2 text-sm font-medium text-gray-50 md:text-gray-50 ">Usuario</label>
                  <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" class=" border   sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="name@invoix.com" required="" />
                </div>
                <div>
                  <label for="password" class="block mb-2 text-sm font-medium text-gray-50 md:text-gray-50 ">Contraseña</label>
                  <input type="password" onChange={(e) => setPassword(e.target.value)} name="password" id="password" placeholder="••••••••" class=" border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" required="" />
                </div>
                <div class="flex items-center justify-between">
                  <div class="flex items-start">
                    <div class="flex items-center h-5">
                      <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border  rounded  focus:ring-3 focus:ring-primary-300 bg-gray-700 border-gray-600 focus:ring-primary-600 ring-offset-gray-800" required="" />
                    </div>
                    <div class="ml-3 text-sm">
                      <label for="remember" class="text-green-200 md:text-green-600 ">Recordarme</label>
                    </div>
                  </div>
                  <a href="#" class="text-sm font-medium text-green-600 hover:underline text-primary-500">¿Has olvidado tu contraseña?</a>
                </div>
                <button type="submit" class="w-full text-white bg-green-600  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center  hover:bg-green-700 focus:ring-green-800">Iniciar Sesion</button>
                <p class="text-sm font-light  text-gray-400">
                  ¿Aún no tienes una cuenta? <a href="/register" class="font-medium hover:underline text-green-500">Registrarte</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
