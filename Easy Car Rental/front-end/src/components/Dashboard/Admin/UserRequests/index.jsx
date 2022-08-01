import {Component, useEffect, useState} from "react";
import {Grid, Paper} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import {GridList} from "@material-ui/core";
import ButtonBase from "@mui/material/ButtonBase";
import CarService from "../../../../services/CarService";
import UserService from "../../../../services/UserService";

export default function UserReqs(props) {
    const [userReqs, setUserReqs] = useState([]);
    const [updatableUser, setUpdatableUser] = useState(null);
    /*const [username, setUsername] = useState('');*/

    const approve = async (user) => {

        user.verified = true;

        let res = await UserService.update(user);

        await loadUserReqs();
        /*user.verified = true;
        setUpdatableUser(user);
        const json = JSON.stringify(updatableUser);
        const blob = new Blob([json], {
            type: 'application/json'
        });
        console.log(updatableUser);

        let res = await UserService.update(blob);*/
    }

    const loadUserReqs = async () => {
        let res = await UserService.fetchUser();
        setUserReqs(res.data.data);
        console.log(res.data.data);
    }

    useEffect(() => {
        loadUserReqs();
}, []);



        return (
            <Stack height={props.height} display={props.display} >
            <GridList direction={'column'} width={'100vw'} spacing={2} cols={3} style={{maxWidth:'100%'}}>
                {userReqs.map(user => {
                    if(!user.verified)
                       return <Paper
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
                                    <ButtonBase sx={{width: 200, height: 140}}>
                                        <img alt="complex" src={("data:image/png;base64," + user.confirmDocument)} width={'200px'}
                                             height={'150px'}/>
                                    </ButtonBase>
                                </Grid>
                                <Grid item xs={12}  sm container>
                                    <Grid item xs container direction="column" spacing={2}>
                                        <Grid item xs>
                                            <Typography gutterBottom variant="subtitle1" component="div">
                                                {user.id}
                                            </Typography>
                                            <Typography variant="body2" gutterBottom>
                                                {user.name}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {user.address}
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            {/*<Typography sx={{ cursor: 'pointer' }} variant="body2">
                                            Remove
                                        </Typography>*/}
                                            <Button variant={'contained'} sx={{mr: '20px'}} onClick={(event)=>approve(user)}>Approve</Button>
                                            <Button variant={'outlined'} color={'error'}>Decline</Button>
                                        </Grid>
                                    </Grid>

                                </Grid>
                            </Grid>
                        </Paper>
                    return <></>
                })}

            </GridList>
            </Stack>
        );


}
