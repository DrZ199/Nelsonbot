import React, { useState, useRef, useEffect } from 'react';
import { Box, TextField, Button, Typography, CircularProgress } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import MessageBubble from './MessageBubble';
import useGardio from '../hooks/useGardio';
import ContextUpload from './ContextUpload';
import styles from '../styles/Chat.module.css';

function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [context, setContext] = useState('');
  const { fetchResponse, loading } = useGardio();
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const savedMessages = JSON.parse(localStorage.getItem("chatMessages")) || [];
    setMessages(savedMessages);
  }, []);

  useEffect(() => {
    localStorage.setItem("chatMessages", JSON.stringify(messages));
  }, [messages]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMessage = { sender: 'user', text: input };
    setMessages(prev => [...prev, userMessage, { sender: 'bot', text: 'Assistant is typing...', isTemporary: true }]);
    setInput('');

    try {
      const response = await fetchResponse(input, context);
      setMessages(prev => [...prev.filter(msg => !msg.isTemporary), { sender: 'bot', text: response }]);
    } catch (error) {
      setMessages(prev => [...prev.filter(msg => !msg.isTemporary), { sender: 'bot', text: 'An error occurred. Please try again.', isError: true }]);
    }
  };

  return (
    <Box className={styles['chat-container']}>
      <ContextUpload onContextSet={setContext} />
      <Box className={styles.messages}>
        {messages.map((message, index) => (
          <MessageBubble key={index} message={message} />
        ))}
        <div ref={messagesEndRef} />
      </Box>
      <form onSubmit={handleSubmit} className={styles['input-bar']}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Ask NelsonBot..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={loading}
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: '20px',
            },
          }}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={loading}
          sx={{ borderRadius: '20px', minWidth: '50px', ml: 1 }}
        >
          {loading ? <CircularProgress size={24} /> : <SendIcon />}
        </Button>
      </form>
    </Box>
  );
}

export default Chat;

