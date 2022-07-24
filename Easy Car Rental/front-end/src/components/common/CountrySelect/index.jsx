import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function CountrySelect() {
    return (
        <Autocomplete
            id="country-select-demo"
            sx={{width: 300}}
            options={district}
            autoHighlight
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Choose a starting point"
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
const district = [

    {
        label: 'Colombo',
    },
    {
        label: 'Gampaha',
    },
    {
        label: 'Kalutara',
    },
    {
        label: 'Kandy',
    },
    {
        label: 'Matale',
    },
    {
        label: 'Nuwara Eliya',
    },
    {
        label: 'Galle',
    },
    {
        label: 'Matara',
    },
    {
        label: 'Hambantota',
    },
    {
        label: 'Jaffna',
    },
    {
        label: 'Kilinochchi',
    },
    {
        label: 'Mannar',
    },
    {
        label: 'Vavuniya',
    },
    {
        label: 'Mullaitivu',
    },
    {
        label: 'Batticaloa',
    },
    {
        label: 'Ampara',
    },
    {
        label: 'Trincomalee',
    },
    {
        label: 'Kurunegala',
    },
    {
        label: 'Puttalam',
    },
    {
        label: 'Anuradhapura',
    },
    {
        label: 'Polonnaruwa',
    },
    {
        label: 'Badulla',
    },
    {
        label: 'Moneragala',
    },
    {
        label: 'Ratnapura',
    },
    {
        label: 'Kegalle',
    },

];
