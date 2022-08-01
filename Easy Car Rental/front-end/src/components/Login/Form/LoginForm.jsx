import {useState} from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import {Checkbox, FormControlLabel, InputAdornment, TextField} from "@mui/material";
import {AccountCircle} from "@material-ui/icons";
import Button from "@mui/material/Button";
import UserService from "../../../services/UserService";
import {useNavigate} from "react-router";
import SnackBar from "../../common/SnackBar";
import AdminService from "../../../services/AdminService";

export default function LoginForm(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    /*const [formData, setFormData] = useState(null);*/
    const [open, setOpen] = useState(false);
    const [snackMsg, setSnackMsg] = useState('');
    const [severity, setSeverity] = useState('error');


    const navigate = useNavigate();

    const sign_in_onClick = async (username) => {

        let params = {
            username: username
        }

        let admin = await AdminService.fetchAdmin();

        if (admin.data.data[0].id == username && password == admin.data.data[0].password) {
            setSeverity('success')
            setSnackMsg('Login as Admin be carefully on what you are doing')
            setOpen(true);

            setTimeout(() => {
                navigate('/admin/dashboard', {state: {formData: admin.data.data[0]}});
            }, 2000);
        } else {

            let res = await UserService.searchUser(params);


            if (res.status === 200 && password === res.data.data.password) {
                /* this.setState({
                     data: res.data.data
                 });
                if (){*/
                /*console.log("login done");

                this.setState({
                    path: 'register'
                })*/

                console.log(res.data.data);

                /*
                            setFormData(prevState => ({...prevState, file: res.data.data.file}));
                */

                setSeverity('success')
                setSnackMsg('Login done')
                setOpen(true);
                /* console.log('login done')
                 navigate('register')*/
                setTimeout(() => {
                    navigate('/user/dashboard', {state: {formData: res.data.data}});
                }, 2000);
            } else {
                setSeverity('error')
                setSnackMsg('Wrong credentials')
                setOpen(true);
            }
        }

    };


    const label = "label";

    const handleChangeUserName = (event) => {
        setUsername(event.target.value);
    }
    const handleChangePassword = (event) => {
        setPassword(event.target.value);
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };


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
                            onChange={handleChangeUserName}
                        />
                        <TextField id="outlined-search" label="password" type="password" size={'small'}
                                   variant="standard"
                                   sx={{width: '300px'}}
                                   onChange={handleChangePassword}
                        />
                    </Stack>
                    <Stack width={'auto'} direction={'column'} spacing={8}>
                        <FormControlLabel control={<Checkbox/>} label="stay logged in"/>
                    </Stack>

                    <Stack width={'100%'} direction={'row'} spacing={0} justifyContent={'end'}>
                        <Button sx={{textTransform: "none"}} size={'small'} variant={'contained'}
                                onClick={() => sign_in_onClick(username)}>{'sign in'}</Button>

                    </Stack>
                    {/* <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                        <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
                            {snackMsg}
                        </Alert>
                    </Snackbar>*/}
                    <SnackBar open={open} severity={severity} message={snackMsg} handleClose={handleClose}/>
                </Stack>
            </Stack>
        </Stack>

    );

}
/*this.sign_in_onClick(this.state.formData.username)*/
