// src/Lauout.jsx
import React from 'react';
import Navbar from './Navbar';
import pages from './pages/Home';
const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto p-4">
        {children}
      </main>
    </div>
  );
};

export default Layout;
