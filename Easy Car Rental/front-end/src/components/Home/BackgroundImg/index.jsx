import * as React from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";

export default function BackGroundImage() {
    const scroll=()=>{
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth'
        })
    }
    return (
        <Stack direction={'column'}>
            <Box sx={{
                backgroundImage: `url(https://cdn2.rcstatic.com/com.rentalcars.185492029745.eu-west-1.web.prod.static-live/images/landing-pages/home/background-large.jpg)`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                width: '100vw',
                height: '100vh',
                maxWidth: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection:'column',
            }}>

                <Card sx={{
                    backgroundColor: 'transparent',
                    width: '40%',
                    position: 'relative',
                    right: '20%',
                    bottom: '50px',

                }}>
                    <Typography color={'white'}
                                fontFamily={'-apple-system, BlinkMacSystemFont, sans-serif'} fontSize={'50px'}
                                fontWeight={'600'}>
                        Easy-Car-Rental
                    </Typography>
                    <Typography color={'white'} fontFamily={'-apple-system, BlinkMacSystemFont, sans-serif'}
                                fontSize={'30px'} fontWeight={'300'}>
                        Car Rental – Search, Compare & Save
                        Free cancellations on most bookings
                        60,000+ locations

                    </Typography>

                    <Typography color={'white'} fontFamily={'-apple-system, BlinkMacSystemFont, sans-serif'}
                                fontSize={'30px'} fontWeight={'300'}>
                    Customer support in 40+ languages
                    </Typography>


                </Card>

            </Box>
            <Stack position={'relative'} bottom={'70px'} direction="row" justifyContent={'center'}>
                <Button variant={'outlined'} sx={{color:'white', fontSize:'24px', fontFamily:'-apple-system, BlinkMacSystemFont, sans-serif'}} size={'large'} color={"info"} >Register</Button>
            </Stack>
        </Stack>
    );
}
