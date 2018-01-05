import React, { Component } from 'react';
import { Motion, StaggeredMotion, spring } from 'react-motion';
import NavLinks from './NavLinks/NavLinks';

export default class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      closed: props.menu
    }
  }
 
  componentWillReceiveProps(newProps) {
    if(newProps.menu !== this.state.closed) {
      this.setState({
        closed: newProps.menu
      })
    }
  }

  render() {

    let menu = [
      <div className='menu_fullBackground'/>,
      <div className='menu_fullColumns'>
        <div className='menu_info'>
            <div className='menu_logo'/>
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
    ]

    return (
      <div>
        <StaggeredMotion
        defaultStyles={[{left: 0}, {left: 0, opacity: 0}]}
        styles={prevInterpolatedStyles => prevInterpolatedStyles.map((_, i) => {
          return i === 0
            ? {left: spring(this.state.closed ? 0 : -window.innerWidth)}
            : {left: spring(prevInterpolatedStyles[i - 1].left), opacity: spring(this.state.closed ? 1 : 0)}
        })}>
        {style => (
              <div>
                {style.map((style, i) => (
                  <div key={i} style={{...style, 
                    position: 'fixed',
                    top: 0,
                    bottom: 0}}>
                    {menu[i]}
                  </div>
                ))}
              </div>
          )}
        </StaggeredMotion>
        <Motion style={{width: spring(this.state.closed ? 0 : 25), opacity: spring(this.state.closed ? 0 : 1)}}>
          {style => (
            <div className='menu_closedContainer'>
              <div className='menu_logo'/>
              <div className='menu_hamburger' onClick={this.props.open} style={{...style}}/>
            </div>
          )}
        </Motion>
      </div>
    )
  }
}