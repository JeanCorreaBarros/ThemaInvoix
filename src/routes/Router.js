import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from '../App';
import Register from '../components/register/Register';
import Dashboard from '../pages/Dashboard'
import NotFound from '../pages/NotFound'




const Router = () => {
    return (
        <BrowserRouter>
        <layout/>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/register" element={<Register />}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router



