import React from 'react'
import { Link } from 'react-router-dom'
import SRC from '../../assets/videos/video-login.mp4'
import IMGX from '../../assets/img/login_genomax.png'


const Register = () => {
    return (
      <div className="grid place-items-center bg-gray-200 h-screen shadow-xl">
        <div className=' flex border-solid border-2 bg-gray-50 rounded-3xl w-4/5 h-5/6'>
            <div className='w-3/5 h-full flex flex-col justify-center items-center'>
              <div className='relative -top-10'>
                <img src={IMGX} alt="img_genomax"  className='w-24'/>
              </div>
              <div className='relative -top-2 -left-24'>
                <h1 className='font-bold text-xl text-gray-600'>Registrarme</h1>
                <hr className='border-solid  border-2 border-gray-600 mt-2 w-8'></hr>
              </div>
              <form action="#" className='w-full grid place-content-center'>
                <div className='flex flex-col mb-4 '>
                  <label htmlFor="login_usuario" className='font-semibold pb-2'>Usuario</label>
                  <input type="text" placeholder="Ingrese su Usuario" className='w-80 h-10 pl-4 shadow-lg focus:outline-none focus:ring focus:ring-blue-500 rounded' />
                </div>
                <div className='flex flex-col mb-4'>
                  <label htmlFor="login_usuario" className='font-semibold pb-2'>Contraseña</label>
                  <input type="password" placeholder="Ingrese su Contraseña" className='w-80 h-10 pl-4 shadow-lg focus:outline-none focus:ring focus:ring-blue-500 rounded' />
                </div>
                <div className='w-80 mb-4'>
                    <p className='text-sm text-center'>Al hacer clic en Registrarse, indicas que has leído y aceptas los <Link to="http://" className='text-blue-700'>Términos y condiciones</Link></p>
                </div>
                <button type="submit" className="w-80 h-10 bg-blue-500 text-white hover:bg-blue-600 rounded mb-4">Registrarme</button>
                <div className="grid grid-cols-1 ">
                  <h3 className="text-center"><Link to="/">Iniciar Sesion</Link></h3>
                </div>
              </form>
            </div>
            <div className='w-2/5 h-full '>
                <video
                  className='rounded-r-3xl object-cover min-w-full min-h-full' 
                  controls={false}
                  autoPlay={true}
                  loop={true}
                  muted={true}>
                  <source src={SRC} type="video/mp4" />
                </video>
            </div> 
        </div>
      </div>
    )
}

export default Register
