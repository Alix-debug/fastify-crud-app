import React from 'react';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const location = useLocation();
  const { state } = location || {};

  if (!state || !state.user) {
    return <div>Loading...</div>;
  }

  const { user } = state;

  return (
    <div>
      <h2>Welcome {user.firstName} {user.lastName}!</h2>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default Home;
