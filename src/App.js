import './App.css';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Nav from './components/Nav';
import ExampleComponent from './components/ExampleComponent';


const App = () => {

  return (
    <>
      <Nav />
      <ExampleComponent />
      <Home />
    </>
  );
};

export default App;