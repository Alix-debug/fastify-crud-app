// src/pages/SignUp.js
import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div>
      <h2>Sign Up Page</h2>
      <form id="sign-up">
      <h2>Sign Up</h2>
      <div>
        <label for="sign-up-first-name">First Name</label>
        <input
          autocomplete="fisrt-name"
          id="sign-up-first-name"
          required
          type="firstName"
          value="Name"
        />
      </div>
      <div>
        <label for="sign-up-last-name">Last Name</label>
        <input
          autocomplete="lastName"
          id="sign-up-last-name"
          required
          type="lastName"
          value="Name"
        />
      </div>
      <div>
        <label for="sign-up-email">Email</label>
        <input
          autocomplete="email"
          id="sign-up-email"
          required
          type="email"
          value="your@email.com"
        />
      </div>
      <div>
        <label for="sign-up-password">Password</label>
        <input
          autocomplete="current-password"
          id="sign-up-password"
          required
          type="password"
          value="secret"
        />
      </div>
      <div>
        <label for="sign-up-confirm-password">Confirm Password</label>
        <input
          autocomplete="current-password"
          id="sign-up-confirm-password"
          required
          type="password"
          value="secret"
        />
      </div>
      <button>Sign Up</button>
    </form>
    <Link to="/">Back to Home</Link>
    </div>
  );
};

export default SignUp;
