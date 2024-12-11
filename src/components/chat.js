import React, { useRef, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import MessageBubble from './MessageBubble';
import useChat from '../hooks/useChat';
import '../styles/Chat.css';

function Chat() {
  const { messages, input, setInput, sendMessage } = useChat();
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage();
  };

  return (
    <Box className="chat-container">
      <Box className="messages-container">
        {messages.map((message, index) => (
          <MessageBubble key={index} message={message} />
        ))}
        <div ref={messagesEndRef} />
      </Box>
      <form onSubmit={handleSubmit} className="input-form">
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Ask NelsonBot..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          endIcon={<SendIcon />}
        >
          Send
        </Button>
      </form>
    </Box>
  );
}

export default Chat;

