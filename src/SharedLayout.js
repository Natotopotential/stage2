import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from './Footer';

function SharedLayout() {
  return (
    <div>
      <Outlet />
      <Footer />
    </div>
  );
}

export default SharedLayout;
