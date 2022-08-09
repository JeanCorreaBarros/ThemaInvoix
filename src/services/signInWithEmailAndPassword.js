import Swal from 'sweetalert2';
import axios from 'axios';




const signInWithEmailAndPassword = async (email, password) => {
    const  url  =  "http://localhost:3001/auth/login";
    await axios.post(url,{email,password})
    .then (response =>{
     const datos = JSON.stringify(response.data.data.token);
     sessionStorage.setItem('User',datos);
     return datos;
    })
    .catch(err =>{
      if(err.message === 'Request failed with status code 401'){
        Swal.fire({
          icon: 'error',
          title: "USER AND PASSWORD_INVALID",
          text: 'Algo no esta Bien 🤔',
        })
      }

      if(err.message === 'Request failed with status code 404'){
        Swal.fire({
          icon: 'error',
          title: "USER NOT REGISTER",
          text: 'Algo no esta Bien 🤔',
        })
      }
    }) 
    
};

export default signInWithEmailAndPassword