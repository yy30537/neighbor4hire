import React from 'react';
import '../css/SignUp.css';

function SignUp() {
  return (
    <div className="SignUp">
    <h1>Sign Up</h1>
    <form>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />

        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="location">Location:</label>
        <input type="text" id="location" name="location" required />

        <label htmlFor="skills">Skills:</label>
        <input type="text" id="skills" name="skills" required />

        <button type="submit">Sign Up</button>
    </form>
    <div className="social-sign-up">
        <button>Sign Up with Google</button>
        <button>Sign Up with Facebook</button>
    </div>
    <p>
        Already have an account? <a href="/login">Log In</a>
    </p>
    </div>
  );
}

export default SignUp;