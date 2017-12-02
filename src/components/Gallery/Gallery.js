import React, { Component } from 'react';
import oceans from './oceans_images.js';

export default class Gallery extends Component {

  render() {

    const images = oceans.map((e, i) => (
      <div key={i} className='gallery_image'>
        <img src={e}/>
      </div>
    ))

    return (
      <div>
        { images }
      </div>
    )
  }
}