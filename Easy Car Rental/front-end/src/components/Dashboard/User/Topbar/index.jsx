import * as React from 'react';
import Stack from "@mui/material/Stack";
import {Avatar, Badge, Divider, IconButton, ListItemIcon, Menu, MenuItem, Tooltip} from "@mui/material";
import {Settings} from "@material-ui/icons";
import {Logout} from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import image from "../../../../assets/img/easy car rental.png";
import Popup from "reactjs-popup";
import LoginForm from "../../../Login/Form/LoginForm";
import {styled} from "@mui/material/styles";
import {useNavigate} from "react-router";
import {useEffect} from "react";

export default function Topbar(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [data, setData] = React.useState(props.data);
    const[avatar, setAvatar] = React.useState("data:image/png;base64," + data.avatar);
    const[color, setColor] = React.useState(decideColor);
    const navigate = useNavigate();

    useEffect(() => {
/*
        loadUserReqs();
*/
    }, []);



    function decideColor() {
        if (!data.verified){
            return '#ff0000'
        } return '#44b700'
    }

    const logout = (e)=>{
        navigate('/');
    }

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            backgroundColor: color,
            color: color,
            boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
            '&::after': {
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                animation: 'ripple 1.2s infinite ease-in-out',
                border: '1px solid currentColor',
                content: '""',
            },
        },
        '@keyframes ripple': {
            '0%': {
                transform: 'scale(.8)',
                opacity: 1,
            },
            '100%': {
                transform: 'scale(2.4)',
                opacity: 0,
            },
        },
    }));


    return (

        <Stack width={'100vw'}
               height={'auto'}
               direction={'column'}>
            <Stack width={'100%'}
                   height={'70px'}
                   flexDirection={'row'}
                   alignItems={'center'}
                   justifyContent={'space-between'}
                   mt={'15px'}
            >
                <Stack height={'100%'}>
                    <img src={image} alt="logo" height={'100%'}/>
                </Stack>
                <Stack height={'100%'} width={'25%'}>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                        width: '100%'
                    }}>
                        <Typography fontFamily={'revert-layer'} pr={'50px'} sx={{
                            '&:hover': {
                                cursor: 'pointer'
                            }
                        }}>Contact us</Typography>
                        <Typography fontFamily={'revert-layer'} pr={'50px'} sx={{
                            '&:hover': {
                                cursor: 'pointer'
                            }
                        }}>About us</Typography>
                        <Tooltip title="Account settings">
                            <IconButton
                                onClick={handleClick}
                                size="small"
                                sx={{ml: 2}}
                                aria-controls={open ? 'account-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                            >
                                <StyledBadge
                                    overlap="circular"
                                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                    variant="dot"
                                >
                                <Avatar sx={{width: 32, height: 32}} src={avatar}>M</Avatar>
                                </StyledBadge>
                            </IconButton>


                        </Tooltip>

                    </Box>
                    <Menu
                        anchorEl={anchorEl}
                        id="account-menu"
                        open={open}
                        onClose={handleClose}
                        onClick={handleClose}
                        PaperProps={{
                            elevation: 0,
                            sx: {
                                overflow: 'visible',
                                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                mt: 1.5,
                                '& .MuiAvatar-root': {
                                    width: 32,
                                    height: 32,
                                    ml: -0.5,
                                    mr: 1,
                                },
                                '&:before': {
                                    content: '""',
                                    display: 'block',
                                    position: 'absolute',
                                    top: 0,
                                    right: 14,
                                    width: 10,
                                    height: 10,
                                    bgcolor: 'background.paper',
                                    transform: 'translateY(-50%) rotate(45deg)',
                                    zIndex: 0,
                                },
                            },
                        }}
                        transformOrigin={{horizontal: 'right', vertical: 'top'}}
                        anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
                    >
                        <MenuItem>
                            <Avatar src={avatar}/> Profile
                        </MenuItem>
                        <Divider/>

                        <MenuItem>
                            <ListItemIcon>
                                <Settings fontSize="small"/>
                            </ListItemIcon>
                            Settings
                        </MenuItem>
                        <MenuItem onClick={logout}>
                            <ListItemIcon>
                                <Logout fontSize="small"/>
                            </ListItemIcon>
                            Logout
                        </MenuItem>
                    </Menu>
                </Stack>
            </Stack>
        </Stack>
    );
}
