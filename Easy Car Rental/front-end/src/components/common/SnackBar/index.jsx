import {Alert, Snackbar} from "@mui/material";

export default function SnackBar(props) {
    return (
            <Snackbar open={props.open} autoHideDuration={3000} onClose={props.handleClose}>
                <Alert onClose={props.handleClose} severity={props.severity} sx={{ width: '100%' }}>
                    {props.message}
                </Alert>
            </Snackbar>

            );
}