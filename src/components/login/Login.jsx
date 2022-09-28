import React from 'react'
import {useNavigate} from 'react-router-dom'
import IMGX from '../../assets/img/logo-nexus-it.png'
import { FaChevronRight} from "react-icons/fa";
import {useDataBase} from '../../context/bdContext'
import md5 from 'md5';
import './StyleInvoix.css'


const Login = (props) => {
 
  const {login} = useDataBase()
  const navigate = useNavigate()
  

  const handleSubmit =  async (e) => {
    e.preventDefault();
    /*Crear Validaciones*/
    let pass = e.target.password.value
    const email = e.target.email.value
    const password = md5(pass)

    try {
      await login(email, password);
      navigate('/')
    } catch (error) {}
  }
    return (
      <div className='w-full md:w-3/5 h-full flex flex-col justify-center items-center'>
          <div className='relative -top-1'>
            <img src={IMGX} alt="img_genomax"  className='w-20'/>
          </div>
          <div className='relative top-2 -left-16 sm:-left-24'>
            <h1 className='font-bold text-xl text-gray-600'>Iniciar sesión</h1>
            <hr className='border-solid  border-2 border-gray-600 mt-2 w-8'></hr>
          </div>
          <form onSubmit={handleSubmit} className=' pb-1 pt-6 lg:pb-3 grid place-content-center'>
            <div className='flex flex-col mb-4 '>
              <label htmlFor="email" className='font-semibold pb-2'>Usuario</label>
              <input 
                type="text" 
                name="email" 
                id="email"
                placeholder="Correo" 
                className='w-64 sm:w-80 h-10 pl-4 shadow-lg focus:outline-none focus:ring focus:ring-blue-500 rounded' 
              />
            </div>
            <div className='flex flex-col mb-4'>
              <label htmlFor="password" className='font-semibold pb-2'>Contraseña</label>
              <input 
                type="password" 
                name="Password" 
                id="password" 
                placeholder="Contraseña"  
                className='sm:w-80 h-10 pl-4 shadow-lg focus:outline-none focus:ring focus:ring-blue-500 rounded' 
              />
            </div>
            <button id='iniciar-sesion' className="sm:w-80 h-10 text-white rounded mb-4">Iniciar Sesion</button>
          </form>
          <div className="w-full lg:flex lg:justify-evenly lg:divide-x">
              <button onClick={props.estado}  className=" w-full lg:w-6/12 text-center flex justify-center items-center lg:pl-40"><FaChevronRight className="pr-2"/>Registrarse</button>
              <button onClick={props.handleActive} className=" w-full lg:w-6/12 text-center flex justify-center lg:justify-start pl-5">¿No puedes Iniciar?</button>
          </div>
      </div>   
    )
}

export default Login


