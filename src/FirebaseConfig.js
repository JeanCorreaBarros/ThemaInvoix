import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";



  const firebaseConfig = {
    apiKey: "AIzaSyATMNro9MVmTaSfby5UoLXongG7GSwmZdk",
    authDomain: "login-genomax.firebaseapp.com",
    projectId: "login-genomax",
    storageBucket: "login-genomax.appspot.com",
    messagingSenderId: "732569596870",
    appId: "1:732569596870:web:2b6d8505811a115b2f38c7"
   };


export const app = initializeApp(firebaseConfig);
const auth = getAuth(app);



export const loginUsuario = async (correo,password)=>{
    signInWithEmailAndPassword(auth, correo, password)
       .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        console.log(user);
    })
    .catch((error) => {
    const errorMessage = error.message;
    console.log(errorMessage);
    // ..
  });
}