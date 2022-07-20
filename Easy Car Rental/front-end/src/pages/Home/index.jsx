import {Component, Fragment} from "react";
import Variants from "../../components/Home/Greeting";
import {Slideshow} from "@material-ui/icons";
import ResponsiveAppBar from "../../components/Home/Greeting";
import MultiActionAreaCard from "../../components/common/Card";

class HomePage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <ResponsiveAppBar/>
                <MultiActionAreaCard/>

            </Fragment>
        )
    }

}

export default HomePage;