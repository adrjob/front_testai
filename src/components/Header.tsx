import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SmartToyIcon from '@mui/icons-material/SmartToy';

import { Link } from 'react-router-dom';

export default function Header() {
  return (    
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="inherit">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <SmartToyIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            BO.BI.AI
          </Typography>          
          <Link to='/home'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/chatgpt'>ChatGPT</Link>
          <Link to='/contact'>Contact</Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}