import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

function SignUpForm() {
    const styles = useStyles();

    return(
        <form className={styles.root} noValidate autoComplete="off">
            <TextField id="outlined-basic" label="First Name" variant="outlined" />
            <TextField id="outlined-basic" label="Last Name" variant="outlined" />
            <TextField id="outlined-basic" label="Email" variant="outlined" />
        </form>
    )
}

export default SignUpForm