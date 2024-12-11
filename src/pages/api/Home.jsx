import React from 'react';
import ChatBox from '../components/ChatBox';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home">
      <h1>Welcome to NelsonBot</h1>
      <p>Get expert insights from the Nelson Textbook of Pediatrics using advanced AI.</p>
      <ChatBox />
    </div>
  );
}

export default Home;