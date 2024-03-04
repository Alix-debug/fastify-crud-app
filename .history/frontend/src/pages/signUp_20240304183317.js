import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createUser } from '../services/api';

const SignUp = () => {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
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
      // Validate password and confirmPassword match before making the request
      if (formData.password !== formData.confirmPassword) {
        console.error('Password and Confirm Password do not match');
        return;
      }

      // Make the API request
      const user = await createUser(formData);

      // Handle success (e.g., redirect to a success page)
      console.log('User created successfully:', user);
    } catch (error) {
      // Handle error (e.g., display an error message)
      console.error('Error creating user:', error);
    }
  };


  return (
    <div>
      <h2>Sign Up Page</h2>

      <form id="sign-up" onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      <div>
        <label for="sign-up-first-name">First Name</label>
        <input
          id="sign-up-first-name"
          required
          type="firstName"
          value ={firstName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label for="sign-up-last-name">Last Name</label>
        <input
          id="sign-up-last-name"
          required
          type="lastName"
          value ={lastName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label for="sign-up-email">Email</label>
        <input
          id="sign-up-email"
          required
          type="email"
          value ={email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label for="sign-up-password">Password</label>
        <input
          id="sign-up-password"
          required
          type="password"
          value ={password}
          onChange={handleChange}
        />
      </div>
      <div>
        <label for="sign-up-confirm-password">Confirm Password</label>
        <input
          id="sign-up-confirm-password"
          required
          type="password"
          value={confirmPassword}
          onChange={handleChange}
        />
      </div>
      <button type="submit" onClick={handleSubmit}>Sign Up</button>
    </form>
    <Link to="/">Back to Home</Link>
    </div>
  );
};

export default SignUp;
