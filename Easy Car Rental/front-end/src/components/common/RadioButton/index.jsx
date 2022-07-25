import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function RowRadioButtonsGroup(props) {
    const [value, setValue] = React.useState(props.option1);


    const handleChange = (event) => {
        setValue(event.target.value);
    };
    return (
        <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">{props.formLabel}</FormLabel>
            <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                value={value}
                onChange={handleChange}
            >
                <FormControlLabel value="yes" control={<Radio />} label={props.option1} />
                <FormControlLabel value="no" control={<Radio />} label={props.option2} />
            </RadioGroup>
        </FormControl>
    );
}
