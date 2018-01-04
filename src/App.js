import React, { Component } from 'react';
import Menu from './components/Menu/Menu';
import routes from './routes.js';

class App extends Component {
  constructor() {
    super()
    this.state = {
      menu: false
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
          { this.state.menu ? 
            <Menu close={this.closeMenu}/>
            :
            <div className='menu_closedContainer'>
              <div className='menu_logo'/>
              <div className='menu_hamburger' onClick={this.openMenu}/>
            </div>
          }
      { routes }
      </div>
    );
  }
}

export default App;




