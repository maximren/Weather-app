import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar';
import MyCity from './components/MyCity';
import OtherCity from './components/OtherCity';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route path="/" component={MyCity} />
          <Route path="/other" component={OtherCity} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
