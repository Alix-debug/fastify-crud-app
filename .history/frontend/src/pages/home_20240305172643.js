import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { deleteUser, updateUser } from '../services/api';

const Home = () => {

  const { firstname, lastname} = useParams();
  const [formData, setFormData] = useState();

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
      console.log('coucou HOME.js handleSubmit to update user', formData)
      // Make the API request
      const user = await updateUser(formData);

      // redirect to a home page with updated info
      console.log('User has been modified in successfully:', user);
    } catch (error) {
      // Handle error
      console.error('Error while trying to modify the user:', error);
    }
  };

  const handleDelete = async (e) => {
    e.preventDefault();

    try {
      console.log('handleDelete formData', formData);
      // Make the API request to delete the user
      const result = await deleteUser(formData);

      // redirect to a / page
      console.log('User has been deleted successfully:', result);
    } catch (error) {
      // Handle error
      console.error('Error while trying to delete the user:', error);
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
          onChange={handleChange}
        />
      </div>
      <div>
        <label for="update-last-name">Last Name</label>
        <input
          id="LastName"
          required
          type="name"
          onChange={handleChange}
        />
      </div>
      <div>
        <label for="update-email">Email</label>
        <input
          id="Email"
          required
          type="Email"
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

      <div>
        <p>Please type your email and password if you want to delete your account.</p>
        <button type="submit" onClick={handleDelete}>Delete my account</button>
      </div>
    </div>
    
  );
};

export default Home;
