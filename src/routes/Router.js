import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from '../App';
import NotFound from '../pages/NotFound'
import {AuthProvider} from  '../context/bdContext'
import Dashboard from '../pages/Dashboard'
import Confirm from '../components/wizard/Confirm';
import ProtectLayout from '../components/otros/ProtectLayout';
import Option1 from '../pages/Agenda/Option1';
import Option2 from '../pages/Agenda/Option2';
import Option3 from '../pages/Agenda/Option3';
import Reportes from '../pages/Reportes';
import Configuracion from '../pages/Configuracion';
import ConfiguracionPF from '../pages/configuracionPerfil/configuracionPerfil';
import MiCuenta from '../pages/configuracionPerfil/Micuenta';
import NewPassword from '../pages/configuracionPerfil/NewPassword';







const Router = () => {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<ProtectLayout><Dashboard/></ProtectLayout>}/>
                    <Route path="/agenda/option1" element={<ProtectLayout><Option1/></ProtectLayout>}/>
                    <Route path="/agenda/option2" element={<ProtectLayout><Option2/></ProtectLayout>}/>
                    <Route path="/agenda/option3" element={<ProtectLayout><Option3/></ProtectLayout>}/>
                    <Route path="/configuracionPerfil" element={<ProtectLayout><ConfiguracionPF /></ProtectLayout>}/>
                    <Route path="/micuenta" element={<ProtectLayout><MiCuenta /></ProtectLayout>}/>
                    <Route path="/newpassword" element={<ProtectLayout><NewPassword /></ProtectLayout>}/>
                    <Route path="/reportes" element={<ProtectLayout><Reportes/></ProtectLayout>}/>
                    <Route path="/configuracion" element={<ProtectLayout><Configuracion/></ProtectLayout>}/>
                    <Route path="/confirm" element={<Confirm/>}/>
                    <Route path="/auth" element={<App/>}/>
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    )
}

export default Router


