import './App.css';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Nav from './components/Nav';


const App = () => {

  return (
    <>
      <Nav />
      <Home />
    </>
  );
};

export default App;