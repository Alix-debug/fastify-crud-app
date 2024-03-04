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
      const data = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password,
      }
      // Make the API request
      const user = await createUser(data);

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
          id="firstName"
          required
          type="Name"
          onChange={handleChange}
        />
      </div>
      <div>
        <label for="sign-up-last-name">Last Name</label>
        <input
          id="lastName"
          required
          type="Name"
          onChange={handleChange}
        />
      </div>
      <div>
        <label for="sign-up-email">Email</label>
        <input
          id="email"
          required
          type="email"
          onChange={handleChange}
        />
      </div>
      <div>
        <label for="sign-up-password">Password</label>
        <input
          id="password"
          required
          type="password"
          onChange={handleChange}
        />
      </div>
      <div>
        <label for="sign-up-confirm-password">Confirm Password</label>
        <input
          id="confirmPassword"
          required
          type="password"
          onChange={handleChange}
        />
      </div>
      <button type="submit">Sign Up</button>
    </form>
    <Link to="/">Back to Home</Link>
    </div>
  );
};

export default SignUp;
