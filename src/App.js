import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header/Header";
import {Route, Switch} from "react-router-dom";
import Home from "./components/Home/Home";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";

const App = () => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/contacts" component={Contacts}/>
            </Switch>
            <Footer/>
        </div>
    );
}

export default App;
