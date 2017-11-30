import React, { Component } from 'react';
import images from './images.js';

export default class Gallery extends Component {
  constructor() {
    super()
    this.state = {
      thirds: false,
      fade: false
    }
  }

  changeView = () => {
    this.setState({fade: true})
    setTimeout(() => {
      this.setState({fade: false, thirds: !this.state.thirds})
    }, 300)
  }

  render() {

    let gallery_view = this.state.thirds ? {
      "width": Math.floor(images.length / 3 * 250 ) + 'px',
      "flexWrap": "wrap",
      "cursor": "pointer",
      "opacity": this.state.fade ? 0 : 1
    } : {
      "cursor": "pointer",
      "opacity": this.state.fade ? 0 : 1
    }

    let gallery_image_view = this.state.thirds ? {
      "height": "32%",
      "margin": "5px"
    } : {
      "height": "80vh",
      "marginRight": "10px"
    }

    const allImages = images.map((e, i) => (
      <div key={i} style={ gallery_image_view } id={`img${i}`}>
        <a href={`#img${i}`}>
          <img src={e} alt='ocean'/>
        </a>
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