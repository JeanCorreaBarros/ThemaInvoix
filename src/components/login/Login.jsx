import React ,{useState} from 'react'
import { Link,  } from "react-router-dom";
import SRC from '../../assets/videos/video-login.mp4'
import IMGX from '../../assets/img/login_genomax.png'
import Dashboard from '../../pages/Dashboard';
import ModalPassword from '../modals/ModalPassword';






const Login = () => {

  const[username,setUsername]= useState("");
  const[password,setPassword]= useState("");
  const[modal,setModal]= useState(false);

  const data = {
    "usuario": "admin",
    "password":"admin"
  }

  const numero = parseInt(password, 10)

  const handleModal = ()=>{
    setModal(!modal)
    console.log(modal)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (username === data.usuario && numero === data.password ) {
      return window.alert("Ingresando a Dashboard") 
    }else{
      return window.alert("Porfavor Valida Bien Tus Datos")
    }
  }


    return (
      <>
      {
        username === data.usuario && password === data.password
        ? <Dashboard/> 
        : <div className="grid place-items-center bg-gray-200 h-screen shadow-xl">
            {modal ? <ModalPassword/>
                   :""
                  }
            <div className=' flex border-solid border-2 bg-gray-50 rounded-3xl w-4/5 h-5/6'>
                <div className='w-3/5 h-full flex flex-col justify-center items-center'>
                  <div className='relative -top-10'>
                    <img src={IMGX} alt="img_genomax"  className='w-24'/>
                  </div>
                  <div className='relative -top-2 -left-24'>
                    <h1 className='font-bold text-xl text-gray-600'>Iniciar sesión</h1>
                    <hr className='border-solid  border-2 border-gray-600 mt-2 w-8'></hr>
                  </div>
                  <form onSubmit={handleSubmit}  className='w-full grid place-content-center'>
                    <div className='flex flex-col mb-4 '>
                      <label htmlFor="login_usuario" className='font-semibold pb-2'>Usuario</label>
                      <input type="text" name="login_username" placeholder="Ingrese su Usuario"  onChange={(e)=> setUsername(e.target.value)} value={username} className='w-80 h-10 pl-4 shadow-lg focus:outline-none focus:ring focus:ring-blue-500 rounded' />
                    </div>
                    <div className='flex flex-col mb-4'>
                      <label htmlFor="login_password" className='font-semibold pb-2'>Contraseña</label>
                      <input type="password" name="login_password" placeholder="Ingrese su Contraseña" onChange={(e)=>setPassword(e.target.value)} value={password} className='w-80 h-10 pl-4 shadow-lg focus:outline-none focus:ring focus:ring-blue-500 rounded' />
                    </div>
                    <button className="w-80 h-10 bg-blue-500 text-white hover:bg-blue-600 rounded mb-4">Ingresar</button>
                  </form>
                  <div className="grid grid-cols-2 divide-x">
                      <button className="text-center"><Link to="/register">Registrarme</Link></button>
                      <button className="pl-1" onClick={handleModal}>Recuperar Contraseña</button>
                  </div>
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
      }
     
     
      </>
      
    )
}

export default Login
