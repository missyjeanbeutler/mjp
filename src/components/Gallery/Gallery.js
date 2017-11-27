import React, { Component } from 'react';
import images from './images.js';
import full from '../../assets/cursor_full.png';
import thirds from '../../assets/cursor_thirds.png';

export default class Gallery extends Component {
  constructor() {
    super()
    this.state = {
      thirds: false
    }
  }

  changeView = () => {
    this.setState({thirds: !this.state.thirds})
  }

  render() {

    let gallery_view = this.state.thirds ? {
      "width": Math.floor(images.length / 3 * 250 ) + 'px',
      "flexWrap": "wrap",
      "cursor": "url(" + full + "), auto"
    } : {
      "cursor": "url(" + thirds  + "), auto"
    }

    let gallery_image_view = this.state.thirds ? {
      "height": "32%",
      "margin": "5px"
    } : {
      "height": "80vh",
      "marginRight": "10px"
    }

    const allImages = images.map((e, i) => (
      <div key={i} style={ gallery_image_view }>
        <img src={e} alt='ocean'/>
      </div>
    ))
 
    return (
      <div>
        <div className="gallery" 
          style={ gallery_view } 
          onClick={ this.changeView }>
          { allImages }
        </div>
      </div> 
    )
  }
}