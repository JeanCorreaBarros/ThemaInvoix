import React,{useState} from 'react'
import { Link,useNavigate} from 'react-router-dom'
import IMGX from '../../assets/img/login_genomax.png'
import {useAuth} from '../../context/authContext'
import { FaChevronLeft } from "react-icons/fa";




const Register = (props) => {

  const [user,setUser] = useState({
    email: '',
    password: '',
  });

  const {signup} = useAuth()
  const navigate = useNavigate()
  const regexp = RegExp(/^([A-Za-z0-9]+){8,15}$/);
  const Password = regexp.test(user.password);

  const handleChange = ({target:{name, value}}) =>{
    setUser({...user,[name]: value});
  }; 
   
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(Password){
      try {
        await signup(user.email, user.password);
         navigate('/')
       } catch (error) {
         console.log(error.code);
       }
    }else{
      window.alert("Clave Minima de 8 a 15 Caracteres")
    }
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
            <label htmlFor="email" className='font-semibold pb-2'>Usuario</label>
            <input 
              type="email"  
              name="email"
              onChange={handleChange}  
              placeholder="Ingrese su Email" 
              className='w-80 h-10 pl-4 shadow-lg focus:outline-none focus:ring focus:ring-blue-500 rounded' 
            />
          </div>
          <div className='flex flex-col mb-4'>
            <label htmlFor="password" className='font-semibold pb-2'>Contraseña</label>
            <input 
              type="password"
              name="password"
              onChange={handleChange} 
              id="password" 
              placeholder="Ingrese su Contraseña" 
              className='w-80 h-10 pl-4 shadow-lg focus:outline-none focus:ring focus:ring-blue-500 rounded' 
            />
          </div>
          <div className='w-80 mb-4'>
              <p className='text-sm text-center'>Al hacer clic en Registrarse, indicas que has leído y aceptas los <Link to="http://" className='text-blue-700'>Términos y condiciones</Link></p>
          </div>
          <button className="w-80 h-10 bg-blue-500 text-white hover:bg-blue-600 rounded mb-4">Registrarme</button>
        </form>
        <div className="grid grid-cols-1 ">
          <button onClick={props.estado} className="text-center flex items-center "><FaChevronLeft className="pr-2"/>Iniciar Sesion</button>
        </div>
      </div>
    )
}

export default Register
