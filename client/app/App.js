import React from 'react';
import { me } from './store';
import { useDispatch } from 'react-redux';
import Navbar from '../features/navbar/Navbar';
import AppRoutes from './AppRoutes';

const App = () => {
  const dispatch = useDispatch()

  //checks to see if you have a token in local storage -> if you do, the implication is that you logged in without logging out -> this will log you back in
  if(window.localStorage.getItem("token")){
    dispatch(me())
  }

  return (
    <div>
      <Navbar />
      <AppRoutes />
    </div>
  );
};

export default App;
