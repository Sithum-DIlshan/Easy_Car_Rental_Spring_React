import {Component} from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import {TextField} from "@mui/material";
import Button from "@mui/material/Button";

class SubscribeBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Stack width={'100vw'} height={'100vh'} maxWidth={'100%'} alignItems={'center'} justifyContent={'center'}>
                <Card sx={{borderRadius:'20px',width:'53vw', height:'55vh', display:'flex', justifyContent:'center',alignItems:'center', backgroundColor:'#fb4547'}}>
                <Card sx={{width:'52vw', height:'53vh', display:'flex', justifyContent:'center' ,alignItems:'center', borderRadius:'20px', flexDirection:'column'}}>
                    <Typography mb={'50px'} fontSize={'30px'} fontWeight={800} fontFamily={'Source Sans Pro,sans-serif'}>SUBSCRIBE NEWS-LETTER</Typography>
                    <TextField type={'email'} label={'E-mail'} sx={{height:'70px',position:'relative', right:'60px'}}  InputProps={{endAdornment: <Button variant={'contained'} sx={{height:'100%', position:'relative', left:'155px', width:'200px'}}>Subscribe</Button>}}/>

                </Card>
                </Card>
            </Stack>
        )
    }
}

export default SubscribeBar;