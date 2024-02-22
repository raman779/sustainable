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
    const isAuthenticated = !!localStorage.getItem('authToken');
    return isAuthenticated ? (
        element
    ) : (
        <Navigate to="/auth" />
    );
};

const ProjectRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<MainContainer><Home /></MainContainer>} />
            <Route path="/auth" element={<Auth />} />
            {/* Protected routes */}
            <Route path="/details" element={<PrivateRoute element={<MainContainer><Leader /></MainContainer>} />} />
            <Route path="/creategroup" element={<PrivateRoute element={<MainContainer><CreateGroup /></MainContainer>} />} />
            <Route path='/admin' element={<PrivateRoute element={<MainContainer><Admin /></MainContainer>} />} />
            <Route path='/super-admin' element={<PrivateRoute element={<MainContainer><SuperAdmin /></MainContainer>} />} />
            <Route path='/group' element={<PrivateRoute element={<MainContainer><Group /></MainContainer>} />} />
             {/* Redirect to home page for invalid routes  */}
            <Route path="*" element={<Navigate to="/auth" />} />
        </Routes>
    );
};

export default ProjectRoutes;
