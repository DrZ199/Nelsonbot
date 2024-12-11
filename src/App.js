import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Header from './components/Header';
import Chat from './components/Chat';
import Footer from './components/Footer';
import { AuthProvider } from './hooks/useAuth';
import './styles/App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: '#00796B',
      },
      secondary: {
        main: '#E0E0E0',
      },
      background: {
        default: darkMode ? '#121212' : '#F5F5F5',
        paper: darkMode ? '#1E1E1E' : '#FFFFFF',
      },
    },
    typography: {
      fontFamily: 'Roboto, Arial, sans-serif',
    },
  });

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthProvider>
        <div className="app">
          <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
          <Container component="main" className="main-content">
            <Chat />
          </Container>
          <Footer />
        </div>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;