import React, { Component } from 'react';
import { StaggeredMotion, spring } from 'react-motion';
import axios from 'axios';

export default class Gallery extends Component {
  constructor() {
    super()
    this.state = {
      thirds: true,
      images: [],
      loading: true
    }
  }

  changeSize = (e) => {  
    let el = e.target
    this.setState({
      thirds: !this.state.thirds
    }, () => {
      // let remainder = ( window.innerWidth - el.width ) / 2
      el.scrollIntoView()
      // console.log(el.getBoundingClientRect().left - remainder, ' half')
      // window.scrollTo(el.getBoundingClientRect().left - remainder, 0)
    })
  }

  componentDidMount() { 
    axios.get(`/api/images/${this.props.match.params.name}`).then(res => {
      let images = res.data.map(e => { return `/images/${this.props.match.params.name}/${e}`})
      this.setState({
        images: images,
        loading: false
      })
    })
  }

  componentWillReceiveProps(nextProps) {
    if(!(nextProps.match.params.name === this.props.match.params.name)) {
      this.setState({images:[], loading: true})
      axios.get(`/api/images/${nextProps.match.params.name}`).then(res => {
        let images = res.data.map(e => { return `/images/${this.props.match.params.name}/${e}`})
        this.setState({
          images: images,
          loading: false
        })
      })
    }
  }

  render() {

    let container = this.state.thirds ?
      {
        width: '100vw',
        padding: '43px 43px 43px 96px',
        columnCount: 3,
        columnGap: '7.5px'
      }
        :
      {
        height: '100vh',
        padding: '43px 96px',
        display: 'flex' 
      }

    return (
      <div>
        <div>
        {
          !this.state.loading ?
        <StaggeredMotion
          defaultStyles={this.state.images.map(e => { return {o: 0}})}
          styles={prevInterpolatedStyles => prevInterpolatedStyles.map((_, i) => {
            return i === 0 ? {o: spring(1)} : {o: spring(prevInterpolatedStyles[i - 1].o)}
          })}>
          {interpolatingStyles => 
            <div style={{...container}} id='gallery_container'>
              {interpolatingStyles.map((style, i) => (
                  <div key={i} className={this.state.thirds ? 'gallery_imageThirds' : 'gallery_imageFull'} 
                      style={{opacity: style.o}}
                      onClick={this.changeSize}
                      id={this.state.images[i]}>
                    <img src={this.state.images[i]} alt='oceans'/> 
                  </div>
                )
              )}
            </div>
          }
        </StaggeredMotion>
        :
        null }
      </div>
      </div>
    )
  }
}