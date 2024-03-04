import React from 'react';

const Home = ({ location }) => {
  const { state } = location;

  // check if data is defined
  if (!state || !state.user) {
    return <div>Loading...</div>; // You can customize this loading state as needed
  }

  const { user } = state;

  return (
    <div>
      <h2>Welcome {user.firstName} {user.LastName}!</h2>
    </div>
  );
};

export default Home;
