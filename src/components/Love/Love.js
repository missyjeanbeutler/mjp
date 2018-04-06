import React, { Component } from 'react';
import Transition from 'react-motion-ui-pack';
import { spring } from 'react-motion';
import { NavLink } from 'react-router-dom';

export default class Love extends Component {
  render() {
    return (
      <div className='love_main'>
        <Transition
          component={false}
          enter={{ 
            opacity: spring(1, {stiffness: 40, damping: 20}), 
            translateY: spring(0, {stiffness: 40, damping: 20}) }}
          leave={{ opacity: 0, translateY: 30 }}>
          <header className='love_header' key='love_header'>
            <h1>ENGAGEMENTS <div/> FORMALS</h1>
            <p>Whether you're a couple that's been married for years or a couple that just got engaged, let's document your love.</p>
            <div/>
          </header>
        </Transition>
        <Transition
          component={false}
          enter={{ opacity: spring(1, {stiffness: 40, damping: 20}) }}
          leave={{ opacity: 0 }}>
            <div key='love' className='love_image_container'>
              <NavLink to='/gallery/engagements'>
                <div style={{
                    background: "url('/images/engagements/engagement.jpg') no-repeat center", 
                    backgroundSize: 'cover'}}>
                    <div>
                      <h2>ENGAGEMENTS</h2>
                      <p>see more</p>
                    </div>
                </div>
              </NavLink>
              <NavLink to='/gallery/formals'>
                <div style={{
                    background: "url('/images/formals/bridal.jpg') no-repeat center", 
                    backgroundSize: 'cover'}}>
                    <div>
                      <h2>FORMALS</h2>
                      <p>see more</p>
                    </div>
                </div>
              </NavLink>
            </div>
        </Transition>
      </div>
    )
  }
}