import React, { useState } from 'react'
import { ThemeProvider } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { theme } from './styles';

import './SecondStep.css';

const SecondStep = ({ signupData, setSignupData }) => {
    
    const [fileSelected, setFileSelected] = useState(true);

    const fileDone = (base64) => {
        setFileSelected((prevState) => !prevState);
        setSignupData({ ...signupData, profilePicture: base64 });
    }

    return (
        <ThemeProvider theme={theme}>
                <label className={signupData.profilePicture !== '' ? "custom-file-selected-upload" : "custom-file-upload"}>
                    <FileBase type="file" multiple={false} onDone={({ base64 }) => fileDone(base64)}/>
                    <span>{signupData.profilePicture !== '' ? 'Change Selected File' : 'Choose profile picture'}</span>
                </label>
        </ThemeProvider>
    )
}

export default SecondStep
