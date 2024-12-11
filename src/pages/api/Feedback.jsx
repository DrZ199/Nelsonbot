import React, { useState } from 'react';
import '../styles/Feedback.css';

function Feedback() {
  const [feedback, setFeedback] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the feedback to your server
    console.log('Feedback submitted:', { feedback, email });
    setSubmitted(true);
  };

  return (
    <div className="feedback">
      <h1>Provide Feedback</h1>
      {submitted ? (
        <p>Thank you for your feedback!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="feedback">Your Feedback:</label>
            <textarea
              id="feedback"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Your Email (optional):</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit">Submit Feedback</button>
        </form>
      )}
    </div>
  );
}

export default Feedback;

