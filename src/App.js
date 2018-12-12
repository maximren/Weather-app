import React, { PureComponent } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import './App.css';
import Navbar from './components/Navbar';
import MyCity from './components/MyCity';
import OtherCity from './components/OtherCity';

class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Navbar />
            <Route exact path="/" component={MyCity} />
            <Route path="/other" component={OtherCity} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
