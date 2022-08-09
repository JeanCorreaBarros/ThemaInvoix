import {createContext, useContext} from 'react';
import signInWithEmailAndPassword from '../services/signInWithEmailAndPassword';
import createUserWithEmailAndPassword from '../services/createUserWithEmailAndPassword';
import confirmCodigoUser from '../services/confirmCondigoUser';

export const authContext = createContext();


/*---Hook Personalizado-----*/
export const useDataBase = () => { 
   const context = useContext(authContext)
   return context
}

/*-Provider--*/
export function AuthProvider({children}) {
 
  const login = (email, password) => signInWithEmailAndPassword(email, password);
  const signup =  (email, password) => createUserWithEmailAndPassword(email, password);
  const confirm = (Codigo) => confirmCodigoUser(Codigo);
   
    
  return<authContext.Provider value={{login,signup,confirm}} >{children}</authContext.Provider>;
}