import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import {IconButton, Snackbar, TextField} from "@mui/material";
import {PhotoCamera} from "@material-ui/icons";
import Button from "@mui/material/Button";
import {useState} from "react";
import SnackBar from "../../common/SnackBar";
import UserService from "../../../services/UserService";
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";
import {useNavigate} from "react-router";


export default function RegisterForm(props) {
    const [message, setMessage] = useState('');
    const [open, setOpen] = useState(false);
    const [severity, setSeverity] = useState('');
    const [btnDisabled, setBtnDisabled] = useState(false);
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [fileLabel1, setFileLabel1] = useState('Profile-photo');
    const [fileLabel2, setFileLabel2] = useState('NIC/Driving-license');
    const [profile, setProfile] = useState(null);
    const [doc, setDoc] = useState(null);
    const navigation = useNavigate();

    const [formData, setFormData] = useState({
        id: 'null',
        name: 'null',
        email: 'null',
        password: 'null',
        address: 'null',
        salary: 'null',
        verified: false,

    });

    const changeName = (text) => {
        /*setFormData(prevState => ({...prevState, name: (text.target.value)}));*/
        setFormData(prevState => ({...prevState, name: (text.target.value)}));
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
        setFormData(prevState => ({...prevState, id: (text.target.value)}));
    }
    const changeNewPassword = (text) => {
        setFormData(prevState => ({...prevState, password: (text.target.value)}));
    }
    const changeConfirmPassword = (text) => {
        setConfirmPassword(text.target.value);
    }

    const submitUser = async () => {
        const json = JSON.stringify(formData);
        const blob = new Blob([json], {
            type: 'application/json'
        });

        var form = new FormData();
        form.append("profile", profile);
        form.append("doc", doc);
        form.append("user", blob);

        console.log(form);

        if (formData.password == confirmPassword){
            /*JSON.stringify(formData);*/
            let res = await UserService.postUser(form);
            console.log(res);

            if (res.status === 201) {
                console.log('submit done');
                setMessage('Register Done Login to Continue');
                setSeverity('success')
                setOpen(true);

                setTimeout(()=> {
                    navigation('/login');
                }, 2000);

                } else {
                setMessage('Register failed! Try again...');
                setSeverity('error')
                setOpen(true);
            }
        }else {
            setMessage('Password doesn\'t match...');
            setSeverity('error')
            setOpen(true);
        }


    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const uploadProfile = (e) => {
        e.preventDefault();
        setFileLabel1(e.target.files[0].name);
        setProfile(e.target.files[0]);
    }
const uploadIdDoc = (e) => {
        e.preventDefault();
        setFileLabel2(e.target.files[0].name);
        setDoc(e.target.files[0]);
    }

    return (
        <>
            <ValidatorForm onSubmit={submitUser}>
                <Stack justifyContent={'center'} alignItems={'center'} height={'100vh'} width={'100vw'}
                       maxWidth={'100%'} b>
                    <Stack height={'88vh'} width={'70vw'} spacing={3} border={'1px solid #e7eaed'} boxShadow={2}
                           borderRadius={1}>
                        <Stack>
                            <Typography fontSize={'33px'} width={'fit-content'} bgcolor={'white'} position={'relative'}
                                        left={'20px'} bottom={'23px'} fontFamily={'revert-layer'} fontWeight={450}>
                                Create account
                            </Typography>
                        </Stack>
                        <Stack position={'relative'} left={'110px'} direction={'column'} spacing={4}>
                            <Stack width={'70%'} direction={'row'} spacing={4}>
                                <TextValidator id="outlined-search" label="Full name" type="text" size={'small'}
                                               onChange={changeName}
                                               sx={{width: '600px'}}/>
                            </Stack>

                            <Stack width={'70%'} direction={'row'} spacing={4}>
                                <TextValidator id="outlined-search" label="Address" type="text" size={'small'}
                                               onChange={changeAddress}
                                               sx={{width: '600px'}}/>
                                <TextValidator id="outlined-search" label="Salary" type="text" size={'small'}
                                               onChange={changeSalary}
                                               sx={{width: '200px'}}/>
                            </Stack>

                            <Stack width={'70%'} direction={'row'} spacing={4}>
                                <TextValidator id="outlined-search" label="E-mail" type="email" size={'small'}
                                               onChange={changeEmail}
                                               sx={{width: '450px'}}/>
                                <TextValidator id="outlined-search" label="Username" type="text" size={'small'}
                                               onChange={changeUserName}
                                               sx={{width: '350px'}}/>
                            </Stack>

                            <Stack width={'70%'} direction={'row'} spacing={4}>
                                <TextValidator id="outlined-search" label="New password" type="password" size={'small'}
                                               onChange={changeNewPassword}
                                               sx={{width: '400px'}}/>
                                <TextValidator id="outlined-search" label="Confirm password" type="password"
                                               size={'small'}
                                               onChange={changeConfirmPassword}
                                               sx={{width: '400px'}}/>
                            </Stack>
                            <Stack width={'70%'} direction={'row'} spacing={3} >
                                <TextField id="outlined-search"
                                           label={fileLabel1}
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
                                                       <input hidden accept="image/*" type="file" onChange={uploadProfile}/>
                                                       <PhotoCamera/>
                                                   </IconButton>
                                           }}
                                           disabled
                                />
                                <TextField id="outlined-search"
                                           label={fileLabel2}
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
                                                       <input hidden accept="image/*" type="file" onChange={uploadIdDoc}/>
                                                       <PhotoCamera/>
                                                   </IconButton>
                                           }}
                                           disabled
                                />

                            </Stack>
                            <Stack width={'70%'} direction={'row'} spacing={0} justifyContent={'end'}>
                                <Button sx={{textTransform: "none"}} disabled={btnDisabled} size={'small'}
                                        variant={'contained'}
                                        title={'sign up'}
                                        type={"submit"}>{'sign up'}</Button>
                            </Stack>
                            <SnackBar message={message} severity={severity} open={open} handleClose={handleClose}/>
                        </Stack>
                    </Stack>
                </Stack>
            </ValidatorForm>
        </>
    )


}
