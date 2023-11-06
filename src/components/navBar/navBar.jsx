import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Carrito from "./CartWidget"


export default function MenuAppBar() {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            New Collection
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            About Us
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            NewsTeller
          </Typography>
          {auth && (
            <div> 
              <Carrito/>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}


