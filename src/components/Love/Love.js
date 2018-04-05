import React, { Component } from 'react';
import Transition from 'react-motion-ui-pack';
import { spring } from 'react-motion';

export default class Love extends Component {


  render() {
    return (
      <div className='love_main'>
        <header className='love_header'>
          <h1>ENGAGEMENTS <div/> FORMALS</h1>
          <p>Whether it be good text or bad, it doesn't matter <br/>  because I can't think of what to put here.</p>
        </header>
        <Transition
          component={false}
          runOnMount={true}
          enter={{ 
            opacity: spring(1, {stiffness: 40, damping: 20}), 
            translateY: spring(0, {stiffness: 40, damping: 20}) }}
          leave={{ opacity: 0, translateY: 30 }}>
            <div key='love' className='love_image_container'>
              <div style={{
                  background: "url('/images/love/engagement.jpg') no-repeat center", 
                  backgroundSize: 'cover'}}>
              </div>
              <div style={{
                  background: "url('/images/love/bridal.jpg') no-repeat center", 
                  backgroundSize: 'cover'}}>
              </div>
            </div>
        </Transition>
      </div>
    )
  }
}