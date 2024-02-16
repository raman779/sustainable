import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from '../pages/Home';
import Auth from '../pages/Auth';
import Leader from '../pages/Leader';

// import Dashboard from '../pages/Dashboard';

const ProjectRoutes = () => {
    return (
        <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/details" element={<Leader />} />
            {/* <Route path="/dashboard" element={<Dashboard/>} /> */}
        </Routes>
    );
};

export default ProjectRoutes;
