import React from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
    <div>
      <form id="sign-in">
      <h2>Sign In</h2>
      <div>
        <label for="sign-in-email">Email</label>
        <input
          id="sign-in-email"
          autocomplete="email"
        />
      </div>
      <div>
        <label for="sign-in-password">Password</label>
        <input
          id="sign-in-password"
          type="password"
          autocomplete="current-password"
        />
      </div>
      <button>Sign In</button>
    </form>
    <Link to="/">Back to Home</Link>
    </div>
  );
};

export default SignIn;
