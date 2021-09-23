import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Avatar } from '@material-ui/core';
import { Link, useHistory, useLocation } from "react-router-dom";
import decode from 'jwt-decode';

import { useStyles } from './styles';
import './AppNavbar.css';

const AppNavbar = () => {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();
    const classes = useStyles();

    const logOut = () => {
        dispatch({ type: 'LOGOUT' });

        history.push('/');

        setUser(null);
    };

    useEffect(() => {
        const token = user?.token;

        if (token) {
            const decodedToken = decode(token);
            if (decodedToken.exp * 1000 < new Date().getTime()) logOut();
        }
        setUser(JSON.parse(localStorage.getItem('profile')))
    }, [location]);


    return (
        <>
            {user ? (
                <div onClick={() => logOut()} className="navbar__account--signedaccount">
                    <Avatar
                        className={classes.avatar}
                        alt={user.result.name}
                        src={user.result.profilePicture}
                    >
                        {user.result.name.charAt(0)}
                    </Avatar>
                    <span>{user.result.name}</span>
                </div>
            ) : (
                <>
                    <div className="loggingButtonsDiv">
                        <button className="signButtons">
                            <Link to="/signin" className="account__buttons signInBtn">Sign In</Link>
                        </button>
                        <button className="signButtons">
                            <Link to="/signup" className="account__buttons signUpBtn">Sign Up</Link>
                        </button>
                    </div>
                </>
            )}
        </>
    )
}

export default AppNavbar
