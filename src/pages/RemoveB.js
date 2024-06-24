import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RemoveBackground from '../components/RemoveBackground';
import Header from '../pages/Navb';
import './RemoveB.css'; 

const RemoveB = () => {
  return (
    <div>
        <Header/>
        <RemoveBackground />
    </div>
  );
}

export default RemoveB;