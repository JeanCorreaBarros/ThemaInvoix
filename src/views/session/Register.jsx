import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repPassword, setRepPassword] = useState("");

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
    formData.append("password_confirmation", repPassword);

    var requestOptions = {
      method: 'POST',
      body: formData,
      redirect: 'follow'
    };

    try {
      const response = await fetch("https://api.invoix.co/v1/register", requestOptions);
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
      <section class=" h-full md:h-screen bg-gray-900 ">
        <div class="flex flex-col items-center pt-16 justify-center px-6 py-8 mx-auto md:h-full lg:py-0">
          <span href="#" class="flex items-center mb-6  md:pt-16  font-semibold  text-white text-5xl">
            <img class="w-16 h-16 mr-2" src="https://i.ibb.co/6v80KFy/logo-nexus-it.png" alt="logo" />
            <span href="/" class="self-center text-[45px] font-semibold whitespace-nowrap text-white"> <span className="text-green-500 font-bold ">IN</span>VOIX</span>
          </span>
          <div class="w-full mb-16 rounded-lg md:shadow md:border md:mt-0 sm:max-w-md xl:p-0 md:bg-gray-800 md:border-gray-700">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight text-center tracking-tight text-gray-50 md:text-2xl md:text-gray-50 ">
                Create una Cuenta
              </h1>
              <div class="flex justify-center gap-3 text-center items-center ml-14 h-8 w-4/6 border-2 rounded-md border-white">
                <div class="w-5 h-5"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" class="LgbsSe-Bz112c"><g><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path><path fill="none" d="M0 0h48v48H0z"></path></g></svg></div>
                <a href="#" class="text-white text-xs md:text-sm" >Registrarse con Google</a>
              </div>
              <div class="flex items-center space-x-4">
                <hr class="w-full border border-gray-300" />
                <div class="font-semibold text-gray-400">OR</div>
                <hr class="w-full border border-gray-300" />
              </div>
              <form class="space-y-4 md:space-y-6" action="#" onSubmit={handleSubmit}>
                <div>
                  <label for="name" class="block mb-2 text-sm font-medium text-gray-50 md:text-gray-50 ">Nombre</label>
                  <input onChange={(e) => setName(e.target.value)} type="text" name="name" id="name" class="border  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Nombre de la cuenta" required="" />
                </div>
                <div>
                  <label for="email" class="block mb-2 text-sm font-medium text-gray-50 md:text-gray-50 ">Email</label>
                  <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" class="border  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="name@invoix.com" required="" />
                </div>
                <div className="flex justify-around gap-3">
                  <div>
                    <label for="password" class="block mb-2 text-sm font-medium text-gray-50 md:text-gray-50 ">Contraseña</label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} name="password" id="password" placeholder="••••••••" class=" border  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" required="" />
                  </div>
                  <div>
                    <label for="Reppassword" class="block mb-2 text-sm font-medium text-gray-50 md:text-gray-50 ">Repetir Contraseña</label>
                    <input type="password" onChange={(e) => setRepPassword(e.target.value)} name="Reppassword" id="Reppassword" placeholder="••••••••" class=" border  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" required="" />
                  </div>
                </div>
                <button type="submit" class="w-full text-white  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-green-600 hover:bg-green-700 focus:ring-green-800">Crear Cuenta</button>
                <p class="text-sm font-light  text-gray-400">
                  ¿Ya tienes una cuenta? <a href="/auth" class="font-medium  hover:underline text-green-500">Iniciar Session</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Register