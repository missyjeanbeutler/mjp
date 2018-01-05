import React, { Component } from 'react';
import Menu from './components/Menu/Menu';
import routes from './routes.js';

class App extends Component {
  constructor() {
    super()
    this.state = {
      menuOpen: false
    }
  }

  closeMenu = () => {
    this.setState({
      menuOpen: false
    })
  }

  openMenu = () => {
    this.setState({
      menuOpen: true
    })
  }

  render() {
    return (
      <div>
        <Menu close={this.closeMenu} open={this.openMenu} menu={this.state.menuOpen}/>
        { routes }
      </div>
    );
  }
}

export default App;




