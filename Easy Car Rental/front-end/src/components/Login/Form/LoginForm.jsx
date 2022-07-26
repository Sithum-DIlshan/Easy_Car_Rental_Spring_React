import {Component} from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import {Checkbox, FormControlLabel, InputAdornment, TextField} from "@mui/material";
import {AccountCircle} from "@material-ui/icons";
import Button from "@mui/material/Button";
import UserService from "../../../services/UserService";

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                username: '',
                name: '',
                email: '',
                password: '',
                address: '',
                contact: '',
                salary: ''
            },
            alert: false,
            message: '',
            severity: '',

            data: [],
            btnLabel: 'save',
            btnColor: 'primary'
        }
    }

    loadData = async () => {
        let res = await UserService.fetchUser();

        if (res.status === 200) {
            this.setState({
                data: res.data.data
            });
        }
        console.log(this.state.data)    // print customers array

    };

    render() {
        const label = "label";

        return (
            <Stack justifyContent={'center'} alignItems={'center'} height={'100vh'} width={'100vw'} maxWidth={'100%'}
                   bgcolor={'blue'} sx={{
                backgroundImage: `url(https://cdn2.rcstatic.com/com.rentalcars.185492029745.eu-west-1.web.prod.static-live/images/landing-pages/home/background-large.jpg)`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>
                <Stack height={'70vh'} width={'50vw'} spacing={7} border={'1px solid #e7eaed'} boxShadow={2}
                       borderRadius={1}
                       alignItems={'center'}
                       bgcolor={'white'}
                       sx={{opacity: '0.94'}}
                >
                    <Stack>
                        <Typography fontSize={'33px'} width={'fit-content'} bgcolor={'white'} position={'relative'}
                                    bottom={'0px'} fontFamily={'revert-layer'} fontWeight={450}>
                            Sign in
                        </Typography>
                    </Stack>
                    <Stack position={'relative'} direction={'column'} spacing={4}>
                        <Stack width={'70%'} direction={'column'} spacing={4}>
                            <TextField
                                id="input-with-icon-textfield"
                                label="username/email"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <AccountCircle/>
                                        </InputAdornment>
                                    ),
                                }}
                                variant="standard"
                                sx={{width: '300px'}}
                                type={'text'}
                            />
                            <TextField id="outlined-search" label="password" type="password" size={'small'}
                                       variant="standard"
                                       sx={{width: '300px'}}/>
                        </Stack>
                        <Stack width={'auto'} direction={'column'} spacing={8}>
                            <FormControlLabel control={<Checkbox/>} label="stay logged in"/>
                        </Stack>

                        <Stack width={'100%'} direction={'row'} spacing={0} justifyContent={'end'}>
                            <Button sx={{textTransform: "none"}} size={'small'} variant={'contained'}
                                    onClick={this.loadData}>{'sign in'}</Button>
                        </Stack>
                    </Stack>
                </Stack>

            </Stack>
        );
    }
}

export default LoginForm;