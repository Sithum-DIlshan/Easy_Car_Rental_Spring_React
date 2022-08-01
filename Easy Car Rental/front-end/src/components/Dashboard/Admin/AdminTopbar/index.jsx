import * as React from 'react';
import Stack from "@mui/material/Stack";
import {Avatar, Badge, Divider, IconButton, ListItemIcon, Menu, MenuItem, Tooltip} from "@mui/material";
import {Settings} from "@material-ui/icons";
import {Logout} from "@mui/icons-material";
import Box from "@mui/material/Box";
import image from "../../../../assets/img/easy car rental.png";
import MailIcon from '@mui/icons-material/Mail';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import UserReqs from "../UserRequests";
// import Cars from "../../Admin/Cars";
import RentReqs from "../RentRequests";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import avatar from "../../../../assets/img/Untitled design.png";
import Cars from "../Cars";
import {useEffect} from "react";
import UserService from "../../../../services/UserService";

export default function AdminTopbar(props) {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [displayUsrReqs, setDisplayUsrReqs] = React.useState('none');
    const [displayCars, setDisplayCars] = React.useState('static');
    const [displayRentReqs, setDisplayRentReqs] = React.useState('none');
    const [userReqCount, setUserReqCount] = React.useState(0);

    const loadUserReqs = async () => {
        let res = await UserService.fetchUser();
        setUserReqCount(res.data.data.length);
    }

    useEffect(() => {
        loadUserReqs();
    }, []);


    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    function notificationsLabel(count) {
        if (count === 0) {
            return 'no notifications';
        }
        if (count > 99) {
            return 'more than 99 notifications';
        }
        return `${count} notifications`;
    }

    const carClass = [
        {
            username: 'sithum',
            label: 'Luxury',
        },
        {
            username: 'saman',
            label: 'Semi-luxury',
        },
        {
            username: 'ajith',
            label: 'Mini',
        },
        {
            username: 'sithum',
            label: 'Mini',
        },
        {
            username: 'sithum',
            label: 'Luxury',
        },
        {
            username: 'sithum',
            label: 'Semi-luxury',
        },
        {
            username: 'haraka',
            label: 'Mini',
        },
        {
            username: 'ponnaya',
            label: 'Mini',
        },
    ];


    function loadUsrReqs(){
        setDisplayCars('none');
        setDisplayUsrReqs('static');
        setDisplayRentReqs('none');
    }

    function loadRentReqs(){
        setDisplayCars('none');
        setDisplayUsrReqs('none');
        setDisplayRentReqs('static');
    }
    function loadDefault(){
        setDisplayCars('static');
        setDisplayUsrReqs('none');
        setDisplayRentReqs('none');
    }



    return (
        <Stack width={'100vw'}
               height={'100vh'}
               maxWidth={'100%'}
        >
            <Stack width={'100vw'}
                   height={'auto'}
                   mb={'40px'}

                   direction={'column'}>
                <Stack width={'100%'}
                       height={'70px'}
                       flexDirection={'row'}
                       alignItems={'center'}
                       justifyContent={'space-between'}
                       mt={'15px'}
                >
                    <Stack height={'100%'} direction={'row'}>
                        <img src={image} alt="logo" height={'100%'}/>
                        <Box>
                        <Button fontFamily={'revert-layer'}  sx={{
                            ml:'50px',
                            mt:'13px',
                            '&:hover': {
                                bgcolor: 'darkorange',
                                color:'white'
                            }
                        }} size={'small'} onClick={loadDefault}>Home</Button>
                        </Box>
                    </Stack>
                    <Stack height={'100%'} width={'35%'} position={'relative'} right={'40px'}>
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlign: 'center',
                            width: '100%'
                        }}>
                            <Button fontFamily={'revert-layer'}  sx={{
                                mr:'40px',
                                '&:hover': {
                                    bgcolor: 'darkorange',
                                    color:'white'
                                }
                            }}>Add car</Button>
                            <Button fontFamily={'revert-layer'} sx={{
                                mr:'40px',
                                '&:hover': {
                                    bgcolor: 'darkorange',
                                    color:'white'
                                }
                            }}>Add driver</Button>
                            <IconButton aria-label={notificationsLabel(100)} sx={{mr: '40px'}}>
                                <Badge badgeContent={userReqCount} color="secondary" onClick={loadUsrReqs}>
                                    <MailIcon color={'#bdbdbd'}/>
                                </Badge>
                            </IconButton>
                            <IconButton aria-label={notificationsLabel(100)} sx={{mr: '30px'}} onClick={loadRentReqs}>
                                <Badge badgeContent={100} color="secondary">
                                    <AddShoppingCartIcon/>
                                </Badge>
                            </IconButton>

                            <Tooltip title="Account settings">
                                <IconButton
                                    onClick={handleClick}
                                    size="small"
                                    sx={{ml: 2}}
                                    aria-controls={open ? 'account-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                >
                                    <Avatar sx={{width: 32, height: 32}} src={avatar}></Avatar>
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
                            <MenuItem>
                                <ListItemIcon>
                                    <Logout fontSize="small"/>
                                </ListItemIcon>
                                Logout
                            </MenuItem>
                        </Menu>
                    </Stack>
                </Stack>
                <Divider />
            </Stack>
            <UserReqs data={carClass} height={'70vh'} display={displayUsrReqs}/>
            <Cars display={displayCars}/>
            <RentReqs data={carClass} height={'70vh'} display={displayRentReqs}/>
        </Stack>

)

}
