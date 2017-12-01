import React, { Component } from 'react';
import oceans from './ocean_images';
import outdoors from './outdoor_images';

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
      "width": Math.floor(oceans.length / 3 * 250 ) + 'px',
      "flexWrap": "wrap",
      "cursor": "pointer",
    } : {
      "cursor": "pointer",
    }

    let gallery_image_view = this.state.thirds ? {
      "height": "32%",
      "margin": "5px"
    } : {
      "height": "80vh",
      "marginRight": "10px"
    }

    const allImages = oceans.map((e, i) => (
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