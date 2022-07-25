import * as React from 'react';
import Stack from "@mui/material/Stack";
import {Avatar, Divider, IconButton, ListItemIcon, Menu, MenuItem, Tooltip} from "@mui/material";
import {Settings} from "@material-ui/icons";
import {Logout} from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import image from "../../../../assets/img/easy car rental.png";
import Popup from "reactjs-popup";
import LoginForm from "../../../Login/Form/LoginForm";

export default function TopBarwithoutmenu() {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

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
                    </Box>
                </Stack>
            </Stack>
        </Stack>
    );
}
