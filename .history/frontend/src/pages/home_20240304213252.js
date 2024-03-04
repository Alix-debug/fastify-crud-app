import React from 'react';
import { useParams } from 'react-router-dom';

const Home = () => {
  const { id, firstName, LastName } = useParams();
  return (
    <div>
      <h2>Welcome {firstName} {LastName}!</h2>
    </div>
  );
};

export default Home;
