import {Component} from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import {IconButton, InputAdornment, InputLabel, OutlinedInput, TextField} from "@mui/material";
import {PhotoCamera} from "@material-ui/icons";
import Button from "@mui/material/Button";
import TopBarwithoutmenu from "../../User/TopBarwithoutmenu";
import CartypeSelect from "../CartypeSelect";
import RowRadioButtonsGroup from "../../../common/RadioButton";
import FormControl from "@mui/material/FormControl";

class AddCar extends Component {
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
                            Add Car
                        </Typography>
                    </Stack>
                    <Stack position={'relative'} left={'110px'} direction={'column'} spacing={4}>
                        <Stack width={'70%'} direction={'row'} spacing={4}>
                            <CartypeSelect/>
                            <TextField id="outlined-search" label="Car brand" type="search" size={'small'}
                                       sx={{width: '400px'}}/>
                        </Stack>

                        <Stack width={'70%'} direction={'row'} spacing={4}>
                            <RowRadioButtonsGroup formLabel="Transmission" option1="auto" option2="manual"/>
                        </Stack>

                        <Stack width={'70%'} direction={'row'} spacing={4}>
                            <TextField id="outlined-search" label="Chassi number" type="password" size={'small'}
                                       sx={{width: '400px'}}/>
                            <TextField
                                id="outlined-multiline-flexible"
                                label="Description"
                                multiline
                                maxRows={2}
                            />
                        </Stack>
                        <Stack width={'70%'} direction={'row'} spacing={4}>
                            <FormControl fullWidth size={'small'} sx={{width: '150px'}}>
                                <InputLabel htmlFor="outlined-adornment-amount">Rent fee per day</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-amount"
                                    defaultValue={'0'}
                                    /*onChange={handleChange('amount')}*/
                                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                    label="Rent fee per day"

                                />
                            </FormControl>
                            <TextField id="outlined-search"
                                       label="Front view"
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
                        <Stack width={'70%'} direction={'row'} spacing={3}>
                            <TextField id="outlined-search"
                                       label="Back view"
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
                            <TextField id="outlined-search"
                                       label="Side view"
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

export default AddCar;