import React, { Component } from 'react';
import axios from 'axios';
import Images from './Images/Images';

export default class Gallery extends Component {
  constructor() {
    super()
    this.state = {
      images: [],
      thirds: true,
      scroll: ''
    }
  }

  changeSize = (e) => {  
    let el = e.target.src
    this.setState({
      thirds: !this.state.thirds,
      scroll: el
    })
  }

  componentDidMount() { 
    let name = this.props.match.params.name;
    axios.get(`/api/images/${name}`).then(res => {
      let images = res.data.map(e => { 
        return `/images/${name}/${e}`
      })
      this.setState({
        images: images
      })
    })
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.match.params.name !== this.props.match.params.name) {
      this.setState({
        images: [],
        scroll: ''
      })
      axios.get(`/api/images/${nextProps.match.params.name}`).then(res => {
        let images = res.data.map(e => { 
          return `/images/${this.props.match.params.name}/${e}`
        })
        this.setState({
          images: images
        })
      })
    }
  }

  render() {

    return (
      <div>
        { !this.state.images.length ? null :
           this.state.thirds ? 
          <Images 
              key='thirds'
              images={ this.state.images }
              container='gallery_container_thirds'
              image='gallery_imageThirds' 
              changeSize={ this.changeSize }
              scroll={this.state.scroll}
              alt={this.props.match.params.name} />
          :
          <Images
              key='full'
              images={ this.state.images }
              container='gallery_container_full'
              image='gallery_imageFull'
              changeSize={ this.changeSize }
              scroll={this.state.scroll} 
              alt={this.props.match.params.name} />  }
      </div>

    )
  }
}