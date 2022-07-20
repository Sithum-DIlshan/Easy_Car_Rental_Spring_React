import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Box from "@mui/material/Box";

export default function MultiActionAreaCard() {
    return (
        <Box sx={{width: 'auto', height:'580px', backgroundImage:`url(https://cdn2.rcstatic.com/com.rentalcars.185492029745.eu-west-1.web.prod.static-live/images/landing-pages/home/background-large.jpg)`, backgroundSize:'contain', backgroundRepeat: 'no-repeat'}}>
           {/* <img src="https://cdn2.rcstatic.com/com.rentalcars.185492029745.eu-west-1.web.prod.static-live/images/landing-pages/home/background-large.jpg" alt="" style={{width:'100vw', height:'400px'}}/>*/}
        </Box>
    );
}
