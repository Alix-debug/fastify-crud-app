import React from 'react';

const Home = (props) => {
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
