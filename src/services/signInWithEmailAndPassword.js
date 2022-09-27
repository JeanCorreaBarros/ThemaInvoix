import Swal from 'sweetalert2';


const signInWithEmailAndPassword = async (email, password) => {

  async function ObtenerPriKeys(){

    const  url  =  "http://api.genomax.co/NXSAPI/v1.0/auth/logIn/";
    let raw = {
      "nxsApp": "1",
      "publicKey": "53fe22c842b5cd516d9f9840f3edb27cf539e0db",
      "user": email, /*NEXUS*/ 
      "pass":password /*e10adc3949ba59abbe56e057f20f883e*/ 
    };

    let options =   {
      method: "POST",
      body: JSON.stringify(raw)
    }

    await fetch(url,options)
    .then(response => response.json())
    .then(data =>{
      let usuario = JSON.stringify(data)
      sessionStorage.setItem('User',usuario);
      validadorPrivKeys(data); 
    })
  }


  async function validadorPrivKeys(data){
    const  url  =  "http://api.genomax.co/NXSAPI/v1.0/auth/getToken/";
    let raw = {
      "publicKey":"53fe22c842b5cd516d9f9840f3edb27cf539e0db",
      "privateKey": data.privateKey,
      "nxsApp": "1"
    }

    let options =   {
      method: "POST",
      body: JSON.stringify(raw)
    }

    await fetch(url,options)
    .then(response => response.json())
    .then(data =>{
      sessionStorage.setItem('Token',data.access_token);
      return data;// 'Hello World'
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
    

  }

   
  ObtenerPriKeys(); 

};



export default signInWithEmailAndPassword
