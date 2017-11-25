import React, { Component } from 'react';
import Home from './components/Home/Home';
import Menu from './components/Menu/Menu';

class App extends Component {
  render() {
    return (
      <div>
       <Menu />
       <Home />
      </div>
    );
  }
}

export default App;
