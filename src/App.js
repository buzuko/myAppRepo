import React from 'react';
//import logo from './logo.svg';
import Home from './Home.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Send from './Send';
import InfoRend from './InfoRend';
import ConectPage from "./ConectPage"
import { AppProvider } from './AppProvider.js';

function App() {
  return (
    <React.StrictMode>
      <AppProvider>
        <div className="App">
          <Router>
            <Navbar />
            <div className="App-header">
              <div className="content">
                <Switch>
                  <Route exact path="/Home">
                    <Home />
                  </Route>
                  <Route exact path="/ConectPage">
                    <ConectPage />
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
      </AppProvider>
    </React.StrictMode>
  );
}

export default App;
