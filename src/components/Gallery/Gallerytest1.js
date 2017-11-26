import React, { Component } from 'react';
import Masonry from 'react-masonry-component';
import images from './images';
 
let masonryOptions = {
    transitionDuration: '1s',
    horizontalOrder: true
};
 
export default class Gallery extends Component {
  constructor() {
    super()
    this.state = {
      layoutReady: false
    }
  }

	handleLayoutReady = () => {
		if (!this.state.layoutReady) {
			this.setState({ layoutReady: true });
		}
	}

  render() {

    const allImages = images.map((e, i) => (
           <div key={i} className='image_container'>
               <img src={e} alt='oceans' className="gallery_image"/>
           </div>
       ))

    return (
      <Masonry
        style={{ 
          visibility: (this.state.layoutReady)
            ? 'visible'
            : 'hidden'
        }}
        className='gallery'
        options={masonryOptions}
        onLayoutComplete={this.handleLayoutReady}>

        { allImages }

      </Masonry>
    )
  }
}