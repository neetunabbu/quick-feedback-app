import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../Admin.css'; // Correct CSS file path

// 🔑 Add your backend base URL here
const BASE_URL = 'https://quick-feedback-app.onrender.com'; // Your actual backend URL

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send login credentials to the backend API
      const response = await axios.post(`${BASE_URL}/api/admin/admin-login`, {
        username: username,
        password: password,
      });

      if (response.data.success) {
        alert('Login Successful');
        localStorage.setItem('isAdminLoggedIn', true); // Save login status to localStorage
        navigate('/admin-dashboard'); // Navigate to admin dashboard
      } else {
        alert('Invalid Credentials');
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('An error occurred while logging in. Please try again later.');
    }
  };

  return (
    <div className="admin-login-container">
      <h2>Admin Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;
