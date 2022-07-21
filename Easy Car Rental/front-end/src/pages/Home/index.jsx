import {Component, Fragment} from "react";
import Variants from "../../components/Home/AppBar";
import {Slideshow} from "@material-ui/icons";
import TransparentAppBar from "../../components/Home/AppBar";
import BackGroundImage from "../../components/Home/BackgroundImg";
import QuickContact from "../../components/Home/SpeedDial";
import ImgMediaCard from "../../components/Home/Cards";

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
            </Fragment>
        )
    }

}

export default HomePage;