import React, { useEffect, useState } from 'react';
import '../AdminDashboard.css'; // Correct CSS file path

const AdminDashboard = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const storedFeedback = JSON.parse(localStorage.getItem('feedback')) || [];
    setFeedbacks(storedFeedback);
  }, []);

  const handleClearFeedback = () => {
    localStorage.removeItem('feedback');
    setFeedbacks([]);
    alert('All Feedback Cleared Successfully!');
  };

  const handleLogout = () => {
    localStorage.removeItem('isAdminLoggedIn');
    alert('Logged Out Successfully');
    window.location.href = '/admin-login'; // Redirect to Admin Login page
  };

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Admin Dashboard</h2>

      {feedbacks.length === 0 ? (
        <p className="no-feedback-msg">No Feedback Available</p>
      ) : (
        <ul className="feedback-list">
          {feedbacks.map((feedback, index) => (
            <li key={index} className="feedback-item">{feedback.text}</li>
          ))}
        </ul>
      )}

      <button className="clear-btn" onClick={handleClearFeedback}>
        Clear All Feedback
      </button>
      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default AdminDashboard;