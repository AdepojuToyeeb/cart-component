import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useGlobalContext } from './context';
import Navbar from './Components/Navbar';

function App() {

  const{loading} = useGlobalContext()
  if (loading){
    return (
      <div className='loading'>
        <h2>Loading...</h2>
      </div>
    )
  }
  return (
    <>
      <Navbar />
    </>
    
  );
}

export default App;
