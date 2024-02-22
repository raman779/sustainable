import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Auth from '../pages/Auth';
import Leader from '../pages/Leader';
import CreateGroup from '../pages/CreateGroup';
import Admin from '../pages/Admin';
import MainContainer from '../components/common/MainContainer';
import Group from '../pages/Group';
import { Provider, useSelector } from 'react-redux';
import store from '../store';
// import PrivateRoute from './PrivateRoute'; 

const ProjectRoutes = () => {
    return (
        <Provider store={store}>
        <MainContainer>
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/auth" element={<Auth />} />
                <Route
                    path="/protected"
                    element={
                    <RequireAuth redirectTo="/auth">
                        <Route path="/details" element={<Leader />} />
                        <Route path="/creategroup" element={<CreateGroup />} />
                        <Route path='/admin' element={<Admin />} />
                        <Route path='/group' element={<Group />} />
                    </RequireAuth>
                    }
                />
            </Routes>
        </MainContainer>
        </Provider>
    );
};


function RequireAuth({ children, redirectTo }) {
    const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
    return isAuthenticated ? children : <Navigate to={redirectTo} />;
  }

export default ProjectRoutes;
