import React, { useEffect, useState } from 'react';

const FeedbackList = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const storedFeedback = JSON.parse(localStorage.getItem('feedback')) || [];
    setFeedbacks(storedFeedback);
  }, []);

  return (
    <div>
      <h2>All Feedback</h2>
      {feedbacks.length === 0 ? (
        <p>No Feedback Found</p>
      ) : (
        <ul>
          {feedbacks.map((feedback, index) => (
            <li key={index}>{feedback.text}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FeedbackList;
