import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavBar from "./components/layout/NavBar";
import User from "./components/users/User";
import About from "./components/pages/About";
import GithubState from "./context/GithubState";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";

import './App.css';

const App = (props) => {

    return (
        <GithubState>
            <Router>
                <div className="App">
                    <NavBar title="Github Finder"/>
                    <div className="container">
                        <Switch>
                            <Route
                                exact
                                path="/"
                                component={Home}
                            />
                            <Route
                                exact
                                path="/about"
                                component={About}
                            />
                            <Route
                                exact
                                path="/user/:login"
                                render={props => (
                                    <User
                                        {...props}
                                    />
                                )}/>
                            <Route
                                component={NotFound}
                            />
                        </Switch>
                    </div>
                </div>
            </Router>
        </GithubState>
    );
}

export default App;
