import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const PrivateRoutes = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default PrivateRoutes;
