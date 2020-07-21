import React from 'react';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';

import {Provider} from 'react-redux';
import store from './redux/store';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
    <div className="App">
    <Router>
            <div className="container">
              <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/home" component={Home} />
              </Switch>
            </div>
          </Router>
    </div>
    </Provider>
  );
}

export default App;
