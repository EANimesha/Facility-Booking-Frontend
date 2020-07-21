import React from 'react';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';

import jwtDecode from "jwt-decode";

import {Provider} from 'react-redux';
import store from './redux/store';
import {SET_AUTHENTICATED} from '../src/redux/types';
import axios from "axios";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import history from "../src/history";
import { setUser } from './redux/actions/userActions';

const token = localStorage.Token;
// console.log(token);
if (token) {
  const decodedToken = jwtDecode(token);
  console.log(decodedToken.user);
  if (decodedToken.exp * 1000 < Date.now()) {
    // store.dispatch(logoutUser())
    window.location.href = "/";
  } else {
    store.dispatch({type:SET_AUTHENTICATED});
    axios.defaults.headers.common['Authorization']=token;
    store.dispatch(setUser(decodedToken.user));
    history.push('/home');
  }
} 

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
