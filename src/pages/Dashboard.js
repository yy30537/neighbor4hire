import React from 'react';
import '../css/Dashboard.css';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div className="Dashboard">
      <header>
        <h1>Neighbor4Hire</h1>
        <nav>
          <ul>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/logout">Logout</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <div className="search-bar">
          <input type="text" placeholder="Search jobs..." />
          {/* Add filter options */}
        </div>
        <div className="job-listings">
          {/* Render a list of available jobs */}
        </div>
        <Link to="/postJob">
          <button>Post a Job</button>
        </Link>
      </main>
    </div>
  );
}

export default Dashboard;