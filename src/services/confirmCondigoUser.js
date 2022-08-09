import axios from 'axios';
import Swal from 'sweetalert2';


const confirmCodigoUser = async (Codigo) => {

    await axios.get(`http://localhost:3001/auth/confirm/${ Codigo }`)
    .then (response =>{
     console.log(response); 

      // Validaciones de Envio
      if(response.data.msg === "Confirmado Correctamente"){
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Felicitaciones!!',
          text: 'Ya haces parte de Genomax!',
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

export default confirmCodigoUser