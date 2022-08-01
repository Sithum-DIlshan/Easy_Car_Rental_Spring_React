import {Fragment} from "react";
import Topbar from "../../components/Dashboard/User/Topbar";
import PlaceRent from "../../components/Dashboard/User/PlaceRent";
import {useLocation} from "react-router-dom";

export default function UserDashboard(props) {
    const location = useLocation();
    console.log(location.state.formData);

    return (
        <Fragment>
            <Topbar data={location.state.formData}/>
            <PlaceRent/>
        </Fragment>
    )

}

