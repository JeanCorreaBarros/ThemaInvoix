import {createContext, useContext, useEffect} from 'react';
import {
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
   onAuthStateChanged,
   GoogleAuthProvider,
   signInWithPopup,
   signOut,
} from "firebase/auth";
import {useNavigate} from 'react-router-dom'



import {auth} from '../FirebaseConfig'

export const authContext = createContext();

  /*---Hook Personalizado-----*/
export const useAuth = () => { 
   const context = useContext(authContext)
   return context
}

    /*-Provider--*/
export function AuthProvider({children}) {
   const navigate = useNavigate()

   const login =  (email, password) =>  signInWithEmailAndPassword(auth, email, password);
   const signup =  (email, password) => createUserWithEmailAndPassword(auth, email, password);

   const authGmail = () => {
      
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider)
      .then( (result) => {
         const user = result.user;
         if(user){
            navigate('/')
            console.log(user.photoURL)
         }
         
         
      }).catch((error) => {
         const errorCode = error.code;
         const errorMessage = error.message;
         console.log(errorCode,errorMessage);
      })
   } 
   

   const legout = ()=> {
       signOut(auth)
       window.location.reload();
   };

  
   const handlepop = ()=> {
      navigate('/') 
   }
   
   
   useEffect(() =>{
      onAuthStateChanged(auth, (user) => {
         window.localStorage.setItem('user', JSON.stringify(user))
         console.log(user)
      });  
   },[])
            

   return<authContext.Provider value={{login,signup,legout,authGmail,handlepop}}>{children}</authContext.Provider>;
}