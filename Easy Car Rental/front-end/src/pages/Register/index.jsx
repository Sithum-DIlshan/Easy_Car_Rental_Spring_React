import {Component, Fragment} from "react";
import RegisterForm from "../../components/Register/Form";

class RegisterPage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <RegisterForm/>
            </Fragment>
        )
    }

}

export default RegisterPage;