import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import { Header } from './components';

function App() {
  return (
    <div className='App'>
      <Header></Header>
      <Outlet />
    </div>
  );
}

export default App;
