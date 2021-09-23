import React, { useState } from 'react';
import { ThemeProvider, Link, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signUp } from '../../redux/auth/actions';

import './SignUp.css'
import { theme } from './styles';

import signupBanner from '../../assets/images/signupbanner.jpg';
import FirstStep from './FirstStep/FirstStep';
import SecondStep from './SecondStep/SecondStep';
import ThirdStep from './ThirdStep/ThirdStep';


const SignUp = () => {

    const [activeStep, setActiveStep] = useState(0);
    const [signupData, setSignupData] = useState({ firstName: '', lastName: '', email: '', password: '', confirmPassword: '', profilePicture: '' });
    const dispatch = useDispatch();
    const history = useHistory();


    const nextStepper = () => {
        if (activeStep === 0) {
            if (signupData.firstName === '' || signupData.lastName === '' || signupData.email === '' || signupData.password === '' || signupData.confirmPassword === '') {
                alert("some part or parts of the form is left unfilled");
            } else if (signupData.password !== signupData.confirmPassword) {
                alert("password and it's confirmation don't match");
            } else {
                setActiveStep((prevState) => prevState + 1);
            }
        } else {
            setActiveStep((prevState) => prevState + 1);
        }
    }

    const finisher = () => {
        dispatch(signUp(signupData, history));
    }

    return (
        <>
            <ThemeProvider theme={theme}>
            <div className="signUp">
                <div className="signUp__formDiv">
                    <h2>Sign Up</h2>
                    <div className="stepsContentContainer">
                        {activeStep === 0 &&
                            <FirstStep signupData={signupData} setSignupData={setSignupData} />
                        }
                        {activeStep === 1 &&
                            <SecondStep signupData={signupData} setSignupData={setSignupData} />
                        }
                        {activeStep === 2 &&
                            <ThirdStep signupData={signupData} />
                        }
                        <div className="buttondivision">
                            <Button disabled={activeStep <= 0} onClick={() => activeStep > 0 ?  setActiveStep((prevState) => prevState - 1) : null} variant="contained" color="primary">Previous</Button>
                            <Button disabled={activeStep > 3} onClick={() => activeStep < 2 ? nextStepper() : finisher()} variant="contained" color="primary">{activeStep < 2 ? "Next" : "Finish"}</Button>
                        </div>
                    </div>
                    <h5>Already have an account? <Link href="/signin">Sign In</Link></h5>
                </div>
                <div className="signUp__bannerDiv">
                    <img src={signupBanner} alt="signup_banner"/>
                </div>
            </div>
        </ThemeProvider>
        {/* <div className="signup">
            <div className="signup__formdiv">
                <h2>Sign Up</h2>
                <Stepper className={classes.stepper} activeStep={activeStep} alternativeLabel={false}>
                    <Step>
                        <StepLabel>
                            <Typography className={classes.stepLabels} variant="body1">
                                Account Credentials
                            </Typography>
                        </StepLabel>
                    </Step>
                    <Step>
                        <StepLabel>
                            <Typography className={classes.stepLabels} variant="body1">
                                Profile Picture
                            </Typography>
                        </StepLabel>
                    </Step>
                    <Step>
                        <StepLabel>
                            <Typography className={classes.stepLabels} variant="body1">
                                Final Confirmation
                            </Typography>
                        </StepLabel>
                    </Step>
                </Stepper>
                <div className="stepsContentContainer">
                    {activeStep === 0 &&
                        <FirstStep signupData={signupData} setSignupData={setSignupData} />
                    }
                    {activeStep === 1 &&
                        <SecondStep signupData={signupData} setSignupData={setSignupData} />
                    }
                    {activeStep === 2 &&
                        <ThirdStep signupData={signupData} />
                    }
                    <div className="buttondivision">
                        <Button disabled={activeStep <= 0} onClick={() => activeStep > 0 ?  setActiveStep((prevState) => prevState - 1) : null} variant="contained" color="primary">Previous</Button>
                        <Button disabled={activeStep > 3} onClick={() => activeStep < 2 ? nextStepper() : finisher()} variant="contained" color="primary">{activeStep < 2 ? "Next" : "Finish"}</Button>
                    </div>
                </div>
                <h5>Already have an account? <Link href="/signin">Sign In</Link></h5>
            </div>
            <div className="signup__banner">
                <img src={signupBanner} alt="signup_banner"/>
            </div>
        </div> */}
        </>
    )
}

export default SignUp;