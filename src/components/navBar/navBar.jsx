import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Carrito from "./CartWidget"
import Contacto from '../body/Contacto';
import {Link} from 'react-router-dom'
import MenuListComposition from './DropDownMenu';


export default function MenuAppBar() {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);


  return (
    <Box sx={{ flexGrow: 1 }}>
  <AppBar position="static" sx={{ backgroundColor: 'black' }}> {/* Establece el fondo negro */}
    <Toolbar>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
      />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'white' }}> 
        <Link to="/" className='contacto'>
          Home
        </Link>
        </Typography>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'white' }}>
          <Link to="/about" className='contacto'>
            Sobre Nosotros
          </Link>
        </Typography>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'white' }}>
        <Link to ="/contacto" className='contacto' >
        Contacto
        </Link>
      </Typography>
      <MenuListComposition />
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


