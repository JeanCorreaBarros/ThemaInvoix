import React from 'react'
import IMGX from '../../assets/img/login_genomax.png'
import {getAuth} from '../../../node_modules/firebase/auth';
import {signInWithEmailAndPassword} from '../../../node_modules/firebase/auth';
import {app } from '../../FirebaseConfig'



const Login = (props) => {

    const handleSubmit = (e)=>{
      e.preventDefault();
      const correo = e.target.loginCorreo.value;
      const password = e.target.loginPassword.value;
      const auth = getAuth(app)
      signInWithEmailAndPassword(auth, correo, password)
       .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        console.log(user);
        props.setUsuario(user)
      })
      

    }
    
    return (
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
              <label htmlFor="login_username" className='font-semibold pb-2'>Usuario</label>
              <input type="text" name="loginUsername" placeholder="Ingrese su Usuario" id="loginCorreo"  className='w-80 h-10 pl-4 shadow-lg focus:outline-none focus:ring focus:ring-blue-500 rounded' />
            </div>
            <div className='flex flex-col mb-4'>
              <label htmlFor="login_password" className='font-semibold pb-2'>Contraseña</label>
              <input type="password" name="loginPassword" placeholder="Ingrese su Contraseña" id="loginPassword"  className='w-80 h-10 pl-4 shadow-lg focus:outline-none focus:ring focus:ring-blue-500 rounded' />
            </div>
            <button className="w-80 h-10 bg-blue-500 text-white hover:bg-blue-600 rounded mb-4">Ingresar</button>
          </form>
          <div className="grid grid-cols-2 divide-x">
              <button onClick={props.estado}  className="text-center">Registrarme</button>
              <button className="pl-1" >Recuperar Contraseña</button>
          </div>
      </div>
       
    )
}

export default Login


