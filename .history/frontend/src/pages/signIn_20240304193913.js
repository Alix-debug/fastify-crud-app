import React, { useState }from 'react';
import { Link } from 'react-router-dom';
import { getUserByEmail } from '../services/api';


const SignIn = () => {
  const [formData, setFormData] = useState({
    Email: '',
    Password: '',
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
      // Make the API request
      const user = await getUserByEmail(formData);

      // Handle success (e.g., redirect to a success page)
      console.log('User logged in successfully:', user);
    } catch (error) {
      // Handle error (e.g., display an error message)
      console.error('Error while trying to log in user:', error);
    }
  };

  return (
    <div>
      <h2>Sign In</h2>
      <form id="sign-in" onSubmit={handleSubmit}>
      <div>
        <label for="sign-in-email">Email</label>
        <input
          id="email"
          required
          type="email"
          onChange={handleChange}
        />
      </div>
      <div>
        <label for="sign-in-password">Password</label>
        <input
          id="password"
          type="password"
          onChange={handleChange}
        />
      </div>
      <button type="submit">Sign In</button>
    </form>
    <Link to="/">Back to Home</Link>
    </div>
  );
};

export default SignIn;
