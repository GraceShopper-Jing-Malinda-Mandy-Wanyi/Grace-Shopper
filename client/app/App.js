import React from 'react';

import Navbar from '../features/navbar/Navbar';
import AppRoutes from './AppRoutes';
import AllUsers from '../features/AllUser';

const App = () => {
  return (
    <div>
      <Navbar />
      <AppRoutes />
      <AllUsers />
    </div>
  );
};

export default App;
