import React, { Component } from 'react';
import Menu from './components/Menu/Menu';
import router from './router.js';

class App extends Component {
  render() {
    return (
      <div>
       <Menu />
       { router }
      </div>
    );
  }
}

export default App;
