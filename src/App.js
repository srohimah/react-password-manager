import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import AddPassword from './components/AddPassword'
import EditPassword from './components/EditPassword'
import Login from './components/Login'
import NotFound from './components/NotFound'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Signup from './components/Signup';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Password Manager</h1>
        </header>
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route exact path="/signup" component={Signup}/>
          <Route exact path="/password-manager" component={Home}/>
          <Route exact path="/password-manager/add" component={AddPassword}/>
          <Route exact path="/password-manager/edit/:key" component={EditPassword}/>
          <Route component={NotFound}/>
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
