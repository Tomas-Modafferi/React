import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import imagenInstagram from '../../assets/img/instagram.png'
import imagenX from '../../assets/img/x.webp'
import imagenFaceBook from '../../assets/img/facebook.png'



const MediaCard = ()=> {
    const theme = useTheme();
  
    return (
        <div>
            <Card sx={{ display: 'flex' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h5">
              game-center
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              Instagram
            </Typography>
          </CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          </Box>    
        </Box>
       <img src={imagenInstagram} className='insta'>
       </img>
      </Card>
      <Card sx={{ display: 'flex' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h5">
              game_center
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              FaceBook
            </Typography>
          </CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          </Box>    
        </Box>
       <img src={imagenFaceBook} className='insta'>
       </img>
      </Card>
      <Card sx={{ display: 'flex' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h5">
              game.center
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              X
            </Typography>
          </CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          </Box>    
        </Box>
       <img src={imagenX} className='insta'>
       </img>
      </Card>
        </div>
      
      
    );
  }
  export default MediaCard;

