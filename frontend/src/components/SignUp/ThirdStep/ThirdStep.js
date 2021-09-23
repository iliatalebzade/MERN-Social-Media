import React from 'react'
import { Avatar, ThemeProvider } from '@material-ui/core';
import { theme, useStyles } from './styles';

import './ThirdStep.css'

const ThirdStep = ({ signupData }) => {

    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
            <div className="thirdStep">
                <h4 className={classes.looksGood}>Looks Good?</h4>
                <div className="accountPreview">
                    <Avatar className={classes.sizeAvatar} alt={signupData.firstName} src={signupData.profilePicture} >{signupData.firstName.charAt(0)}</Avatar>    
                    <h4 className={classes.usenameSize} >{`${signupData.firstName} ${signupData.lastName}`}</h4>
                </div>
            </div>
        </ThemeProvider>
    )
}

export default ThirdStep
