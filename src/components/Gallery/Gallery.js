import React, { Component } from 'react';
import $ from 'jquery';
import images from './images.js';
import isotope from 'isotope-layout';

export default class Gallery extends Component {

  componentDidMount() {
    $('.gallery_image').isotope({
      layoutMode: 'masonryHorizontal',
      masonryHorizontal: {
        rowHeight: 50
      }
    })
  }

  render() {

    const allImages = images.map((e, i) => (
      <div key={i} className='gallery_image'>
        <img src={e}/>
      </div>
    ))

    return (
      <div>
        { allImages }
      </div>
    )
  }
}