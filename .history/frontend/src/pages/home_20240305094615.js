import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { updateUser } from '../services/api';

const Home = () => {

  const { firstname, lastname} = useParams();
  const [formData, setFormData] = useState({
    firstName: lastname,
    LastName: firstname,
    Email: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log('coucou HOME.js,formdata', formData)
      // Make the API request
      const user = await updateUser(formData);

      // redirect to a home page
      console.log('User has been modified in successfully:', user);
    } catch (error) {
      // Handle error
      console.error('Error while trying to modify the user:', error);
    }
  };

  return (
    <div>
      <h2>Welcome {firstname} {lastname}!</h2>
      <h2>Modify My Profile</h2>
      <form id="update-profile" onSubmit={handleSubmit}>
      <div>
        <label for="update-first-name">First Name</label>
        <input
          id="firstName"
          required
          type="name"
          defaultValue={firstname}
          onChange={handleChange}
        />
      </div>
      <div>
        <label for="update-last-name">Last Name</label>
        <input
          id="lastName"
          required
          type="name"
          defaultValue={lastname}
          onChange={handleChange}
        />
      </div>
      <div>
        <label for="update-email">Email</label>
        <input
          id="email"
          required
          type="email"
          defaultValue={email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label for="update-password">Password</label>
        <input
          id="Password"
          type="password"
          onChange={handleChange}
        />
      </div>
      <button type="submit">Update my profile</button>
    </form>
    </div>
    
  );
};

export default Home;
