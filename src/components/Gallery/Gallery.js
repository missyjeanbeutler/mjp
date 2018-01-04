import React, { Component } from 'react';
import { StaggeredMotion, spring } from 'react-motion';
import oceans from './oceans_images.js';

export default class Gallery extends Component {
  constructor() {
    super()
    this.state = {
      thirds: true,
      mouseX: 0
    }
  }

  changeSize = (e) => {
    let el = e.target
    this.setState({
      thirds: !this.state.thirds
    }, () => {
      let remainder = ( window.innerWidth - el.width ) / 2
      el.scrollIntoView()
      console.log(el.getBoundingClientRect().left - remainder, ' half')
      // window.scrollTo(el.getBoundingClientRect().left - remainder, 0)
    })
  }

  render() {
  
    let styles = { height: this.state.thirds ? 'calc(100% / 3 - 10px)' : '75vh' }

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