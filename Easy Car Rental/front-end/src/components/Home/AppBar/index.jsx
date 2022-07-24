import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import CarRentalTwoToneIcon from '@mui/icons-material/CarRentalTwoTone';
import 'react-slideshow-image/dist/styles.css'
import Stack from '@mui/material/Stack';
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import {useNavigate} from "react-router";
import image from "../../../assets/img/easy_car_rental__3_-removebg-preview.png";

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const TransparentAppBar = () => {
    const navigate = useNavigate();

    const [anchorElNav, setAnchorElNav] = React.useState(null)
    const [anchorElUser, setAnchorElUser] = React.useState(null)

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const register=(e)=>{
        navigate('/register');
    }

    const login=(e)=>{
        navigate('/login');
    }

    return (
        <AppBar position="absolute" style={{background: 'transparent', boxShadow: 'none',width:'100vw', height:'60px'}}>
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{justifyContent: "space-between"}}>
                    <Stack direction="row" spacing={2}>
                        {/*<CarRentalTwoToneIcon sx={{display: {xs: 'none', md: 'flex',}, mr: 1, color: 'white'}}/>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: {xs: 'none', md: 'flex'},
                                fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'white',
                                textDecoration: 'none',
                            }}
                        >
                            EASY CAR RENTAL
                        </Typography>*/}
                        <Stack height={'100%'}>
                            <img src={image} alt="logo" height={'100%'}/>
                        </Stack>
                    </Stack>
                    <Stack direction="row" spacing={3}>
                        <Button
                            sx={{color: 'white',fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
                            }}
                            startIcon={<LoginIcon/>}
                            onClick={login}
                        >Login</Button>

                        <Button
                            sx={{color: 'white', fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',   }}
                            startIcon={<HowToRegIcon/>}
                            onClick={register}
                        >Register</Button>
                    </Stack>
                </Toolbar>


            </Container>
        </AppBar>
    )
};
export default TransparentAppBar;
