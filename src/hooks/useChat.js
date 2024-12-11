import { useState, useCallback } from 'react';
import { sendMessage as sendMessageApi } from '../api/llamaApi';

function useChat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = useCallback(async () => {
    if (!input.trim()) return;

    const userMessage = { sender: 'user', text: input };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInput('');

    try {
      const response = await sendMessageApi(input);
      const botMessage = { sender: 'bot', text: response };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage = { sender: 'bot', text: 'Sorry, I encountered an error. Please try again.' };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    }
  }, [input]);

  return { messages, input, setInput, sendMessage };
}

export default useChat;

