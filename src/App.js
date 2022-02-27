import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useGlobalContext } from './context';
import Navbar from './Components/Navbar';

function App() {
  return (
    <Navbar />
  );
}

export default App;
