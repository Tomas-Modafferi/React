import {Card, CardMedia, CardContent, Typography} from "@mui/material";


export default function Items(){
    return(
        <Card sx={{ maxWidth: 400 }}>
      <CardMedia className='imagen'
        sx={{ height: 250, width:230 }}
        image={"https://firebasestorage.googleapis.com/v0/b/e-commerce-c2c9d.appspot.com/o/dragonBall.webp?alt=media&token=ecfecd61-bff4-457b-bd28-518d4ae3547f&_gl=1*1fvx0zu*_ga*OTc5MjAyNjYzLjE2OTg2NjY0OTU.*_ga_CW55HF8NVT*MTY5OTMxODIwNi42LjEuMTY5OTMxODU4My41Ny4wLjA."}
        title="green iguana"
        
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {"items.juego"}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            {"items.precio"}
        </Typography>
        <Typography className='bold' variant="body2" color="text.secondary" fontFamily={"bold"}>
            {"items.categoria"}
        </Typography>
      </CardContent>
    </Card>
    )
}