import React, { Component } from 'react';
import Menu from './components/Menu/Menu';
import routes from './routes.js';

class App extends Component {
  constructor() {
    super()
    this.state = {
      menuOpen: false,
      loading: true
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

  showPage = () => {
    document.body.classList.remove('js-loading');
  }

  render() {

    document.body.classList.add('js-loading');
    window.addEventListener("load", this.showPage);

    return (
      <div>
        <Menu close={this.closeMenu} open={this.openMenu} menu={this.state.menuOpen}/>
        { routes }
      </div>
    );
  }
}

export default App;




