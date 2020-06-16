import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import styles from './styles';
import InputBase from '@material-ui/core/InputBase';

const SecondInput = props => {
    const { classes } = props

    return (
        <div>
            <div className={classes.center}>
                <TextField 
                className={classes.input}
                label="Search your Name" variant="outlined"
                />
            </div>
            <div>
                <InputBase />
            </div>
        </div>
    )
}

export default withStyles(styles)(SecondInput);
