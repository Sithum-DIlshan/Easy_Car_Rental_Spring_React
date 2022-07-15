import {Component, Fragment} from "react";
import Greeting from "../../components/Home/Greeting";

class HomePage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <Greeting/>
            </Fragment>
        )
    }

}
export default HomePage;