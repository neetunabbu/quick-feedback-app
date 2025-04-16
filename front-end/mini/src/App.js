import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Quick Feedback App</h1>

        <nav>
          <Link to="/">Home</Link> |{" "}
          <Link to="/admin-login">Admin Login</Link> |{" "}
          <Link to="/admin-dashboard">Admin Dashboard</Link>
        </nav>

        <Routes>
          <Route path="/" element={
            <>
              <FeedbackForm />
              <FeedbackList />
            </>
          } />

          <Route path="/admin-login" element={<AdminLogin />} />

          <Route
            path="/admin-dashboard"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
