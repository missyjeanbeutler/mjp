import React, { Component } from 'react';
import Menu from './components/Menu/Menu';
import routes from './routes.js';

class App extends Component {
  constructor() {
    super()
    this.state = {
      menu: true
    }
  }

  closeMenu = () => {
    this.setState({
      menu: false
    })
  }

  openMenu = () => {
    this.setState({
      menu: true
    })
  }

  render() {
    return (
      <div>
        <Menu close={this.closeMenu} open={this.openMenu} menu={this.state.menu}/>
        { routes }
      </div>
    );
  }
}

export default App;




