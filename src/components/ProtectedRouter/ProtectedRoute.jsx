import React, {useState,useEffect} from "react";
import {Navigate} from 'react-router-dom';

const ProtectedRoute = ({children}) => {
  const userStorage = sessionStorage.getItem("token");
  const [email, setEmail] = useState(userStorage);
  useEffect(() => {
    setEmail(userStorage);
  }, []);

  /* Colocar otra vez el signo de Admiracion para validacion de login*/
  if (!email) return <Navigate to="/auth" />;
  return <>{children}</>;
};

export default ProtectedRoute;
