import {Component} from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import {TextField} from "@mui/material";

class Form extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Stack justifyContent={'center'} alignItems={'center'} height={'100vh'} width={'100vw'} maxWidth={'100%'}>
                <Stack height={'78vh'} width={'70vw'} spacing={7}>
                    <Stack>
                        <Typography fontSize={'30px'}>
                            Create account
                        </Typography>
                    </Stack>
                    <Stack position={'relative'} left={'40px'}>
                        <Stack width={'70%'} direction={'row'} spacing={4} >
                            <TextField id="outlined-search" label="Search field" type="search" size={'small'} sx={{width:'400px'}}/>
                            <TextField id="outlined-search" label="Search field" type="search" size={'small'} sx={{width:'400px'}}/>
                        </Stack>
                    </Stack>
                </Stack>

            </Stack>
        )
    }

}

export default Form;