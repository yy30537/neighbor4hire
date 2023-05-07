import React from 'react';
import '../css/Login.css';

function Login() {
  return (
    <div className="Login">
      <h1>Log In</h1>
      <form>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />

        <button type="submit">Log In</button>
      </form>
      <div className="social-login">
        <button>Log In with Google</button>
        <button>Log In with Facebook</button>
      </div>
      <p>
        Don't have an account? <a href="/signup">Sign Up</a>
      </p>
    </div>
  );
}

export default Login;