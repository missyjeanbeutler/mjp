import React, { Component } from 'react';
import { TransitionMotion, spring } from 'react-motion';
import oceans from './oceans_images.js';
import axios from 'axios';

export default class Gallery extends Component {
  constructor() {
    super()
    this.state = {
      thirds: true,
      images: []
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

  componentDidMount() { 
    axios.get(`/api/images/${this.props.match.params.name}`).then(res => {
      let images = res.data.map(e => { return {key: e, data: {url: require(`../../assets/images/${this.props.match.params.name}/${e}`)}}})
      this.setState({
        images: images
      })
    })
  }

  componentWillReceiveProps(nextProps) {
    if(!(nextProps.match.params.name === this.props.match.params.name)) {
      this.setState({images:[]})
      axios.get(`/api/images/${nextProps.match.params.name}`).then(res => {
        let images = res.data.map(e => { return {key: e, data: {url: require(`../../assets/images/${this.props.match.params.name}/${e}`)}}})
        console.log(images)
        this.setState({
          images: images
        })
      })
    }
  }

  render() {

    let styles = { height: this.state.thirds ? 'calc(100% / 3 - 10px)' : '75vh' }

    return (
      <div>
        {
          this.state.images.length ?
        <TransitionMotion
          defaultStyles={this.state.images.map(e => { return {...e, style: {o: 0}}})}
          // styles={prevInterpolatedStyles => prevInterpolatedStyles.map((_, i) => {
          //   return i === 0 ? {...e, o: spring(1)} : {...e, o: spring(prevInterpolatedStyles[i - 1].o)}
          // })}
          styles={this.state.images.map(e => {return {...e, style: {o: spring(1)}}})}
          willEnter={() => {style: {o: 0}}}
          willLeave={() => {style: {o: spring(0)}}}>
          {interpolatingStyles => 
            <div className="gallery_container">
              {interpolatingStyles.map(({key, style, data}, i) => (
                  <div key={i} className='gallery_image_container' 
                      style={{opacity: style.o, ...styles}}
                      onClick={this.changeSize}
                      id={key}>
                    <img src={data.url} alt='oceans'/> 
                  </div>
                )
              )}
            </div>
          }
        </TransitionMotion>
        :
        null }
      </div>
    )
  }
}