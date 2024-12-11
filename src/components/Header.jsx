import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, useMediaQuery, Box } from '@mui/material';
import { Menu as MenuIcon, Brightness4 as DarkModeIcon, Brightness7 as LightModeIcon } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import HamburgerMenu from './HamburgerMenu';
import { useAuth } from '../hooks/useAuth';

function Header({ toggleDarkMode, darkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { user, logout } = useAuth();

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: theme.palette.primary.main }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
          NelsonBot
        </Typography>
        {isMobile ? (
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={handleMenuToggle}
          >
            <MenuIcon />
          </IconButton>
        ) : (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton color="inherit" onClick={toggleDarkMode} sx={{ mr: 2 }}>
              {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
            {user && (
              <Typography variant="body1" sx={{ mr: 2 }}>
                Welcome, {user.name}
              </Typography>
            )}
            {user && (
              <IconButton color="inherit" onClick={logout}>
                Logout
              </IconButton>
            )}
          </Box>
        )}
      </Toolbar>
      <HamburgerMenu isOpen={menuOpen} onClose={handleMenuToggle} toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
    </AppBar>
  );
}

export default Header;

