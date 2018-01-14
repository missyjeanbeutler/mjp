import React from 'react';
import { StaggeredMotion, spring } from 'react-motion';
import axios from 'axios';

export default class Images extends React.Component  {
  componentWillUnmount() {
    console.log('unmounting')
  }
  render() {
    return (
      <div>
        {
          this.props.images.length ? 
            <StaggeredMotion
              defaultStyles={this.props.images.map(e => { return {o: 0}})}
              styles={prevInterpolatedStyles => prevInterpolatedStyles.map((_, i) => {
                return i === 0 ? {o: spring(1)} : {o: spring(prevInterpolatedStyles[i - 1].o)}
              })}>
              {interpolatingStyles => 
                <div className={ this.props.container }>
                  {interpolatingStyles.map((style, i) => (
                      <div key={i} className={this.props.image} 
                          style={{opacity: style.o}}
                          onClick={this.props.changeSize}
                          id={this.props.images[i]}>
                        <img src={this.props.images[i]} alt='oceans'/> 
                      </div>
                    )
                  )}
                </div>
              }
            </StaggeredMotion>
            :
            null
        }
      </div>
    )
  }
  }