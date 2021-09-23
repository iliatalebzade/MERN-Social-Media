import React from 'react'
import { Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";

import AppNavbar from './AppNavbar/AppNavbar';

import './Navbar.css';

const Navbar = () => {
    return (
        <div className="navbar">
            <Link to="/"><h1>ART<span>STATION</span></h1></Link>
            <div className="navbar__account">
                <Switch>
                    <Route exact path="/signin" >
                        <AppNavbar showAccountPart={false} />
                    </Route>
                    <Route exact path="/signup" >
                        <AppNavbar showAccountPart={false} />
                    </Route>
                    <Route path="/">
                        <AppNavbar showAccountPart={true} />
                    </Route>
                </Switch>
            </div>
        </div>
    )
}

export default Navbar