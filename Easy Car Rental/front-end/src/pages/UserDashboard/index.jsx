import {Component, Fragment} from "react";
import RegisterForm from "../../components/Register/Form";
import Topbar from "../../components/Dashboard/User/Topbar";
import PlaceRent from "../../components/Dashboard/User/PlaceRent";

class UserDashboard extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <Topbar/>
                <PlaceRent/>
            </Fragment>
        )
    }

}

export default UserDashboard;