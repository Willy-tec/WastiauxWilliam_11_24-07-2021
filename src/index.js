import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './component/app/App';
import Header from './component/Header'
import Footer from './component/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  //Link
} from "react-router-dom";
import Home from './page/Home';
import ErrorPage from './page/ErrorPage';


ReactDOM.render(
  <React.StrictMode>
    <Router>
    
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home />
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


