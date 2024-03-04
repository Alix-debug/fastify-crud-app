import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const Home = () => {

  const { id, firstname, lastname, email, password} = useParams();

  return (
    <div>
      <h2>Welcome {firstname} {lastname}!</h2>
      <p>ID: {id}</p>
    </div>
  );
};

export default Home;
