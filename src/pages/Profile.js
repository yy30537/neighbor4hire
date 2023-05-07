import React from 'react';
import '../css/Profile.css';
import { Link } from 'react-router-dom';

function Profile() {
  return (
    <div className="Profile">
      <header>
        <h1>Neighbor4Hire</h1>
        <nav>
          <ul>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/logout">Logout</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <h2>Your Profile</h2>
        {/* Display user profile information */}
        {/* Add edit profile button */}
      </main>
    </div>
  );
}

export default Profile;