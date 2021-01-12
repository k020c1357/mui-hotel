import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import Order from './pages/Order';
import Detail from './pages/Detail';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path='/' exact component={Home}></Route>
        <Route path='/sign-in' exact component={SignIn}></Route>
        <Route path='/detail' exact componemt={Detail}></Route>
        <Route path='/order' exact component={Order}></Route>
      </BrowserRouter>
    );
  }
};
/* function App() {
  return (
    <div>
      hello world!
    </div>
  );
} */
export default App;