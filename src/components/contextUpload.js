import React, { useState } from 'react';
import { Button, TextField, Box } from '@mui/material';

const ContextUpload = ({ onContextSet }) => {
  const [context, setContext] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onContextSet(context);
    setContext('');
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mb: 2 }}>
      <TextField
        fullWidth
        multiline
        rows={4}
        variant="outlined"
        placeholder="Provide context for the chat (e.g., 'Answer based on this text...')"
        value={context}
        onChange={(e) => setContext(e.target.value)}
        sx={{ mb: 1 }}
      />
      <Button type="submit" variant="contained" color="secondary">
        Set Context
      </Button>
    </Box>
  );
};

export default ContextUpload;

