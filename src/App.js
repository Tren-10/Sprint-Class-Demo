// App.js

import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import NasaPage from './NasaPage'; // Import NasaPage component


const App = () => {
    return (
        <Router>
            <Switch>

                <Route path="/nasa" component={NasaPage} /> {/* NASA API page */}
            </Switch>
        </Router>
    );
};

export default App;
