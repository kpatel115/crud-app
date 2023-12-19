import './App.css';
import React, {useState} from 'react';
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