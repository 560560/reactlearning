import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header/Header";
import {Route, Switch} from "react-router-dom";
import Home from "./components/Home/Home";
import Contacts from "./components/Contacts/Contacts";

const App = () => {
    return (
        <>
            <Header/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/contacts" component={Contacts}/>
            </Switch>
        </>
    );
}

export default App;
