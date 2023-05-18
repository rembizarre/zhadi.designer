import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import publicRoutes from '../routes';
import Header from './Header/Header';
import Footer from './Footer/Footer';

const AppRouter = () => {
  const [isContact, setIsContact] = useState(false);
  return (
    <div id="app">
      <Header />
      <Routes>
        {publicRoutes.map(({ path, Component }) => (
          <Route
            key={path}
            path={path}
            element={<Component useSetIsContact={setIsContact} />}
            exact
          />
        ))}
      </Routes>
      {!isContact ? <Footer /> : ''}
    </div>
  );
};

export default AppRouter;
