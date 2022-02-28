import React from 'react';
import { Outlet } from 'react-router-dom';
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
