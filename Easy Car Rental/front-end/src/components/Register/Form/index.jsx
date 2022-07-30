import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import {IconButton, Snackbar, TextField} from "@mui/material";
import {PhotoCamera} from "@material-ui/icons";
import Button from "@mui/material/Button";
import {useState} from "react";
import SnackBar from "../../common/SnackBar";

export default function RegisterForm(props) {
    const [message, setMessage] = useState('');
    const [open, setOpen] = useState(false);
    const [severity, setSeverity] = useState('');
    const [btnDisabled, setBtnDisabled] = useState(false);
    /*const [fName, setfName] = useState('');
    const [lName, setLname] = useState('');
    const [address, setAddress] = useState('');
    const [salary, setSalary] = useState('');
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');*/
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [formData, setFormData] = useState({
        fName: '',
        lName: '',
        address: '',
        salary: '',
        email: '',
        username: '',
        password: '',
        image: [],
    });
    const fileReader = new FileReader();

    const changeFirstName = (text) => {
        setFormData(prevState => ({...prevState, fName: (text.target.value)}));
    }
    const changeLastName = (text) => {
        setFormData(prevState => ({...prevState, lName: (text.target.value)}));
    }
    const changeAddress = (text) => {
        setFormData(prevState => ({...prevState, address: (text.target.value)}));
    }
    const changeSalary = (text) => {
        setFormData(prevState => ({...prevState, salary: (text.target.value)}));
    }
    const changeEmail = (text) => {
        setFormData(prevState => ({...prevState, email: (text.target.value)}));
    }
    const changeUserName = (text) => {
        setFormData(prevState => ({...prevState, username: (text.target.value)}));
    }
    const changeNewPassword = (text) => {
        setNewPassword(text.target.value)
    }
    const changeConfirmPassword = (text) => {
        setConfirmPassword(text.target.value)
    }

    const handleSigninClck = (event) => {

        if (newPassword == confirmPassword) {
            setFormData(prevState => ({...prevState, password: (newPassword)}));
            console.log(formData);
        } else {
            setSeverity('error');
            setMessage('passwords doesnt match');
            setOpen(true);

        }
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const upload=(e)=>{
        e.preventDefault();
        setFormData(prevState => ({...prevState, image: []}));
        const files = e.target.files;
        const fileLength = files.length;

        for (var i=0; i < fileLength; i++){
            let reader = new FileReader();
            let file = files[i];

            reader.onloadend = () => {
                setFormData(prevState => ({...prevState, image: formData.image.concat(reader.result)}));
            }

            reader.readAsDataURL(file);
        }
    }

    return (
        <Stack justifyContent={'center'} alignItems={'center'} height={'100vh'} width={'100vw'} maxWidth={'100%'} b>
            <Stack height={'88vh'} width={'70vw'} spacing={7} border={'1px solid #e7eaed'} boxShadow={2}
                   borderRadius={1}>
                <Stack>
                    <Typography fontSize={'33px'} width={'fit-content'} bgcolor={'white'} position={'relative'}
                                left={'20px'} bottom={'23px'} fontFamily={'revert-layer'} fontWeight={450}>
                        Create account
                    </Typography>
                </Stack>
                <Stack position={'relative'} left={'110px'} direction={'column'} spacing={4}>
                    <Stack width={'70%'} direction={'row'} spacing={4}>
                        <TextField id="outlined-search" label="First name" type="text" size={'small'}
                                   onChange={changeFirstName}
                                   sx={{width: '400px'}}/>
                        <TextField id="outlined-search" label="Last name" type="text" size={'small'}
                                   onChange={changeLastName}
                                   sx={{width: '400px'}}/>
                    </Stack>

                    <Stack width={'70%'} direction={'row'} spacing={4}>
                        <TextField id="outlined-search" label="Address" type="text" size={'small'}
                                   onChange={changeAddress}
                                   sx={{width: '600px'}}/>
                        <TextField id="outlined-search" label="Salary" type="text" size={'small'}
                                   onChange={changeSalary}
                                   sx={{width: '200px'}}/>
                    </Stack>

                    <Stack width={'70%'} direction={'row'} spacing={4}>
                        <TextField id="outlined-search" label="E-mail" type="email" size={'small'}
                                   onChange={changeEmail}
                                   sx={{width: '450px'}}/>
                        <TextField id="outlined-search" label="Username" type="text" size={'small'}
                                   onChange={changeUserName}
                                   sx={{width: '350px'}}/>
                    </Stack>

                    <Stack width={'70%'} direction={'row'} spacing={4}>
                        <TextField id="outlined-search" label="New password" type="password" size={'small'}
                                   onChange={changeNewPassword}
                                   sx={{width: '400px'}}/>
                        <TextField id="outlined-search" label="Confirm password" type="password" size={'small'}
                                   onChange={changeConfirmPassword}
                                   sx={{width: '400px'}}/>
                    </Stack>
                    <Stack width={'70%'} direction={'row'} spacing={0}>
                        <TextField id="outlined-search"
                                   label="NIC/Driving-license"
                                   type="text"
                                   size={'small'}
                            /*sx={{width: '170px'}}*/
                                   InputProps={{
                                       endAdornment:
                                       /*<Button variant={'contained'} /!*sx={{
                                           height:'100%'
                                       }}*!/>Subscribe</Button>*/
                                           <IconButton color="primary"
                                                       component="label">
                                               <input hidden accept="image/*" type="file" onChange={upload}/>
                                               <PhotoCamera/>
                                           </IconButton>
                                   }}
                                   disabled
                        />

                    </Stack>
                    <Stack width={'70%'} direction={'row'} spacing={0} justifyContent={'end'}>
                        <Button sx={{textTransform: "none"}} disabled={btnDisabled} size={'small'} variant={'contained'}
                                title={'sign up'} onClick={handleSigninClck}>{'sign up'}</Button>
                    </Stack>
                    <SnackBar message={message} severity={severity} open={open} handleClose={handleClose}/>
                </Stack>
            </Stack>

        </Stack>
    )


}
