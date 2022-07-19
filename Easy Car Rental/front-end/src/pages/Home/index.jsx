import {Component, Fragment} from "react";
import Variants from "../../components/Home/Greeting";

class HomePage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <Variants/>
            </Fragment>
        )
    }

}

export default HomePage;