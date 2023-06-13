import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  Front  from './Front';
import { RAdmin } from './RAdmin';
import ProyectosView from './Front/components/pages/Proyectos';

export const App = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Front />} />
            <Route path="/dashboard/*" element={<RAdmin />} />
            <Route path="/proyectos" element={<ProyectosView/> } />
        </Routes>
    </BrowserRouter>
);   