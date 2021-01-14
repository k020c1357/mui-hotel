import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Order from './pages/Order';
import Detail from './pages/Detail';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/order' exact component={Order}></Route>
          <Route path='/detail' exact component={Detail}></Route>
          <Route path='/Login' exact component={Login}></Route>
          <Route path='/signup' exact component={SignUp}></Route>
          <Route path='/' exact component={Home}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
};

export default App;