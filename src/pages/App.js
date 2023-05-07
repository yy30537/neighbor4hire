import React from 'react';
import '../css/App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header>
        <div className="header-container">
          <h1>Neighbor4Hire</h1>
        </div>
      </header>
      <main>
        <div className="login-section">
          <h2>Find skilled neighbors for hire!</h2>
          <div className="button-container">
            <Link to="/signup">
              <button>Sign Up</button>
            </Link>
            <Link to="/login">
              <button>Log In</button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
