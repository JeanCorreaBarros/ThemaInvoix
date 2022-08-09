import axios from 'axios';
import Swal from 'sweetalert2';


const createUserWithEmailAndPassword = async (email, password) => {
  const  url  =  "http://localhost:3001/auth/signup";
    await axios.post(url,{email,password})
    .then (response =>{
     console.log(response); 

      // mensaje de envio con exito
      if(response.data.msg === "Usuario ya Existe"){
        Swal.fire({
          icon: 'error',
          title: "Usuario ya Existe",
          text: '🤔',
        })
      }
      if(response.data.msg === "registrado correctamente"){
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Resgistrado con exito ',
          text: 'enviamos un link a tu correo!',
          showConfirmButton: false,
          timer: 7000
        });
      }
    })
    .catch(err =>{
      if(err.message === "Request failed with status code 400")
      Swal.fire({
       icon: 'error',
       title: "Datos Incorrectos",
       text: 'Algo no esta Bien 🤔',
     })
    }) 
    
};

export default createUserWithEmailAndPassword