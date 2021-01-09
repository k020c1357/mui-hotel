import React, { Component } from 'react';
import Header from './views/Header';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route path='/' exact component={Home}></Route>
          <Route path='/sign-in' exact component={SignIn}></Route>
        </div>
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