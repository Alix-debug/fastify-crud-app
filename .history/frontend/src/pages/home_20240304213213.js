import React from 'react';
import { useParams } from 'react-router-dom';

const Home = () => {
  // check if data is defined
  if (!props) {
    return <div>Loading...</div>; // You can customize this loading state as needed
  }

  return (
    <div>
      <h2>Welcome {props.firstName} {props.LastName}!</h2>
    </div>
  );
};

export default Home;
