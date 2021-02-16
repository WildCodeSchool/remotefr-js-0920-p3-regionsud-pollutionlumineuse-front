import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  Homepage,
  Definition,
  Essential,
  Game,
  Practical,
  Ressource,
} from './pages';

import Header from './components/Header';
import Footer from './components/Footer';

const routerBasename = process.env.REACT_APP_ROUTER_BASENAME || '/';

function App() {
  return (
    <div className="App">
      <Router basename={routerBasename}>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/l-essentiel" component={Essential} />
          <Route path="/definitions" component={Definition} />
          <Route path="/pratique" component={Practical} />
          <Route path="/jeu-memo" component={Game} />
          <Route path="/ressources" component={Ressource} />
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
