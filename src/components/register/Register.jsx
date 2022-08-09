import React,{useState} from 'react'
import { Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import IMGX from '../../assets/img/login_genomax.png';
import {useDataBase}from '../../context/bdContext';
import { FaChevronLeft } from "react-icons/fa";
import Swal from 'sweetalert2';




const Register = (props) => {

  const [user,setUser] = useState({
    email: '',
    password: '',
  });

  const {signup} = useDataBase();
  const navigate = useNavigate();

  const regexP = RegExp(/^([A-Za-z0-9]+){8,15}$/);
  const regexM = RegExp(/[a-z0-9]+@[a-z]+.[a-z]{2,3}/);
  const Password = regexP.test(user.password);
  const Email = regexM.test(user.email);

  const [erro,seterro]= useState(false)

  const publiError = ()=>{
    seterro(!erro)
   
  }

  const handleChange = ({target:{name, value}}) =>{
    setUser({...user,[name]: value});
  }; 
   
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(Password && Email){
      try {
        //function de Crear Users
        await signup(user.email, user.password);
        navigate('/confirm')
        //limpiar campos despues del envio
         e.target.reset();
      }catch (error) {
         console.log('Este correo ya esta en Uso');
         publiError(error)
      }
    }else{
      Swal.fire({
        icon: 'error',
        title: "Error Password",
        text: 'Clave Minima de 8 Caracteres🤔',
      })
    }
  }


    return (
      <div className='w-3/5 h-full flex flex-col justify-center items-center'>
        <div className='relative -top-4'>
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
              placeholder="Correo" 
              className='w-80 h-10 pl-4 shadow-lg focus:outline-none focus:ring focus:ring-blue-500 rounded' 
            />
            <span className='text-red-600 text-sm ml-5 w-5/6  '>{erro ? 'El correo ya esta Registrado en Genomax' :''}</span>
          </div>
          <div className='flex flex-col mb-4'>
            <label htmlFor="password" className='font-semibold pb-2'>Contraseña</label>
            <input 
              type="password"
              name="password"
              onChange={handleChange} 
              id="password" 
              placeholder="Contraseña (min. 8 caracteres)" 
              className='w-80 h-10 pl-4 shadow-lg focus:outline-none focus:ring focus:ring-blue-500 rounded' 
            />
          </div>
          <div className='w-80 mb-4'>
              <p className='text-sm text-center'>Al hacer clic en Registrarse, indicas que has leído y aceptas los <Link to="http://" className='text-blue-700'>Términos y condiciones</Link></p>
          </div>
          <button className="w-80 h-10 bg-green-600 text-white hover:bg-green-500  rounded mb-4">Registrarme</button>
        </form>
        <div className="grid grid-cols-1 ">
          <button onClick={props.estado} className="text-center flex items-center "><FaChevronLeft className="pr-2"/>Iniciar Sesion</button>
        </div>
      </div>
    )
}

export default Register
