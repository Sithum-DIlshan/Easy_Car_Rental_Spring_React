import {Component, Fragment} from "react";
import Variants from "../../components/Home/AppBar";
import {Slideshow} from "@material-ui/icons";
import TransparentAppBar from "../../components/Home/AppBar";
import BackGroundImage from "../../components/Home/BackgroundImg";
import QuickContact from "../../components/Home/SpeedDial";
import ImgMediaCard from "../../components/Home/Cards";
import SubscribeBar from "../../components/Home/SubscribeBar";
import {NewsLetter} from "../../components/NewsLetter";
import Stack from "@mui/material/Stack";

class HomePage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <TransparentAppBar/>
                <BackGroundImage/>
                <QuickContact/>
                <ImgMediaCard/>
                <Stack width={'100vw'} height={'100vh'} maxWidth={'100%'} justifyContent={'center'} alignItems={'center'} sx={{background: 'rgb(254, 193, 130)',
                    backgroundColor : 'linear-gradient(50deg,rgba(254, 193, 130, 1) 20%,rgba(254, 160, 142, 1) 100%)'}}>
                    <NewsLetter/>
                </Stack>
                {/*<SubscribeBar/>*/}
            </Fragment>
        )
    }

}

export default HomePage;