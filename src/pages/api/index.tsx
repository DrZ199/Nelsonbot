import React, { useState } from 'react'
import { AppBar, Toolbar, Typography, Container, Box, TextField, Button } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#00796B',
    },
    secondary: {
      main: '#E0E0E0',
    },
    background: {
      default: '#F5F5F5',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
})

export default function Home() {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<Array<{ text: string; sender: 'user' | 'bot' }>>([])

  const handleSend = async () => {
    if (input.trim() === '') return

    const userMessage = { text: input, sender: 'user' as const }
    setMessages((prev) => [...prev, userMessage])
    setInput('')

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: input }),
      })

      if (!response.ok) {
        throw new Error('Failed to get response from the bot')
      }

      const data = await response.json()
      const botMessage = { text: data.response, sender: 'bot' as const }
      setMessages((prev) => [...prev, botMessage])
    } catch (error) {
      console.error('Error:', error)
      const errorMessage = { text: 'Sorry, I encountered an error. Please try again.', sender: 'bot' as const }
      setMessages((prev) => [...prev, errorMessage])
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <AppBar position="static" sx={{ backgroundColor: '#00796B' }}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: '#fff' }}>
              NelsonBot
            </Typography>
          </Toolbar>
        </AppBar>
        <Container component="main" sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', py: 4 }}>
          <Box sx={{ flexGrow: 1, overflowY: 'auto', mb: 2 }}>
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
              sx={{ borderRadius: '20px', minWidth: '100px' }}
            >
              Send
            </Button>
          </Box>
        </Container>
        <Box
          component="footer"
          sx={{
            py: 3,
            px: 2,
            mt: 'auto',
            backgroundColor: '#004D40',
            color: '#FFFFFF',
            textAlign: 'center',
          }}
        >
          <Typography variant="body2">© 2024 NelsonBot</Typography>
        </Box>
      </Box>
    </ThemeProvider>
  )
}

