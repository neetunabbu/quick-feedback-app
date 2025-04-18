import React, { useState } from 'react';
import '../FeedbackForm.css';
import { Base_url } from './constant';

const FeedbackForm = () => {
  const [text, setText] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!text) {
      alert('Please enter feedback');
      return;
    }

    try {
      const response = await fetch(`${Base_url}/api/feedback`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text }),
      });

      if (response.ok) {
        alert('Feedback Submitted Successfully!');
        setText('');
      } else {
        alert('Failed to submit feedback.');
      }
    } catch (error) {
      alert('Error submitting feedback.');
      console.error(error);
    }
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
