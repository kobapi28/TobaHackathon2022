import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { About } from './pages/About';
import { Graph } from './pages/Graph';
import { User } from './pages/User';
import { NotFound } from './pages/404';

ReactDOM.render(
  <ChakraProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='about' element={<About />} />
          <Route path='' element={<Graph />} />
          <Route path='users'>
            <Route path=':userId' element={<User />} />
          </Route>
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </ChakraProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
