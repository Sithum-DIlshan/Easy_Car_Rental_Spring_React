import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from "@mui/material/Stack";

export default function ImgMediaCard() {
    return (
        <Stack sx={{height: '100vh', width: '100vw', maxWidth: '100%'}} direction={'row'} spacing={8}
               justifyContent={'center'} alignItems={'center'} >
            <Card sx={{maxWidth: 345}}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image="https://media.istockphoto.com/photos/black-modern-car-3d-illustration-picture-id1191941530?k=20&m=1191941530&s=612x612&w=0&h=YTPpoHwIq_kLkc4CZk43XGhqdFBrNUHBssaVKAXKst4="
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Luxury
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card><Card sx={{maxWidth: 345}}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image="https://global.honda/top-page/common/img/newsroom/4220712eng.jpg"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Semi-Luxury
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card><Card sx={{maxWidth: 345}}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image="https://www.drivespark.com/images/2018-06/tata-nano-exterior-2.jpg"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Mini
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
        </Stack>
    );
}
