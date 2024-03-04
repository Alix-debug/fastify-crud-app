import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const Home = () => {

  const { _id,firstName,LastName} = useParams();

  return (
    <div>
      <h2>Welcome {firstName} {LastName}!</h2>
      <p>ID: {_id}</p>
    </div>
  );
};

export default Home;
