import React from 'react';
import Navbar from '../components/Layout/Navbar';
const Layout = props => {
  return (
    <div>
      <Navbar />
      <div className="container">{props.children}</div>
    </div>
  );
};

export default Layout;
