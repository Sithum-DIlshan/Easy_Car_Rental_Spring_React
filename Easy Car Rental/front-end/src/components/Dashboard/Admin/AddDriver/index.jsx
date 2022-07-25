import {Component} from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import {IconButton, TextField} from "@mui/material";
import {PhotoCamera} from "@material-ui/icons";
import Button from "@mui/material/Button";
import TopBarwithoutmenu from "../../User/TopBarwithoutmenu";

class AddDriver extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fileLabel: "NIC/Driving-license",
            text:"sign up",
        }
    }

    render() {
        return (
            <Stack justifyContent={'center'} alignItems={'center'} height={'100vh'} width={'100vw'} maxWidth={'100%'} >
                <TopBarwithoutmenu/>
                <Stack height={'83vh'} width={'70vw'} spacing={3} border={'1px solid #e7eaed'} boxShadow={2} borderRadius={1}>
                    <Stack>
                        <Typography fontSize={'33px'} width={'fit-content'} bgcolor={'white'} position={'relative'} left={'20px'} bottom={'23px'} fontFamily={'revert-layer'} fontWeight={450}>
                            Add driver
                        </Typography>
                    </Stack>
                    <Stack position={'relative'} left={'110px'} direction={'column'} spacing={4}>
                        <Stack width={'70%'} direction={'row'} spacing={4}>
                            <TextField id="outlined-search" label="First name" type="search" size={'small'}
                                       sx={{width: '400px'}}/>
                            <TextField id="outlined-search" label="Last name" type="search" size={'small'}
                                       sx={{width: '400px'}}/>
                        </Stack>

                        <Stack width={'70%'} direction={'row'} spacing={4}>
                            <TextField id="outlined-search" label="Address" type="search" size={'small'}
                                       sx={{width: '600px'}}/>
                            <TextField id="outlined-search" label="Age" type="search" size={'small'}
                                       sx={{width: '200px'}}/>
                        </Stack>

                        <Stack width={'70%'} direction={'row'} spacing={4}>
                            <TextField id="outlined-search" label="E-mail" type="email" size={'small'}
                                       sx={{width: '450px'}}/>
                            <TextField id="outlined-search" label="Username" type="search" size={'small'}
                                       sx={{width: '350px'}}/>
                        </Stack>

                        <Stack width={'70%'} direction={'row'} spacing={4}>
                            <TextField id="outlined-search" label="New password" type="password" size={'small'}
                                       sx={{width: '400px'}}/>
                            <TextField id="outlined-search" label="Confirm password" type="password" size={'small'}
                                       sx={{width: '400px'}}/>
                        </Stack>
                        <Stack width={'70%'} direction={'row'} spacing={4}>
                            <TextField id="outlined-search" label="Education" type="password" size={'small'}
                                       sx={{width: '400px'}}/>
                        </Stack>
                        <Stack width={'70%'} direction={'row'} spacing={0}>
                            <TextField id="outlined-search"
                                       label="Driving-license"
                                       type="password"
                                       size={'small'}
                                /*sx={{width: '170px'}}*/
                                       InputProps={{
                                           endAdornment:
                                           /*<Button variant={'contained'} /!*sx={{
                                               height:'100%'
                                           }}*!/>Subscribe</Button>*/
                                               <IconButton color="primary" aria-label={this.state.fileLabel}
                                                           component="label">
                                                   <input hidden accept="image/*" type="file"/>
                                                   <PhotoCamera/>
                                               </IconButton>
                                       }}
                                       disabled
                            />

                        </Stack>
                        <Stack width={'70%'} direction={'row'} spacing={0} justifyContent={'end'}>
                            <Button sx={{textTransform: "none"}} size={'small'} variant={'contained'} title={this.state.text.toLowerCase()}>{'Add'}</Button>
                        </Stack>
                    </Stack>
                </Stack>

            </Stack>
        )
    }

}

export default AddDriver;