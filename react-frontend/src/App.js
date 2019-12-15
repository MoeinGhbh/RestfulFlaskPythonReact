import React, {Component, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, BrowserRouter, Switch} from "react-router-dom";
import Home from './ui/templates/Home';
import Login from './ui/templates/Login';
import Panel from './ui/templates/Panel';
import ChangePassword from './ui/templates/ChangePassword';


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
                        <Route path="/" component={Login} exact={true}  />
                        <Route path="/Home" component={Home}/>
                        <Route path="/Panel" component={Panel}/>
                        <Route path="/ChangePassword" component={ChangePassword}/>
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
