import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Auth from '../pages/Auth';
import Leader from '../pages/Leader';
import Group from '../pages/Group';

const ProjectRoutes = () => {
    return (
        <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/details" element={<Leader />} />
            <Route path="/group" element={<Group />} />
        </Routes>
    );
};

export default ProjectRoutes;
