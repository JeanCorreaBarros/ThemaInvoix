import React,{ useState } from 'react';
import './App.css';
import LayoutAuth from './components/layout/LayoutAuth';
import Home from './pages/Home';








function App() {
  const [usuario,setUsuario] = useState(null)
  console.log(usuario)
  
  return (
    <>
      {usuario
        ? <Home/>
        : <LayoutAuth setUsuario={setUsuario} />
      }
    </>
  );
}

export default App;
