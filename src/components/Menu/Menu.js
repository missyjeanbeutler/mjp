import React, { Component } from 'react';
import { Motion, StaggeredMotion, spring } from 'react-motion';
import NavLinks from './NavLinks/NavLinks';

export default class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: props.menu
    }
  }
 
  componentWillReceiveProps(newProps) {
    if(newProps.menu !== this.state.isOpen) {
      this.setState({
        isOpen: newProps.menu
      })
    }
  }

  render() {

    return (
      <div>
        <Motion
        defaultStyle={{left: 0, opacity: 0}}
        style={{left: spring(this.state.isOpen ? 0 : -window.innerWidth), opacity: spring(this.state.isOpen ? 1 : 0)}}>
        {style => (
            <div style={{...style, 
              position: 'fixed',
              top: 0,
              bottom: 0,
              display: style.left === -window.innerWidth ? 'none' : 'block'}}>
              <div className='menu_openContainer'>
                <div className='menu_info'>
                    <div className='menu_logoFull'/>
                    <div className='menu_contact' >
                      <h3>MISSY J PHOTO</h3>
                      <h3>based in the Orem/Provo Utah area</h3>
                      <br/>
                      <br/>
                      <a href='mailto:missyjphoto@gmail.com'><h3>missyjphoto@gmail.com</h3></a>
                      <a href='tel:1-801-368-3141'><h3>801.368.3141</h3></a>
                    </div>
                    <div className='menu_socials' >
                      <a href=''><div className='menu_insta'/></a>
                      <a href=''><div className='menu_fb'/></a>
                    </div>
                </div>
                <div style={{width: '100%'}}>
                  <div className='menu_x' onClick={this.props.close} />
                  <NavLinks close={this.props.close} />
                </div>
              </div> 
            </div>
          )}
        </Motion>
        <Motion style={{opacity: spring(this.state.isOpen ? 0 : 1)}}>
          {style => (
            <div className='menu_closedContainer'>
              <div className='menu_logo' style={{...style}}/>
              <div className='menu_hamburger' onClick={this.props.open} style={{...style}}/>
            </div>
          )}
        </Motion>
      </div>
    )
  }
}