import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, useMediaQuery } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import HamburgerMenu from './HamburgerMenu';
import ThemeToggle from './ThemeToggle';
import { useAuth } from '../hooks/useAuth';

function Header({ toggleDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { user, logout } = useAuth();

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <img src="/logo.svg" alt="NelsonBot Logo" className="app-logo" />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          NelsonBot
        </Typography>
        {isMobile && (
          <>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={() => setMenuOpen(true)}
            >
              <MenuIcon />
            </IconButton>
            <HamburgerMenu
              isOpen={menuOpen}
              onClose={() => setMenuOpen(false)}
              toggleDarkMode={toggleDarkMode}
            />
          </>
        )}
        {!isMobile && (
          <>
            <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            {user ? (
              <Typography variant="body1" sx={{ marginRight: 2 }}>
                Welcome, {user.name}
              </Typography>
            ) : null}
            {user ? (
              <IconButton color="inherit" onClick={logout}>
                Logout
              </IconButton>
            ) : null}
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Header;

