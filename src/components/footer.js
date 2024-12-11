import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { useTheme } from '@mui/material/styles';

function Footer() {
  const theme = useTheme();

  return (
    <Box component="footer" sx={{ bgcolor: theme.palette.primary.main, py: 3, color: 'white' }}>
      <Typography variant="body2" align="center">
        © {new Date().getFullYear()} NelsonBot |{' '}
        <Link color="inherit" href="/privacy">
          Privacy Policy
        </Link>{' '}
        |{' '}
        <Link color="inherit" href="/terms">
          Terms of Service
        </Link>
      </Typography>
    </Box>
  );
}

export default Footer;

