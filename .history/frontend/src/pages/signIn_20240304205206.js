import React, { useState }from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signIn } from '../services/api';


const SignIn = () => {
  const [formData, setFormData] = useState({
    id: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate(); // Get access to the history object

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
      const user = await signIn(formData);

      // redirect to a home page
      console.log('User logged in successfully:', user);
      navigate('/', { state: { user } });
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
        <label for="sign-in-id">User ID</label>
        <input
          id="id"
          required
          type="Id"
          onChange={handleChange}
        />
      </div>
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
    <Link to="/signup">Don't have an account? Sign Up</Link>
    </div>
  );
};

export default SignIn;
