import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function AppHeader() {
  return (
    <AppBar position="static" sx={{ backgroundColor:"#1C1C21" }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          QuickNotes
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default AppHeader;
