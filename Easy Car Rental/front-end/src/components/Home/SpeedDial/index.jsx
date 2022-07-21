import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import PhoneIcon from '@mui/icons-material/Phone';
import EditIcon from '@mui/icons-material/Edit';
import {Link} from "react-router-dom";
// import {MdPhone} from "react-icons/all";

const actions = [
    { icon: <img src="https://img.icons8.com/color/48/000000/whatsapp--v1.png" />, name: 'Whatsapp', click:()=>{
            window.open("https://wa.me/+94774047790");
        }},
    { icon: <img src="https://img.icons8.com/color/48/000000/telegram-app--v1.png"/>, name: 'Telegram' , click:()=>{
            window.open("https://t.me/sithumdilshan");
        }
    },
    { icon: <ShareIcon />, name: 'Share' },
];

export default function QuickContact() {
    return (
        <Box sx={{ transform: 'translateZ(0px)', flexGrow: 1 }}>
            <SpeedDial
                ariaLabel="SpeedDial openIcon example"
                sx={{ position: 'absolute', bottom: 60, right: 16 }}
                icon={<SpeedDialIcon openIcon={<PhoneIcon /> } />}
            >
                {actions.map((action) => (
                    <SpeedDialAction
                        onClick={action.click}
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                    />
                ))}
            </SpeedDial>
        </Box>
    );
}

