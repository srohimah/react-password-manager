import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import AddPassword from './components/AddPassword'
import EditPassword from './components/EditPassword'
import NotFound from './components/NotFound'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Switch>
          <Route exact path="/" component={AddPassword}/>
          <Route path="/password-manager" component={Home}/>
          <Route path="/password-manager/update/:key" component={EditPassword}/>
          <Route component={NotFound}/>
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
