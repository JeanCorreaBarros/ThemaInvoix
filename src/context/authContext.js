import {createContext, useContext, useEffect} from 'react';
import {
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
   onAuthStateChanged,
   signOut,
} from "firebase/auth";




import {auth} from '../FirebaseConfig'

export const authContext = createContext();

  /*---Hook Personalizado-----*/
export const useAuth = () => { 
   const context = useContext(authContext)
   return context
}

    /*-Provider--*/
export function AuthProvider({children}) {
 

   const login =  (email, password) =>  signInWithEmailAndPassword(auth, email, password);
   const signup =  (email, password) => createUserWithEmailAndPassword(auth, email, password);
   const legout = ()=> {
       signOut(auth)
       window.location.reload();
   };

  
   useEffect(() =>{
      onAuthStateChanged(auth, (user) => {
         window.localStorage.setItem('user', JSON.stringify(user))
         
      });  
   },[])
            

   return<authContext.Provider value={{login,signup,legout}}>{children}</authContext.Provider>;
}