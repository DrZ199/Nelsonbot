import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton } from '@mui/material';
import { Home as HomeIcon, Brightness4 as DarkModeIcon, Brightness7 as LightModeIcon } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';

const HamburgerMenu = ({ isOpen, onClose, toggleDarkMode }) => {
  const theme = useTheme();

  return (
    <Drawer anchor="right" open={isOpen} onClose={onClose}>
      <List>
        <ListItem button onClick={onClose}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button onClick={toggleDarkMode}>
          <ListItemIcon>
            {theme.palette.mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
          </ListItemIcon>
          <ListItemText primary={`${theme.palette.mode === 'dark' ? 'Light' : 'Dark'} Mode`} />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default HamburgerMenu;

