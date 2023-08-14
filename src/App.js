import React from 'react';
//import logo from './logo.svg';
import Home from './Home.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Send from './Send';
import InfoRend from './InfoRend';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="App-header">
          <div className="content">
            <Switch>
              <Route exact path="/Home">
                <Home />
              </Route>
              <Route exact path="/InfoRend">
                <InfoRend />
              </Route>
              <Route exact path="/Send">
                <h1>Send</h1>
                <Send />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
