import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Front } from './Front';
import { RAdmin } from './RAdmin';

export const App = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Front />} />
            <Route path="/dashboard/*" element={<RAdmin />} />
        </Routes>
    </BrowserRouter>
);   