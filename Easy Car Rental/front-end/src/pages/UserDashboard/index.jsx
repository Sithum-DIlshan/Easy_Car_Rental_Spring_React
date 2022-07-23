import {Component, Fragment} from "react";
import RegisterForm from "../../components/Register/Form";
import Topbar from "../../components/Dashboard/User/Topbar";

class UserDashboard extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <Topbar/>
            </Fragment>
        )
    }

}

export default UserDashboard;