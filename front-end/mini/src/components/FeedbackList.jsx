import React, { useEffect, useState } from 'react';
import { Base_url } from './constant';

const FeedbackList = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const response = await fetch(`${Base_url}/api/feedback`);
        const data = await response.json();
        setFeedbacks(data);
      } catch (error) {
        console.error('Error fetching feedbacks:', error);
      }
    };

    fetchFeedbacks();
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
