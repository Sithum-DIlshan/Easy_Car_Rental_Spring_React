import {Component, useEffect, useState} from "react";
import {Grid, Paper} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import {GridList} from "@material-ui/core";
import ButtonBase from "@mui/material/ButtonBase";
import CarService from "../../../../services/CarService";

export default function Cars(props)  {
    const [carClass, setCarClass] = useState([]);

    const loadCars = async () => {
        let res = await CarService.fetchCars();
        setCarClass(res.data.data);
        console.log(res.data.data);
    }

    useEffect(() => {
        loadCars();
    }, []);

        return (
            <Stack height={'70vh'}  display={props.display}>
                <GridList direction={'column'} width={'100vw'} spacing={2} cols={3} style={{maxWidth:'100%'}}>
                    {carClass.map(car => (
                        <Paper
                            sx={{
                                p: 2,
                                margin: 'auto',
                                maxWidth: 500,
                                flexGrow: 1,
                                backgroundColor: (theme) =>
                                    theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                            }}
                        >
                            <Grid container spacing={2} sx={{mb:'20px'}}>
                                <Grid item>
                                    <ButtonBase sx={{width: 200, height: 140}}>
                                        <img alt="complex" src={("data:image/png;base64," + car.front)} width={'200px'}
                                             height={'150px'}/>
                                    </ButtonBase>
                                </Grid>
                                <Grid item xs={12} sm container>
                                    <Grid item xs container direction="column" spacing={2}>
                                        <Grid item xs>
                                            <Typography gutterBottom variant="subtitle1" component="div">
                                                {car.brand}
                                            </Typography>
                                            <Typography variant="body2" gutterBottom>
                                                {car.description}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {car.id}
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            {/*<Typography sx={{ cursor: 'pointer' }} variant="body2">
                                            Remove
                                        </Typography>*/}
                                            <Button variant={'contained'} color={'error'} sx={{textTransform:'false'}}>delete</Button>
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="subtitle1" component="div">
                                            ${car.rentFeePerDay}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Paper>

                    ))}
                </GridList>
                <Stack width={'100%'} direction={'row'} justifyContent={'end'} >
                    <Button sx={{textTransform: "none", mr:'40px', mt:'40px'}} size={'medium'} variant={'contained'}>next</Button>
                </Stack>
            </Stack>
        );

}
