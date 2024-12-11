import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton, Box } from '@mui/material';
import { Home as HomeIcon, Info as InfoIcon, Feedback as FeedbackIcon, Brightness4 as DarkModeIcon, Brightness7 as LightModeIcon } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import { useAuth } from '../hooks/useAuth';

const HamburgerMenu = ({ isOpen, onClose, toggleDarkMode, darkMode }) => {
  const theme = useTheme();
  const { user, logout } = useAuth();

  const menuItems = [
    { text: 'Home', icon: <HomeIcon />, path: '/' },
    { text: 'About', icon: <InfoIcon />, path: '/about' },
    { text: 'Feedback', icon: <FeedbackIcon />, path: '/feedback' },
  ];

  return (
    <Drawer
      anchor="right"
      open={isOpen}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: 250,
          backgroundColor: theme.palette.background.paper,
          color: theme.palette.text.primary,
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
        }}
      >
        <List>
          {menuItems.map((item) => (
            <ListItem button key={item.text} onClick={onClose} component="a" href={item.path}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
          <ListItem button onClick={toggleDarkMode}>
            <ListItemIcon>
              {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
            </ListItemIcon>
            <ListItemText primary={darkMode ? 'Light Mode' : 'Dark Mode'} />
          </ListItem>
        </List>
        <Box sx={{ flexGrow: 1 }} />
        {user && (
          <List>
            <ListItem>
              <ListItemText primary={`Logged in as ${user.name}`} />
            </ListItem>
            <ListItem button onClick={logout}>
              <ListItemText primary="Logout" />
            </ListItem>
          </List>
        )}
      </Box>
    </Drawer>
  );
};

export default HamburgerMenu;

