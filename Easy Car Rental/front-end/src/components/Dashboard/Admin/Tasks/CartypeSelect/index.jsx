import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function CartypeSelect(props) {


    return (
        <Autocomplete
            id="country-select-demo"
            sx={{width: 220}}
            options={type}
            autoHighlight
            size={'small'}
            onChange={props.onChange}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label={'select-car-type'}
                    inputProps={{
                        ...params.inputProps,
                        autoComplete: 'new-password', // disable autocomplete and autofill
                    }}
                />
            )}
        />
    );
}

// From https://bitbucket.org/atlassian/atlaskit-mk-2/raw/4ad0e56649c3e6c973e226b7efaeb28cb240ccb0/packages/core/select/src/data/countries.js
const type = [

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
