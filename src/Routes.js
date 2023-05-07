import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './pages/App';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile'
import PostJob from './pages/PostJob'; 

function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/postJob" element={<PostJob />} />
            </Routes>
        </Router>
    );
}

export default AppRoutes;