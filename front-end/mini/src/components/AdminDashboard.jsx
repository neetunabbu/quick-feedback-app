import React, { useEffect, useState } from 'react';
import '../AdminDashboard.css';
import { Base_url } from './constant';

const AdminDashboard = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  const fetchFeedbacks = async () => {
    try {
      const response = await fetch(`${Base_url}/api/feedback`);
      const data = await response.json();
      setFeedbacks(data);
    } catch (error) {
      console.error('Error fetching feedbacks:', error);
    }
  };

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const handleClearFeedback = async () => {
    try {
      const response = await fetch(`${Base_url}/api/feedback`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setFeedbacks([]);
        alert('All Feedback Cleared Successfully!');
      } else {
        alert('Failed to clear feedback.');
      }
    } catch (error) {
      console.error('Error clearing feedback:', error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('isAdminLoggedIn');
    alert('Logged Out Successfully');
    window.location.href = '/admin-login';
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
