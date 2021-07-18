import React, {useEffect} from 'react';
import './styles/main.scss';
import Header from "./components/Header/Header";
import {Route, Switch, useHistory} from "react-router-dom";
import Projects from "./components/Projects/Projects";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";
import Cv from "./components/Cv/Cv";

const App = () => {
  const history = useHistory()
  useEffect(() => {
    history.push('projects')
  }, [history])

    return (
        <div className="appWrapper">
            <Header/>
            <Switch>
                <Route exact path="/" component={Cv}/>
                <Route exact path="/projects" component={Projects}/>
                <Route exact path="/contacts" component={Contacts}/>
            </Switch>
            <Footer/>
        </div>
    );
}

export default App;
