import React from 'react';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import styles from '../styles/Chat.module.css';

function MessageBubble({ message }) {
  const theme = useTheme();
  const isUser = message.sender === 'user';

  return (
    <Box
      className={`${styles['message-bubble']} ${isUser ? styles.user : styles.bot}`}
      sx={{
        backgroundColor: message.isError 
          ? theme.palette.error.light
          : isUser 
            ? theme.palette.primary.main 
            : theme.palette.background.paper,
        color: isUser ? theme.palette.primary.contrastText : theme.palette.text.primary,
        fontStyle: message.isTemporary ? 'italic' : 'normal',
      }}
    >
      <Typography variant="body1">{message.text}</Typography>
    </Box>
  );
}

export default MessageBubble;