import {useState} from "react";
import Stack from "@mui/material/Stack";
import {IconButton, TextField} from "@mui/material";
import {PhotoCamera} from "@material-ui/icons";
import Button from "@mui/material/Button";

export default function UserProfile(props) {
    const [btnDisabled, setBtnDisabled] = useState(true)
    const change = (text) => setBtnDisabled(!text.target.value)
    return (
        <Stack justifyContent={'center'} alignItems={'center'} height={'100vh'} width={'100vw'} maxWidth={'100%'} b>
            <Stack height={'95vh'} width={'80vw'} spacing={7} border={'1px solid #e7eaed'} boxShadow={2}
                   borderRadius={1}>
                <Stack>
                </Stack>
                <Stack position={'relative'} left={'50px'} direction={'column'} spacing={4}>
                    <Stack width={'70%'} direction={'row'} spacing={4}>
                        <TextField id="outlined-search" label="First name" type="text" size={'small'}
                                   sx={{width: '300px'}} onChange={change}/>
                        <TextField id="outlined-search" label="Last name" type="text" size={'small'}
                                   sx={{width: '300px'}} onChange={change}/>
                    </Stack>


                    <Stack width={'70%'} direction={'row'} spacing={4}>
                        <TextField
                            id="outlined-multiline-flexible"
                            label="Address"
                            multiline
                            maxRows={2}
                            onChange={change}
                        />
                        <TextField id="outlined-search" label="E-mail" type="email" size={'small'}
                                   sx={{width: '350px'}} onChange={change}/>

                    </Stack>

                    <Stack width={'70%'} direction={'row'} spacing={4}>
                        <TextField id="outlined-search" label="Username" type="text" size={'small'}
                                   sx={{width: '350px'}} onChange={change}/>
                        <TextField id="outlined-search" label="Salary" type="number" size={'small'}
                                   sx={{width: '200px'}} onChange={change}/>
                    </Stack>
                    <Stack width={'70%'} direction={'row'} spacing={3}>
                        <TextField id="outlined-search" label="New password" type="password" size={'small'}
                                   sx={{width: '400px'}} onChange={change}/>


                    </Stack>
                    <Stack width={'70%'} direction={'row'} spacing={3}>
                        <TextField id="outlined-search" label="Confirm password" type="password" size={'small'}
                                   sx={{width: '400px'}} onChange={change}/>

                    </Stack>
                    <Stack width={'70%'} direction={'row'} spacing={3}>
                        <TextField id="outlined-search"
                                   label="NIC/Driving-license"
                                   type="password"
                                   size={'small'}
                            /*sx={{width: '170px'}}*/
                                   InputProps={{
                                       endAdornment:
                                       /*<Button variant={'contained'} /!*sx={{
                                           height:'100%'
                                       }}*!/>Subscribe</Button>*/
                                           <IconButton color="primary" aria-label={'NIC/Driving-license'}
                                                       component="label">
                                               <input hidden accept="image/*" type="file"/>
                                               <PhotoCamera/>
                                           </IconButton>
                                   }}
                                   disabled

                        />

                    </Stack>
                    <Stack width={'400px'} height={'400px'} bgcolor={'blue'} borderRadius={'100%'} position={'absolute'}
                           right={'57px'} top={'-70px'}></Stack>
                    <Stack width={'70%'} direction={'row'} spacing={0} justifyContent={'end'}>
                        <Button disabled={btnDisabled} sx={{textTransform: "none"}} size={'small'}
                                variant={'contained'}>{'update'}</Button>
                    </Stack>
                </Stack>
            </Stack>

        </Stack>
    )
}
