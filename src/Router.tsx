import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import { NotFound } from './pages/404';
import { About } from './pages/About';
import { Graph } from './pages/Graph';
import { User } from './pages/User';
import { AuthProvider, RequireAuth } from './providers';

export const Router = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />}>
            <Route path='/about' element={<About />} />
            <Route
              path='/'
              element={
                <RequireAuth>
                  <Graph />
                </RequireAuth>
              }
            />
            <Route path='/users'>
              <Route
                path=':userId'
                element={
                  <RequireAuth>
                    <User />
                  </RequireAuth>
                }
              />
            </Route>
            <Route path='/*' element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};
