import React, { useState } from 'react'
import { Box, TextField, Button, Typography } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'

interface Message {
  sender: 'user' | 'bot'
  text: string
}

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')

  const handleSend = async () => {
    if (input.trim() === '') return

    const userMessage: Message = { sender: 'user', text: input }
    setMessages((prev) => [...prev, userMessage])
    setInput('')

    // Simulating AI response (replace with actual API call in production)
    setTimeout(() => {
      const botMessage: Message = {
        sender: 'bot',
        text: "I'm NelsonBot, an AI assistant based on the Nelson Textbook of Pediatrics. How can I help you today?",
      }
      setMessages((prev) => [...prev, botMessage])
    }, 1000)
  }

  return (
    <Box sx={{ height: 'calc(100vh - 180px)', display: 'flex', flexDirection: 'column' }}>
      <Box
        sx={{
          flexGrow: 1,
          overflowY: 'auto',
          p: 2,
          backgroundColor: '#FFFFFF',
          borderRadius: 2,
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          mb: 2,
        }}
      >
        {messages.map((msg, idx) => (
          <Box
            key={idx}
            sx={{
              display: 'flex',
              justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start',
              mb: 2,
            }}
          >
            <Box
              sx={{
                backgroundColor: msg.sender === 'user' ? '#80CBC4' : '#E0E0E0',
                color: msg.sender === 'user' ? '#FFFFFF' : '#212121',
                borderRadius: '15px',
                p: 2,
                maxWidth: '70%',
              }}
            >
              <Typography variant="body1">{msg.text}</Typography>
            </Box>
          </Box>
        ))}
      </Box>
      <Box sx={{ display: 'flex', gap: 1 }}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Ask NelsonBot..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: '20px',
            },
          }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSend}
          sx={{ borderRadius: '20px', minWidth: '50px' }}
        >
          <SendIcon />
        </Button>
      </Box>
    </Box>
  )
}

