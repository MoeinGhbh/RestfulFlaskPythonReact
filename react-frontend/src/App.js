import React, {Component, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, BrowserRouter, Switch} from "react-router-dom";
import Home from './ui/templates/Home';
import Login from './ui/templates/Login';
import DefineZone from './ui/templates/DefineZone';
import Panel from './ui/templates/Panel';
import ChangePassword from './ui/templates/ChangePassword';
import Division from './ui/templates/Division'

//function App() {
class App extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <Switch>
                        <Route path="/" component={Home} exact={true}  />
                        <Route path="/Login" component={Login}/>
                        <Route path="/Panel" component={Panel}/>
                        <Route path="/DefineZone" component={DefineZone}/>
                        <Route path="/ChangePassword" component={ChangePassword}/>
                        <Route path="/Division" component={Division}/>
                    </Switch>
                </BrowserRouter>
                {/*<header className="App-header">*/}
                {/*    <p> my token = {window.token} </p>*/}
                {/*</header>*/}
            </div>
        );

    }
}

export default App;
