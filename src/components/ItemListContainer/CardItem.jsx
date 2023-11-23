import * as React from 'react';
import {useState} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';



const CardItem = ({ item }) => {
  const [carrito, setCarrito] = useState([]);
  const handleAgregarAlCarrito = () => {
    const nuevoCarrito = [...carrito, item];
    setCarrito(nuevoCarrito);
  }
  return (
    <Box sx={{ display: "grid", gap: 2, maxWidth: 400, mx: "auto" }}>
      <Card sx={{ maxWidth: 400 }}>
        <CardMedia className='imagen' sx={{ height: 250, width: 230 }} image={item.img} title="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.juego}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <span style={{ fontWeight: 'bold' }}>{item.precio}</span>
          </Typography>
          <Typography className='bold' variant="body2" color="text.secondary" fontFamily={"bold"}>
            {item.categoria}
          </Typography>
        </CardContent>
        <CardActions>
        <Button variant="contained" color="primary" onClick={handleAgregarAlCarrito}>
          Agregar al carrito
        </Button>
      </CardActions>
      </Card>
    </Box>
  );
};

export default CardItem