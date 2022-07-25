import {Component} from "react";
import {Grid, Paper} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import {GridList} from "@material-ui/core";
import ButtonBase from "@mui/material/ButtonBase";

class Cars extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        const carClass = [
            {
                label: 'Luxury',
            },
            {
                label: 'Semi-luxury',
            },
            {
                label: 'Mini',
            },
            {
                label: 'Mini',
            },
            {
                label: 'Luxury',
            },
            {
                label: 'Semi-luxury',
            },
            {
                label: 'Mini',
            },
            {
                label: 'Mini',
            },
        ];

        return (
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
                            <Grid container spacing={2}>
                                <Grid item>
                                    <ButtonBase sx={{width: 128, height: 128}}>
                                        <img alt="complex" src="/static/images/grid/complex.jpg"/>
                                    </ButtonBase>
                                </Grid>
                                <Grid item xs={12} sm container>
                                    <Grid item xs container direction="column" spacing={2}>
                                        <Grid item xs>
                                            <Typography gutterBottom variant="subtitle1" component="div">
                                                Standard license
                                            </Typography>
                                            <Typography variant="body2" gutterBottom>
                                                Full resolution 1920x1080 • JPEG
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                ID: 1030114
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            {/*<Typography sx={{ cursor: 'pointer' }} variant="body2">
                                            Remove
                                        </Typography>*/}
                                            <Button variant={'contained'}>Select</Button>
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="subtitle1" component="div">
                                            $19.00
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Paper>

                    ))}
                </GridList>
        );
    }

}

export default Cars;