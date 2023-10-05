import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./views/dashboard/Dashboard";
import ProtectedLayout from "./components/SmartLayout/ProtectedLayout";
import Login from "./views/session/Login";
import Perfil from "./views/perfile/Perfil";
import Register from "./views/session/Register";
import Invoice from "./views/facturacion/Invoice";
import AddInvoix from "./views/facturacion/AddInvoix";
import NotaCredito from "./views/facturacion/notaCredito/NotaCredito";
import NotaDebito from "./views/facturacion/notaDebito/NotaDebito";
import PagosRecibidos from "./views/facturacion/pagosRecibidos/PagosRecibidos";
import DocumentoSoporte from "./views/facturacion/documentoSoporte/DocumentoSoporte";
import EstadosDeCuentas from "./views/facturacion/estadoCuentas/EstadosDeCuentas";
import DatosEmpresa from "./views/configuracion/DatosEmpresa";
import RegistroCertificado from "./views/configuracion/RegistroCertificado";
import PageNotFound from "./views/pagenotfound/pageNotFound";
import EditInvoix from "./views/facturacion/EditInvoix";
import Estimate from "./views/facturacion/cotizacion/Estimate";
import AddEstimate from "./views/facturacion/cotizacion/AddEstimate";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProtectedLayout><Dashboard /></ProtectedLayout>} />
        <Route path="/invoice" element={<ProtectedLayout><Invoice /></ProtectedLayout>} />
        <Route path="/invoice/add" element={<ProtectedLayout><AddInvoix /></ProtectedLayout>} />
        <Route path="/invoice/edit" element={<ProtectedLayout><EditInvoix /></ProtectedLayout>} />
        <Route path="/estimate" element={<ProtectedLayout><Estimate /></ProtectedLayout>} />
        <Route path="/estimate/add" element={<ProtectedLayout><AddEstimate /></ProtectedLayout>} />
        <Route path="/creditnotes" element={<ProtectedLayout><NotaCredito /></ProtectedLayout>} />
        <Route path="/debitnotes" element={<ProtectedLayout><NotaDebito/></ProtectedLayout>} />
        <Route path="/paymentreceived" element={<ProtectedLayout><PagosRecibidos /></ProtectedLayout>} />
        <Route path="/support-document" element={<ProtectedLayout><DocumentoSoporte/></ProtectedLayout>} />
        <Route path="/accountstatements" element={<ProtectedLayout><EstadosDeCuentas/></ProtectedLayout>} />
        <Route path="/companyconfig" element={<ProtectedLayout><DatosEmpresa/></ProtectedLayout>} />
        <Route path="/registercertficate" element={<ProtectedLayout><RegistroCertificado/></ProtectedLayout>} />
        <Route path="/perfile" element={<ProtectedLayout><Perfil /></ProtectedLayout>} />
        <Route path="/register" element={<Register />} />
        <Route path="/auth" element={<Login />} />
        <Route path="/*" element={<ProtectedLayout><PageNotFound/></ProtectedLayout>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
