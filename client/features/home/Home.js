import React from 'react';
import { useSelector } from 'react-redux';
import { fetchSingleProduct, selectSingleProduct } from '../products/singleProductSlice';


/**
 * COMPONENT
 */
const Home = (props) => {
  const username = useSelector((state) => state.auth.me.username);
  
  return (
    <div>
      <h3>Welcome, {username}</h3>
    


    </div>
  );
};

export default Home;
