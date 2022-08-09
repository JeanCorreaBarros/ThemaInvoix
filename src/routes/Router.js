import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from '../App';
import NotFound from '../pages/NotFound'
import {AuthProvider} from  '../context/bdContext'
import Home from '../pages/Home';
import Prueba from '../pages/Prueba';
import Confirm from '../components/wizard/Confirm';
import ProtectLayout from '../components/otros/ProtectLayout';





const Router = () => {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<ProtectLayout><Home/></ProtectLayout>}/>
                    <Route path="/prueba" element={<ProtectLayout><Prueba/></ProtectLayout>}/>
                    <Route path="/confirm" element={<Confirm/>}/>
                    <Route path="/auth" element={<App/>}/>
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    )
}

export default Router



