import React from 'react';
import Transition from 'react-motion-ui-pack';
import { spring } from 'react-motion';

export default class Contact extends React.Component {
  constructor() {
    super()
    this.state = {
      loaded: false
    }
  }

  onLoad = () => {
    setTimeout(() => {
      this.setState({
        loaded: true
      })
    }, 450);
  }

  render() {
    return (
      <div>
        { this.state.loaded ? <Transition
          component='div'
          enter={{ 
            opacity: spring(1, {stiffness: 40, damping: 20}),
            translateY: spring(0, {stiffness: 40, damping: 20}) }}
          leave={{ opacity: 0, translateY: 30 }}> 
            <div key='contact' className='contact_info'>
              <img src='/svg/full-logo.svg' 
                style={{height: '130px',
                width: '130px'}}/>
              <div className='contact_line'/>
              <div>
                <div className='contact_contact' >
                  <h3>MISSY J PHOTO</h3>
                  <h3>based in the Orem/Provo Utah area</h3>
                  <br/>
                  <br/>
                  <a href='mailto:missyjphoto@gmail.com'><h3>missyjphoto@gmail.com</h3></a>
                  <a href='tel:1-801-368-3141'><h3>801.368.3141</h3></a>
                </div>
                <div className='contact_socials' >
                  <a href=''><div className='insta'/></a>
                  <a href=''><div className='fb'/></a>
                </div>
              </div>
            </div>
        </Transition>
        : null }
        <img style={{display: 'none'}} src='/svg/full-logo.svg' onLoad={this.onLoad}/>
      </div>
    )
  }
}