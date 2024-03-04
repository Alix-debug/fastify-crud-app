import React from 'react';

const Home = ({data}) => {
  if (!data) {
    return <div>Loading...</div>; // You can customize this loading state as needed
  }

  return (
    <div>
      <h2>Welcome {data.firstName} {data.LastName}!</h2>
    </div>
  );
};

export default Home;
