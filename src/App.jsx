import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import {
  Homepage,
  Definition,
  Essential,
  Game,
  Practical,
  Ressource,
} from '../pages';

import Header from '../components/Header';
import Footer from '../components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/mot-message-cle" component={Essential} />
          <Route path="/definition" component={Definition} />
          <Route path="/pratique" component={Practical} />
          <Route path="/jeu" component={Game} />
          <Route path="/ressource" component={Ressource} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
