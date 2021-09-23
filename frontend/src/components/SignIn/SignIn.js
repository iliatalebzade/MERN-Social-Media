import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { signIn } from '../../redux/auth/actions';
import { ThemeProvider, Button, Link } from '@material-ui/core'

import './SignIn.css';
import { theme } from './styles';

import signinBanner from '../../assets/images/signinbanner.jpg';

const SignIn = () => {

    const [formData, setFormData] = useState({ email: '', password: '' });
    const dispatch = useDispatch();
    const history = useHistory();

    const changeHandler = (e) => setFormData((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));

    const sumbitHandler = (e) => {
        e.preventDefault();

        if (formData.email === '' || formData.password === '') {
            alert("some part or parts of the form is left unfilled");
        } else {
            console.log(formData)
            dispatch(signIn(formData, history));
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <div className="signin">
                <div className="signin__formDiv">
                    <h2>Sign In</h2>
                    <form onSubmit={(e) => sumbitHandler(e)}>
                        <input name="email" onChange={(e) => changeHandler(e)} value={formData.email} placeholder="Email" type="text"/>
                        <input name="password" onChange={(e) => changeHandler(e)} value={formData.password} placeholder="Password" type="password"/>
                        <Button variant="contained" color="primary" type="submit">Submit</Button>
                    </form>
                    <h5>Don't have an account? <Link href="/signup">Sign Up</Link></h5>
                </div>
                <div className="signin__bannerDiv">
                    <img src={signinBanner} alt="" />
                </div>
            </div>
        </ThemeProvider>
    )
}

export default SignIn
