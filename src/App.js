
import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

import NasaPage from './NasaPage';

const App = () => {
    return (
        <BrowserRouter>
            <Nav /> {/* Nav stays consistent */}
            <Routes>
                <Route path="/" element={<Outlet />}> {/* Other routes nested here */}
                    <Route path="nasa" element={<NasaImages />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};