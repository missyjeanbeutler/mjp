import React, { Component } from 'react';
import { StaggeredMotion, TransitionMotion, spring } from 'react-motion';
import oceans from './oceans_images.js';

export default class Gallery extends Component {
  constructor() {
    super()
    this.state = {
      thirds: true,
      fade: false,
      num: 0
    }
  }

  willLeave() {
    return {opacity: spring(0)}
  }

  changeSize = (e) => {
    this.setState(prev => {
      return {
        fade: !prev.fade,
        num: prev.num + 1
      }
    })
    setTimeout(() => {
      this.setState(prev => { 
        return { 
          fade: !prev.fade,
          thirds: !prev.thirds
        }
      })
    })
  }



render() {
  
    let styles = { height: this.state.thirds ? 'calc(100% / 3 - 10px)' : '90vh' }

    return (
      <div>
        {this.state.fade ? null :
        <TransitionMotion 
          styles={[{key: this.state.num + '', style: {opacity: spring(1)}}]}
          willLeave={this.willLeave}>
            {(motion_style) => (
              <div style={{...motion_style[0].style}}>
                <StaggeredMotion
                  defaultStyles={oceans.map(e => { return {o: 0}})}
                  styles={prevInterpolatedStyles => prevInterpolatedStyles.map((_, i) => {
                    return i === 0 ? {o: spring(1)} : {o: spring(prevInterpolatedStyles[i - 1].o)}
                  })}>
                  {interpolatingStyles => 
                    <div className="gallery_container">
                      {interpolatingStyles.map((style, i) => (
                          <div key={i} className='gallery_image_container' 
                              style={{opacity: style.o, ...styles}}
                              onClick={this.changeSize}>
                            <img src={oceans[i]} alt='oceans'/>
                          </div>
                        )
                      )}
                    </div>
                  }
                </StaggeredMotion>
              </div>
            )}
        </TransitionMotion>}
      </div>
    )
  }
}