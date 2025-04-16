// File Path: src/components/FeedbackForm.jsx

import React, { useState } from 'react';
import '../FeedbackForm.css';

const FeedbackForm = () => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert('Please enter feedback');
      return;
    }

    const existingFeedback = JSON.parse(localStorage.getItem('feedback')) || [];
    const updatedFeedback = [...existingFeedback, { text }];
    localStorage.setItem('feedback', JSON.stringify(updatedFeedback));

    alert('Feedback Submitted Successfully!');
    setText('');
  };

  return (
    <div className="feedback-container">
      <h2>Submit Feedback</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Write your feedback here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        /><br/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FeedbackForm;
