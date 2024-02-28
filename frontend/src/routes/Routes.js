import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import Auth from '../pages/Auth';
import Leader from '../pages/Leader';
import CreateGroup from '../pages/CreateGroup';
import Admin from '../pages/Admin';
import MainContainer from '../components/common/MainContainer';
import Group from '../pages/Group';
import useFetch from '../hooks/usefetch';
import SuperAdmin from '../pages/SuperAdmin';

// const isAuthenticated = localStorage.getItem('authToken')? true :false

const PrivateRoute = ({ path, element }) => {
    // const isAuthenticated = !!localStorage.getItem('authToken');
    const isAuthenticated = true
    return isAuthenticated ? (
        element
    ) : (
        <Navigate to="/auth" />
    );
};

const ProjectRoutes = () => {
    return (
        <MainContainer>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/auth" element={<Auth />} />
                {/* Protected routes */}
                <Route path="/details" element={<PrivateRoute element={<Leader />} />} />
                <Route path="/creategroup" element={<PrivateRoute element={<CreateGroup />} />} />
                <Route path='/admin' element={<PrivateRoute element={<Admin />} />} />
                <Route path='/super-admin' element={<PrivateRoute element={<SuperAdmin />} />} />
                <Route path='/leader' element={<PrivateRoute element={<Group />} />} />
                {/* Redirect to home page for invalid routes  */}
                <Route path="*" element={<Navigate to="/auth" />} />
            </Routes>
        </MainContainer>
    );
};

export default ProjectRoutes;
