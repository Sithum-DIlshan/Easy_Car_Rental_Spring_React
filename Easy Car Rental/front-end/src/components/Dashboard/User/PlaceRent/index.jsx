import {Component} from "react";
import Autocomplete from "react-google-autocomplete";
import Stack from "@mui/material/Stack";
import CountrySelect from "../../../common/CountrySelect";

class PlaceRent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Stack width={'100vw'} height={'400px'} >
                <Autocomplete
                    apiKey={'AIzaSyD2B3GR2tn6My2QTtILLhQpBsax5thwLnE'}
                    style={{ width: "90%" }}
                    onPlaceSelected={(place) => {
                        console.log(place);
                    }}
                />
                <CountrySelect/>
            </Stack>
        );
    }

}

export default PlaceRent;