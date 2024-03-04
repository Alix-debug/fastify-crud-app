// src/pages/SignIn.js
import React from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
    <div>
      <h2>Sign In Page</h2>
      <form id="sign-in">
      <h2>Sign In</h2>
      <div>
        <label for="sign-in-email">Email</label>
        <input
          id="sign-in-email"
          autocomplete="email"
          value="your@mail.com"
        />
      </div>
      <div>
        <label for="sign-in-password">Password</label>
        <input
          id="sign-in-password"
          type="password"
          autocomplete="current-password"
          value="secret"
        />
      </div>
      <button>Sign In</button>
    </form>
    <Link to="/">Back to Home</Link>
    </div>
  );
};

export default SignIn;
