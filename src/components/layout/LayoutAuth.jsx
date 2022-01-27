import React,{useState} from 'react';
import SRC from '../../assets/videos/video-login.mp4';
import Login from '../login/Login';
import Register from '../register/Register';





const LayoutAuth = (props) => {
  
    const [isRegistrando,setIsRegistrando] = useState(false)

    const handleChange = () => {
      setIsRegistrando(!isRegistrando)
    }
      
 
    return (
      
        <div className="grid place-items-center bg-gray-200 h-screen shadow-xl">
          <div className=' flex border-solid border-2 bg-gray-50 rounded-3xl w-4/5 h-5/6'>
            {isRegistrando
              ?<Register 
                estado={handleChange} 
                setUsuario={props.setUsuario}
              />
              :<Login 
                estado={handleChange} 
                setUsuario={props.setUsuario}
              />
            }  
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
      
    )
};

export default LayoutAuth;
