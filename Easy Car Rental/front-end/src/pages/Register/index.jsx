import {Component, Fragment} from "react";
import Form from "../../components/Register/Form";

class RegisterPage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <Form/>
            </Fragment>
        )
    }

}

export default RegisterPage;