import React, { Component } from 'react';
import { StaggeredMotion, spring } from 'react-motion';
import oceans from './oceans_images.js';

export default class Gallery extends Component {
  constructor() {
    super()
    this.state = {
      thirds: true
    }
  }

  changeSize = (e) => {
    let el = e.target
    this.setState({
      thirds: !this.state.thirds
    }, () => el.scrollIntoView())
  }

  render() {
  
    let styles = { height: this.state.thirds ? 'calc(100% / 3 - 10px)' : '90vh' }

    return (
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
                      onClick={this.changeSize}
                      id={oceans[i]}>
                    <img src={oceans[i]} alt='oceans'/>
                  </div>
                )
              )}
            </div>
          }
        </StaggeredMotion>
    )
  }
}