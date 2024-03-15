
import React from 'react';
import {
    BrowserRouter,
    Route,
    Switch,
    Outlet, Routes
} from 'react-router-dom';

import NasaPage from './NasaPage';




const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Outlet />}>
                    <Route path="nasa" element={<NasaPage />} />
                </Route>
            </Routes>
        </BrowserRouter>

    );
};
export default App