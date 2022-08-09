import React,{useState} from 'react'
import SRC from '../../assets/videos/video-login.mp4';
import {useNavigate} from 'react-router-dom';
import IMGX from '../../assets/img/login_genomax.png';
import {useDataBase}from '../../context/bdContext';
import Swal from 'sweetalert2';




const ConfirmComponet = (props) => {

  const [codigo,setCodigo] = useState({
    codigoConfirmacion: '',
  });

  const {confirm} = useDataBase();
  const navigate = useNavigate();

  

  const Codigo = codigo.codigoConfirmacion;
  console.log(Codigo);

  const [erro,seterro]= useState(false)

  const publiError = ()=>{
    seterro(!erro)
   
  }

  const handleChange = ({target:{name, value}}) =>{
    setCodigo({...codigo,[name]: value});
  }; 
   
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(Codigo){
      try {
        //function de Crear Users
        await confirm(Codigo);
        console.log("funciona")
        navigate('/auth')
        //limpiar campos despues del envio
        
      }catch (error) {
         console.log('Este correo ya esta en Uso');
         publiError(error)
      }
    }else{
      Swal.fire({
        icon: 'error',
        title: `${erro.message}`,
        text: 'Algo no esta bien con tu Codigo 🤔',
      })
    }
  }


    return (
        <>
        <div className="grid place-items-center bg-gray-200 h-screen shadow-xl">
          <div className=' flex border-solid border-2 bg-gray-50 rounded-3xl w-4/5 h-5/6'>
          <div className='w-3/5 h-full flex flex-col justify-center items-center'>
        <div className='relative -top-4'>
          <img src={IMGX} alt="img_genomax"  className='w-24'/>
        </div>
        <div className='relative -top-2 -left-24'>
          <h1 className='font-bold text-xl text-gray-600'>Confirmar Usuario</h1>
          <hr className='border-solid  border-2 border-gray-600 mt-2 w-8'></hr>
        </div>
        <form onSubmit={handleSubmit} className='w-full grid place-content-center'>
          <div className='flex flex-col mb-4 '>
            <label htmlFor="email" className='font-semibold pb-2 text-center'>¡Hola 😊, te damos la bienvenida! <br></br>Para continuar, por favor ingresa el código<br></br>que hemos enviado a tu correo...</label>
            <input 
              type="text"  
              name="codigoConfirmacion"
              onChange={handleChange}  
              placeholder="Codigo de Confirmacion" 
              className='w-80 h-10 pl-4 shadow-lg focus:outline-none focus:ring focus:ring-blue-500 rounded' 
            />
            <span className='text-red-600 text-sm ml-5 w-5/6  '>{erro ? 'El correo ya esta Registrado en Genomax' :''}</span>
          </div>
          <button className="w-80 h-10 bg-green-600 text-white hover:bg-green-500  rounded mb-4">Continuar</button>
        </form>
      </div>
            <div className='w-2/5 h-full '>
                <video
                  className='rounded-r-3xl object-cover min-w-full min-h-full' 
                  controls={false}
                  autoPlay={true}
                  loop={true}
                  muted={true}>
                  <source 
                    src={SRC}
                    type="video/mp4" />
                </video>
            </div> 
          </div>
        </div>
      </>
      
    )
    
}

export default ConfirmComponet


