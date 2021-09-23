import React, { useState } from "react";
import { ThemeProvider } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import { Theme } from "./styles.js";

import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import Logo from "./components/Home/Logo";
import Home from "./components/Home/Home";

const App = () => {
  const [isNavOpen, setIsNavOpen] = useState(true);

  return (
    <Router>
      <ThemeProvider theme={Theme}>
        <div className="app">
          <Switch>
            {/* signInRoute */}
            <Route exact path="/signin">
               <Logo showCollapse={false} isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
              <SignIn />
            </Route>
            {/* signUpRoute */}
            <Route exact path="/signup">
              <Logo showCollapse={false} isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
              <SignUp />
            </Route>
            {/* homeRoute */}
            <Route path="/">
              <Logo showCollapse={true} isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
              <Home isNavOpen={isNavOpen} />
            </Route>
          </Switch>
        </div>
      </ThemeProvider>
    </Router>
  );
};

export default App;
