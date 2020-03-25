
import React, { Component } from 'react';
import Customers from "./js/components/Customers";
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import './App.css';
import ErrorBoundary from './js/components/ErrorBoundary';

class App extends Component {
  render() {
    
    return (

      
   <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
        <header className="App-header">
          <img src="./assets/images/conviva.png" className="App-logo" alt="logo" />
          <h1 className="App-title">ConViva Customer Portal </h1>
        </header>
          <ErrorBoundary>
            <Route exact path='/' component={Customers} />
          </ErrorBoundary>
         
      </div>
    </Router>
    );
  }
}

export default App;




