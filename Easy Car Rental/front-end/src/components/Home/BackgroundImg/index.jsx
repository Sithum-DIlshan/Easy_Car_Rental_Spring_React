import * as React from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import {IconButton} from "@mui/material";

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
                backgroundImage: `url(https://legendary-digital-network-assets.s3.amazonaws.com/wp-content/uploads/2020/09/13023140/Supernatural-Featured.jpg)`,
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
                                fontSize={'24px'} fontWeight={'300'} width={'230px'}>
                        Car Rental – Search, Compare & Save
                        Free cancellations on most bookings


                    </Typography>

                    <Typography color={'white'} fontFamily={'-apple-system, BlinkMacSystemFont, sans-serif'}
                                fontSize={'19px'} fontWeight={'300'} width={'250px'}>
                        60,000+ locations
                    Customer support in 40+ languages
                    </Typography>


                </Card>

            </Box>
            <Stack position={'relative'} bottom={'70px'} direction="row" justifyContent={'center'}>
                <IconButton var aria-label="delete" size={'large'} sx={{
                    backgroundColor:'white',

                    '&:hover': {
                    backgroundColor: '#ffff',
                    borderColor: '#ffff',
                    boxShadow: 'none',
                }
                }} onClick={scroll}>
                    <KeyboardDoubleArrowDownIcon color={'white'} />
                </IconButton>
            </Stack>
        </Stack>
    );
}
