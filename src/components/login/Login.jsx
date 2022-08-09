import React from 'react'
import {useNavigate} from 'react-router-dom'
import IMGX from '../../assets/img/login_genomax.png'
import { FaChevronRight} from "react-icons/fa";
import {useDataBase} from '../../context/bdContext'








const Login = (props) => {
   
  const {login} = useDataBase()
  const navigate = useNavigate()
  

  const handleSubmit =  async (e) => {
    e.preventDefault();
    /*Crear Validaciones*/
    const email = e.target.email.value
    const password = e.target.password.value

    try {
      await login(email, password);
      navigate('/')
    } catch (error) {}
  }
    return (
      <div className='w-3/5 h-full flex flex-col justify-center items-center'>
          <div className='relative -top-4'>
            <img src={IMGX} alt="img_genomax"  className='w-24'/>
          </div>
          <div className='relative -top-2 -left-24'>
            <h1 className='font-bold text-xl text-gray-600'>Iniciar sesión</h1>
            <hr className='border-solid  border-2 border-gray-600 mt-2 w-8'></hr>
          </div>
          <form onSubmit={handleSubmit} className='w-full grid place-content-center'>
            <div className='flex flex-col mb-4 '>
              <label htmlFor="email" className='font-semibold pb-2'>Usuario</label>
              <input 
                type="email" 
                name="email" 
                id="email"
                placeholder="Correo" 
                className='w-80 h-10 pl-4 shadow-lg focus:outline-none focus:ring focus:ring-blue-500 rounded' 
              />
            </div>
            <div className='flex flex-col mb-4'>
              <label htmlFor="password" className='font-semibold pb-2'>Contraseña</label>
              <input 
                type="password" 
                name="Password" 
                id="password" 
                placeholder="Contraseña"  
                className='w-80 h-10 pl-4 shadow-lg focus:outline-none focus:ring focus:ring-blue-500 rounded' 
              />
            </div>
            <button className="w-80 h-10 bg-green-600 text-white hover:bg-green-500 rounded mb-4">Iniciar Sesion</button>
          </form>
          <div className=" w-full flex justify-evenly divide-x">
              <button onClick={props.estado}  className="w-6/12 text-center flex justify-center items-center pl-40"><FaChevronRight className="pr-2"/>Registrarse</button>
              <button onClick={props.handleActive} className="w-6/12 text-center flex justify-start pl-5 ">¿No puedes Iniciar?</button>
          </div>
      </div>   
    )
}

export default Login


