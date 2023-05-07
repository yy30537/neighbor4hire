import React from 'react';
import '../css/PostJob.css';

function PostJob() {
  return (
    <div className="PostJob">
      <header>
        <h1>Neighbor4Hire</h1>
        <nav>
          <ul>
            <li>
              <a href="/dashboard">Dashboard</a>
            </li>
            <li>
              <a href="/profile">Profile</a>
            </li>
            <li>
              <a href="/logout">Logout</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <h2>Post a Job</h2>
        {/* Add form for posting a job */}
      </main>
    </div>
  );
}

export default PostJob;