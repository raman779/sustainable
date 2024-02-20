import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Auth from '../pages/Auth';
import Leader from '../pages/Leader';
import CreateGroup from '../pages/CreateGroup';
import Admin from '../pages/Admin';
import MainContainer from '../components/common/MainContainer';
import Group from '../pages/Group';

const ProjectRoutes = () => {
    return (
        <MainContainer>
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/details" element={<Leader />} />
                <Route path="/creategroup" element={<CreateGroup />} />
                <Route path='/admin' element={<Admin />} />
                <Route path='/group' element={<Group />} />
            </Routes>
        </MainContainer>
    );
};

export default ProjectRoutes;
