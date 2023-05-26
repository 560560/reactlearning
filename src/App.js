import React from 'react';
import './styles/main.scss';
import { Header } from './components/Header/Header';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import Projects from './components/Projects/Projects';
import { Contacts } from './components/Contacts/Contacts';
import { Footer } from './components/Footer/Footer';

const App = () => {
  const { pathname } = useLocation();

  return (
    <div className="appWrapper">
      <Header />
      <Switch>
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contacts" component={Contacts} />
        {pathname === '/' && <Redirect to="/projects" />}
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
