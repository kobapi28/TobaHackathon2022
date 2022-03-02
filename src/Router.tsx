import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import { NotFound } from './pages/404';
import { About } from './pages/About';
import { Graph } from './pages/Graph';
import { User } from './pages/User';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='/about' element={<About />} />
          <Route path='/' element={<Graph />} />
          <Route path='/users'>
            <Route path=':userId' element={<User />} />
          </Route>
          <Route path='/*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
