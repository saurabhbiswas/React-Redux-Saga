
import React, { Component } from 'react';
import Customers from "./js/components/Customers";
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    
    return (

      <Router>
        <div className="App">
        <header className="App-header">
          <img src="./assets/images/conviva.png" className="App-logo" alt="logo" />
          <h1 className="App-title">ConViva Customer Portal </h1>
        </header>
          <Switch>
                <Route exact path= "/" render={() => (
                  <Redirect to="/customerlist"/>
                )}/>
                 <Route exact path='/customerlist' component={Customers} />
          </Switch>
      </div>
    </Router>
    );
  }
}

export default App;




