import React from 'react';

const Home = ({data}) => {
  // check if data is null
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
