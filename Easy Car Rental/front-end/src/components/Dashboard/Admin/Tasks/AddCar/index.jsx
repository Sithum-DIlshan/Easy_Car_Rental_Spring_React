import * as React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import {FormLabel, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField} from "@mui/material";
import {PhotoCamera} from "@material-ui/icons";
import Button from "@mui/material/Button";
import TopBarwithoutmenu from "../../../User/TopBarwithoutmenu";
import CartypeSelect from "../CartypeSelect";
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import CarService from "../../../../../services/CarService";
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";

export default function AddCar(props) {
    /*constructor(props) {
        super(props);
        this.state = {
            fileLabel: "NIC/Driving-license",
            text:"sign up",
        }
    }*/


    const [fileLabel, setFileLabel] = React.useState('');
    const [text, setText] = React.useState('');
    const [carTransmissionType, setTransmissionType] = React.useState('auto');
    const [carFuelType, setFuelType] = React.useState('petrol');

    const [frontView, setFrontView] = React.useState('Front-View');
    const [sideView, setSideView] = React.useState('Side-View');
    const [backView, setBackView] = React.useState('Back-View');

    const [frontImage, setFrontImage] = React.useState(null);
    const [sideImage, setSideImage] = React.useState(null);
    const [backImage, setBackImage] = React.useState(null);

    const [carData, setCarData] = React.useState({
        id: '',
        type: '',
        rentFeePerDay: '0',
        description: '',
        fuelType: 'petrol',
        transmission: 'auto',
        brand: '',
        mileAge: '0',
        available: true,
    });

    const setCarBrand = (e) => {
        setCarData(prevState => ({...prevState, brand: (e.target.value)}))
    }
    const setCarId = (e) => {
        setCarData(prevState => ({...prevState, id: (e.target.value)}))
    }

    const setDescription = (e) => {
        setCarData(prevState => ({...prevState, description: (e.target.value)}))
    }
    const setRentFee = (e) => {
        setCarData(prevState => ({...prevState, rentFeePerDay: (e.target.value)}))
    }

    const handleChangeTransmission = (event) => {
        setTransmissionType(event.target.value);
        setCarData(prevState => ({...prevState, transmission: (carTransmissionType)}))
    };

    const handleChangeFuelType = (event) => {
        setFuelType(event.target.value);
        setCarData(prevState => ({...prevState, fuelType: (carFuelType)}))

    };

    const setCarType = (event, value) => {
        setCarData(prevState => ({...prevState, type: (value.label)}))
/*
        console.log(value.label)
*/
    }

    const uploadFrontView=(e)=>{
        e.preventDefault();

        setFrontView(e.target.files[0].name);
        setFrontImage(e.target.files[0]);
    }

    const uploadSideView=(e)=>{
        e.preventDefault();

        setSideView(e.target.files[0].name);
        setSideImage(e.target.files[0]);
    }
    const uploadBackView=(e)=>{
        e.preventDefault();

        setBackView(e.target.files[0].name);
        setBackImage(e.target.files[0]);
    }

    const addCar=async ()=>{

        // eslint-disable-next-line no-use-before-define
        console.log(carData);

        const json = JSON.stringify(carData);
        const blob = new Blob([json], {
            type: 'application/json'
        });

        var car = new FormData();
        car.append("frontView", frontImage);
        car.append("sideView", sideImage);
        car.append("backView", backImage);
        car.append("car", blob);

        let res = await CarService.saveCar(car);
        console.log(res);

    }

    return (
        <ValidatorForm onSubmit={addCar}>
        <Stack justifyContent={'center'} alignItems={'center'} height={'100vh'} width={'100vw'} maxWidth={'100%'}>
            <TopBarwithoutmenu/>
            <Stack height={'83vh'} width={'70vw'} spacing={3} border={'1px solid #e7eaed'} boxShadow={2}
                   borderRadius={1}>
                <Stack>
                    <Typography fontSize={'33px'} width={'fit-content'} bgcolor={'white'} position={'relative'}
                                left={'20px'} bottom={'23px'} fontFamily={'revert-layer'} fontWeight={450}>
                        Add Car
                    </Typography>
                </Stack>
                <Stack position={'relative'} left={'110px'} direction={'column'} spacing={4}>
                    <Stack width={'70%'} direction={'row'} spacing={4}>
                        <CartypeSelect onChange={setCarType}/>
                        <TextField id="outlined-search" label="Car brand" type="search" size={'small'}
                                   sx={{width: '400px'}} onChange={setCarBrand}/>
                    </Stack>

                    <Stack width={'70%'} direction={'row'} spacing={4}>
                        <FormLabel id="demo-controlled-radio-buttons-group">Transmission</FormLabel>

                        <RadioGroup
                            column
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                            value={carTransmissionType}
                            onChange={handleChangeTransmission}
                        >
                            <FormControlLabel value="auto" control={<Radio/>} label={"auto"}/>
                            <FormControlLabel value="manual" control={<Radio/>} label={"manual"}/>
                        </RadioGroup>

                        <FormLabel id="demo-controlled-radio-buttons-group">Fuel Type</FormLabel>

                        <RadioGroup
                            column
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                            value={carFuelType}
                            onChange={handleChangeFuelType}
                            defaultValue="auto"
                        >
                            <FormControlLabel value="petrol" control={<Radio/>} label={"petrol"}/>
                            <FormControlLabel value="diesel" control={<Radio/>} label={"diesel"}/>
                        </RadioGroup>
                    </Stack>

                    <Stack width={'70%'} direction={'row'} spacing={4}>
                        <TextField id="outlined-search" label="Chassi number" type="text" size={'small'}
                                   sx={{width: '400px'}} onChange={setCarId}/>
                        <TextField
                            id="outlined-multiline-flexible"
                            label="Description"
                            multiline
                            maxRows={2}
                            onChange={setDescription}
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
                                onChange={setRentFee}
                            />
                        </FormControl>
                        <TextField id="outlined-search"
                                   label={frontView}
                                   type="password"
                                   size={'small'}
                            /*sx={{width: '170px'}}*/
                                   InputProps={{
                                       endAdornment:
                                       /*<Button variant={'contained'} /!*sx={{
                                           height:'100%'
                                       }}*!/>Subscribe</Button>*/
                                           <IconButton color="primary" aria-label={fileLabel}
                                                       component="label">
                                               <input hidden accept="image/*" type="file" onChange={uploadFrontView}/>
                                               <PhotoCamera/>
                                           </IconButton>
                                   }}
                                   disabled
                        />
                    </Stack>
                    <Stack width={'70%'} direction={'row'} spacing={3}>
                        <TextField id="outlined-search"
                                   label={backView}
                                   type="password"
                                   size={'small'}
                            /*sx={{width: '170px'}}*/
                                   InputProps={{
                                       endAdornment:
                                       /*<Button variant={'contained'} /!*sx={{
                                           height:'100%'
                                       }}*!/>Subscribe</Button>*/
                                           <IconButton color="primary" aria-label={fileLabel}
                                                       component="label">
                                               <input hidden accept="image/*" type="file" onChange={uploadBackView}/>
                                               <PhotoCamera/>
                                           </IconButton>
                                   }}
                                   disabled
                        />
                        <TextField id="outlined-search"
                                   label={sideView}
                                   type="password"
                                   size={'small'}
                            /*sx={{width: '170px'}}*/
                                   InputProps={{
                                       endAdornment:
                                       /*<Button variant={'contained'} /!*sx={{
                                           height:'100%'
                                       }}*!/>Subscribe</Button>*/
                                           <IconButton color="primary" aria-label={fileLabel}
                                                       component="label">
                                               <input hidden accept="image/*" type="file" onChange={uploadSideView}/>
                                               <PhotoCamera/>
                                           </IconButton>
                                   }}
                                   disabled
                        />

                    </Stack>
                    <Stack width={'70%'} direction={'row'} spacing={0} justifyContent={'end'}>
                        <Button sx={{textTransform: "none"}} size={'small'} variant={'contained'}
                                title={text}
                                type={'submit'}
                        >{'Add'}</Button>
                    </Stack>
                </Stack>
            </Stack>

        </Stack>
        </ValidatorForm>

    );

}
