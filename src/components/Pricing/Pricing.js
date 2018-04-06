import React from 'react';
import Transition from 'react-motion-ui-pack';
import { spring } from 'react-motion';

export default function Pricing() {
  return (
    <div className='pricing_container'>
      <Transition
          component={false}
          enter={{ 
            opacity: spring(1, {stiffness: 40, damping: 20}), 
            translateY: spring(0, {stiffness: 40, damping: 20}) }}
          leave={{ opacity: 0, translateY: 30 }}>
          <div key='pricing' className='pricing_info_container'>
            <div className='pricing_info'>
              <h1>PRINTS</h1>
              <p>If you'd like to purchase a print, just reach out.</p>
            </div>
            <div className='divider'/>
            <div className='pricing_info'>
              <h1>WEDDINGS</h1>
              <p>Each session includes all of the final images in digital format for your personal use.</p>
              <div className='numbers'>
                <div>
                  <h3 style={{marginLeft: '-3.3px'}}>ENGAGEMENTS</h3>
                  <div className='line'/>
                  <h3>450</h3>
                </div>
                <div>
                  <h3>FORMALS</h3>
                  <div className='line'/>
                  <h3>450</h3>                  
                </div>
              </div>
              <p style={{color: '#ABABAB', fontSize: '11px', lineHeight: '17px'}}>* I currently am not booking weddings at this time. <br/> I am, however, booking sessions for engagements and formals.</p>
            </div>
          </div>
        </Transition>
    </div>
  )
}