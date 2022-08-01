        import {Component} from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import {IconButton, InputAdornment, InputLabel, OutlinedInput, TextField} from "@mui/material";
import {PhotoCamera} from "@material-ui/icons";
import Button from "@mui/material/Button";
import DriverSelect from "../DriverSelect";
import FormControl from "@mui/material/FormControl";
import TopBarwithoutmenu from "../TopBarwithoutmenu";

class RequestConfirm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fileLabel: "NIC/Driving-license",
            text:"sign up",
        }
    }

    render() {
        return (
            <Stack  alignItems={'center'} height={'100vh'} width={'100vw'} maxWidth={'100%'}>
                <Stack mb={5}>
                    <TopBarwithoutmenu/>
                </Stack>
                <Stack height={'70vh'} width={'60vw'} spacing={7} border={'2px solid white'} boxShadow={2} borderRadius={1} overflow={'hidden'}>
                    <Stack>
                        <Typography fontSize={'33px'} width={'fit-content'} color={'darkorange'} fontFamily={'revert-layer'} fontWeight={450}>
                            Request Rent
                        </Typography>
                    </Stack>
                    <Stack position={'relative'} left={'210px'} direction={'column'} spacing={4}>
                        <Stack width={'70%'} direction={'row'} spacing={8}>
                            <FormControl fullWidth size={'small'} sx={{width: '150px'}}>
                                <InputLabel htmlFor="outlined-adornment-amount">Total</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-amount"
                                    disabled={true}
                                    defaultValue={'199'}
                                    /*onChange={handleChange('amount')}*/
                                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                    label="Amount"

                                />
                            </FormControl>
                           <DriverSelect/>
                        </Stack>

                        <Stack width={'70%'} direction={'row'} spacing={4}>
                            <FormControl fullWidth size={'small'} sx={{width: '250px'}}>
                                <InputLabel htmlFor="outlined-adornment-amount">damage-wavier-amount</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-amount"
                                    disabled={true}
                                    defaultValue={'199'}
                                    /*onChange={handleChange('amount')}*/
                                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                    label="damage-wavier-amount"

                                />
                            </FormControl>
                        </Stack>

                        <Stack width={'70%'} direction={'row'} spacing={0}>
                            <TextField id="outlined-search"
                                       label="Bank-slip"
                                       type="password"
                                       size={'small'}
                                sx={{width: '370px'}}
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
                        <Stack width={'55%'} direction={'row'} spacing={0} justifyContent={'end'}>
                            <Button sx={{textTransform: "none"}} size={'small'} variant={'contained'} title={this.state.text.toLowerCase()}>{'sent request'}</Button>
                        </Stack>
                    </Stack>
                </Stack>

            </Stack>
        )
    }

}

export default RequestConfirm;