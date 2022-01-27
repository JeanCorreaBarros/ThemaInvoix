import React from 'react'
import { Link } from 'react-router-dom'
import IMGX from '../../assets/img/login_genomax.png'
import {getAuth} from '../../../node_modules/firebase/auth';
import {createUserWithEmailAndPassword} from '../../../node_modules/firebase/auth';
import {app } from '../../FirebaseConfig'


const Register = (props) => {

  const handleSubmit = (e)=>{
    e.preventDefault();
    const correo = e.target.registerCorreo.value;
    const password = e.target.registerPassword.value;
    console.log(correo, password);
    const auth = getAuth(app)
    createUserWithEmailAndPassword(auth, correo, password)
       .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        console.log(user);
        props.setUsuario(user.email)
        
    })
    .catch((error) => {

    const errorMessage = error.message;
    console.log(errorMessage);
    // ..
  });
    
  }
    return (
      <div className='w-3/5 h-full flex flex-col justify-center items-center'>
        <div className='relative -top-10'>
          <img src={IMGX} alt="img_genomax"  className='w-24'/>
        </div>
        <div className='relative -top-2 -left-24'>
          <h1 className='font-bold text-xl text-gray-600'>Registrarme</h1>
          <hr className='border-solid  border-2 border-gray-600 mt-2 w-8'></hr>
        </div>
        <form onSubmit={handleSubmit} className='w-full grid place-content-center'>
          <div className='flex flex-col mb-4 '>
            <label htmlFor="register_username" className='font-semibold pb-2'>Usuario</label>
            <input type="text"  name="register_username" id="registerCorreo" placeholder="Ingrese su Usuario" className='w-80 h-10 pl-4 shadow-lg focus:outline-none focus:ring focus:ring-blue-500 rounded' />
          </div>
          <div className='flex flex-col mb-4'>
            <label htmlFor="register_password" className='font-semibold pb-2'>Contraseña</label>
            <input type="password"name="register_password" id="registerPassword" placeholder="Ingrese su Contraseña" className='w-80 h-10 pl-4 shadow-lg focus:outline-none focus:ring focus:ring-blue-500 rounded' />
          </div>
          <div className='w-80 mb-4'>
              <p className='text-sm text-center'>Al hacer clic en Registrarse, indicas que has leído y aceptas los <Link to="http://" className='text-blue-700'>Términos y condiciones</Link></p>
          </div>
          <button className="w-80 h-10 bg-blue-500 text-white hover:bg-blue-600 rounded mb-4">Registrarme</button>
        </form>
        <div className="grid grid-cols-1 ">
          <button onClick={props.estado} className="text-center">Iniciar Sesion</button>
        </div>
      </div>
    )
}

export default Register
