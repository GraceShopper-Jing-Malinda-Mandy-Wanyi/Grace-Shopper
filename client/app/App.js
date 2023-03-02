import React from 'react';
import { me } from './store';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../features/navbar/Navbar';
import AppRoutes from './AppRoutes';

const App = () => {
  const user = useSelector(state => state.auth)
  const dispatch = useDispatch()

  //checks to see if you have a token in local storage -> if you do, the implication is that you logged in without logging out -> this will log you back in
  if(window.localStorage.getItem("token") && Object.keys(user.me).length === 0){
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
