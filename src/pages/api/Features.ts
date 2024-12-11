import React from 'react';
import '../styles/Features.css';

function Features() {
  return (
    <div className="features">
      <h1>NelsonBot Features</h1>
      <div className="feature">
        <h2>AI-Powered Responses</h2>
        <p>Get accurate and insightful answers based on the Nelson Textbook of Pediatrics.</p>
      </div>
      <div className="feature">
        <h2>Multiple Assistant Roles</h2>
        <p>Interact with NelsonBot as a Support Agent, Teacher, or Storyteller.</p>
      </div>
      <div className="feature">
        <h2>Customizable AI Parameters</h2>
        <p>Adjust settings like max tokens, temperature, and top P for tailored responses.</p>
      </div>
      <div className="feature">
        <h2>Progressive Web App</h2>
        <p>Install NelsonBot on your device for quick and easy access, even offline.</p>
      </div>
    </div>
  );
}

export default Features;

