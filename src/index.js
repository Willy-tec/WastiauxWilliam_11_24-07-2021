import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './component/Header'
import Footer from './component/Footer';
import { BrowserRouter as Router, Switch, Route,
  //Link
} from "react-router-dom";
import Home from './page/Home';
import ErrorPage from './page/ErrorPage';
import Fiche from './page/Fiche';
import About from './page/About';


ReactDOM.render(
  <React.StrictMode>
    <Router>
    
      <Header></Header>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/fiche/:indexLogement">
          <Fiche/>
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route>
          <ErrorPage />
        </Route>
      </Switch>
      
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


