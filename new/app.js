import React from 'react';
import logo from './logo.svg';
import Home from './Home.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Create from './Create';
import Navbar from './Navbar';
import Send from './Send';
import InfoRend from './InfoRend';

function App() {
    return (
        <div className="App">
            <div className="App-header">
                <div className="content">
                    <h1>new app</h1>
                </div>
            </div>
        </div>
    );
}

export default App;
