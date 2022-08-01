import * as React from "react";
import Stack from "@mui/material/Stack";
import DistrictSelect from "../../../common/CountrySelect";
import DatePickerDesktop from "../../../common/DateSelect";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import UserCars from "../Cars";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import {FormLabel} from "@mui/material";

export default function PlaceRent(props) {

    const [value, setValue] = React.useState('');


    const handleChange = (event) => {
        setValue(event.target.value);
    };


    const carClass = [
        {
            label: 'Luxury',
        },
        {
            label: 'Semi-luxury',
        },
        {
            label: 'Mini',
        },
    ];

    function navigate(event, value) {
        if (value != null) {
            window.scrollTo({
                top: document.documentElement.scrollHeight,
                behavior: 'smooth'
            })
        }
    }

    return (
        <Stack width={'100vw'} height={'calc(100vh - 240px)'} direction={'column'} justifyContent={'center'}
               alignItems={'center'}
               mt={'2rem'}
        >
            <Stack width={'900px'} height={'54px'} direction={'row'} justifyContent={'center'} alignItems={'center'}
                   spacing={1} bgcolor={'darkorange'}>
                <Stack width={'auto'} borderRadius={1} bgcolor={'white'}>
                    <DistrictSelect label={'Select Starting point'}/>
                </Stack>
                <Stack width={'auto'} borderRadius={1} bgcolor={'white'}>
                    <DistrictSelect label={'Select End point'}/>
                </Stack>
                <Stack width={'auto'} borderRadius={1} bgcolor={'white'}>
                    <DatePickerDesktop label={'Pickup-Date'}/>
                </Stack>
                <Stack width={'auto'} borderRadius={1} bgcolor={'white'}>
                    <DatePickerDesktop label={'Drop-Date'}/>
                </Stack>
                <Stack width={'auto'} borderRadius={1} bgcolor={'white'}>
                    <Autocomplete
                        onChange={(event, value) => navigate(event, value)}
                        id="country-select-demo"
                        sx={{width: '170px'}}
                        options={carClass}
                        autoHighlight
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label={'Select-Car'}
                                sx={{
                                    width: '170px',
                                    '.MuiOutlinedInput-input': {
                                        cursor: 'pointer'
                                    }
                                }}
                                inputProps={{
                                    ...params.inputProps,
                                    autoComplete: 'new-password', // disable autocomplete and autofill
                                }}

                            />
                        )}

                    />
                </Stack>
                <Stack width={'auto'} borderRadius={1} bgcolor={'white'}>
                    <TextField label={'Selected-car'} disabled={'true'} sx={{width: '170px'}}/>
                </Stack>
            </Stack>
            <Stack width={'1150px'} mt={'20px'} borderRadius={1} bgcolor={'white'} mb={4}>
                <FormLabel id="demo-controlled-radio-buttons-group">Need Driver</FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    value={value}
                    onChange={handleChange}
                    defaultValue="auto"
                >
                    <FormControlLabel value="yes" control={<Radio/>} label={"yes"}/>
                    <FormControlLabel value="no" control={<Radio/>} label={"no"}/>
                </RadioGroup>

            </Stack>
            <Stack height={'250px'}>
                <UserCars/>
            </Stack>

        </Stack>
    );


}

