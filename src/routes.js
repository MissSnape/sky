import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import Login from './pages/Login/login';
import Collections from './pages/Collections/Collections';
import Registration from './pages/Registration/Registration';
import NotFound from './pages/NotFound/NotFound';
import MyPlayList from './pages/MyPlayList/MyPlayList';
import { ProtectedRoute } from './ProtectedRoute';

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        element={
          <ProtectedRoute isAllowed={Boolean(localStorage.getItem('Token'))} />
        }
      >
        <Route path="/" element={<Home />} />
        <Route path="/category/:id" element={<Collections />} />
        <Route path="/favorites" element={<MyPlayList />} />
      </Route>
      <Route path="*" element={<NotFound />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Registration />} />
    </Routes>
  );
};

export default AppRoutes;