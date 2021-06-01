import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Sidebar from '../components/sidebar/Sidebar';
import { Container } from 'next/app';
import { Box } from '@material-ui/core';

const home = () => {
    return (
      <div>
        <Navbar />
        <Sidebar />
      </div>
  
  );
}

export default home;