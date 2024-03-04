// src/pages/Home.js
import React from 'react';

const Home = (data) => {
  return (
    <div>
      <h2>Welcome {data.firstName} {data.LastName}!</h2>
    </div>
  );
};

export default Home;
