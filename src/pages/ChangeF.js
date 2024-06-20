import React from 'react';
import ChangeFormat from '../components/ChangeFormat';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './ChangeF.css'; 
import Navbar from '../pages/Navb';

const ChangeF = () => {
  return (
    <div>
        {/* <Navbar /> */}
        <ChangeFormat />
    </div>
  );
}

export default ChangeF;