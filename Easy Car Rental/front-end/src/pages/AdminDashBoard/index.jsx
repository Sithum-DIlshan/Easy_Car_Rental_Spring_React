import {Component, Fragment} from "react";
import RegisterForm from "../../components/Register/Form";
import Topbar from "../../components/Dashboard/User/Topbar";
import PlaceRent from "../../components/Dashboard/User/PlaceRent";
import AdminTopbar from "../../components/Dashboard/Admin/AdminTopbar";
import Cars from "../../components/Dashboard/User/Cars";
import Stack from "@mui/material/Stack";
import UserReqs from "../../components/Dashboard/Admin/UserRequests";
import RentReqs from "../../components/Dashboard/Admin/RentRequests";

class AdminDashboard extends Component {

    constructor(props) {
        super(props);
        this.state={
            usrReqDisplay:'none',
            carDisplay:'block',
            rentReqDisplay:'none',
        };
    }

    render() {
    /*    const loadusr=()=>{
            this.setState({
                carDisplay: 'none',
                usrReqDisplay:'block',
                rentReqDisplay:'none',
            })
        }
         const loadrentreq=()=>{
            this.setState({
                carDisplay: 'none',
                usrReqDisplay:'none',
                rentReqDisplay:'block',
            })
        }
*/
        const carClass = [
            {
                username:'sithum',
                label: 'Luxury',
            },
            {
                username:'saman',
                label: 'Semi-luxury',
            },
            {
                username:'ajith',
                label: 'Mini',
            },
            {
                username:'sithum',
                label: 'Mini',
            },
            {
                username:'sithum',
                label: 'Luxury',
            },
            {
                username:'sithum',
                label: 'Semi-luxury',
            },
            {
                username:'haraka',
                label: 'Mini',
            },
            {
                username:'ponnaya',
                label: 'Mini',
            },
        ];


        return (
            <Fragment>
                <AdminTopbar />
              {/*  <Stack width={'100vw'} height={'500px'} mt={'50px'}>
                    <UserReqs data={carClass} height={'450px'} display={this.state.usrReqDisplay}/>
                    <Cars height={'450px'} display={this.state.carDisplay}/>
                    <RentReqs data={carClass} height={'450px'} display={this.state.rentReqDisplay}/>
                </Stack>*/}
            </Fragment>
        )
    }

}

export default AdminDashboard;