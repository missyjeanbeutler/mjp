import React, { Component } from 'react';
import { TransitionMotion, spring } from 'react-motion';
import NavLinks from './NavLinks/NavLinks';

export default class Menu extends Component {

  willLeave() {
    console.log('leaving!')
    return {width: spring(0), opacity: spring(0)}
  }

  render() {
    return (
      <TransitionMotion
        styles={[{key: 'menu', style: {width: spring(window.innerWidth), opacity: spring(0.85)}}]}
        defaultStyles={[{key: 'menu', style: {width: 0, opacity: 0}}]}
        willLeave={this.willLeave}>
        {(motion_style) => (
              <div className='menu_container' style={{...motion_style[0].style}}>
                <div className='menu_info'>
                  <div className='menu_logo'/>
                  <div className='menu_contact' style={{...motion_style[0].style.opacity}}>
                    <h3>MISSY J PHOTO</h3>
                    <h3>based in the Orem/Provo Utah area</h3>
                    <br/>
                    <br/>
                    <a href='mailto:missyjphoto@gmail.com'><h3>missyjphoto@gmail.com</h3></a>
                    <a href='tel:1-801-368-3141'><h3>801.368.3141</h3></a>
                  </div>
                  <div className='menu_socials' style={{...motion_style[0].style.opacity}}>
                    <a href=''><div className='menu_insta'/></a>
                    <a href=''><div className='menu_fb'/></a>
                  </div>
                </div>
                <div className='menu_x' onClick={this.props.close}/>
                <NavLinks close={this.props.close}/>
              </div>
        )}
      </TransitionMotion>
    )
  }
}