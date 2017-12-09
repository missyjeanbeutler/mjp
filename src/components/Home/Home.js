import React, { Component } from 'react';
import { TransitionMotion, spring } from 'react-motion';

export default class Home extends Component {
  constructor() {
    super()
    this.state = {
      images: ['cabo-2.jpg', 'jamaica-1.jpg', 'jamaica-3.jpg', 'jamaica-4.jpg'],
      num: 0,
      fade: false
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({num: this.state.num === 3 ? 0 : this.state.num + 1, fade: true})
      this.setState({fade: false})
    }, 3000)
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    this.setState({fade: !this.state.fade})
  }

  willLeave() {
    return {opacity: spring(0)}
  }

  render() { 

    let style = {background: `url(${require(`../../assets/images/oceans/${this.state.images[this.state.num]}`)}) center no-repeat`, backgroundSize: 'cover' }

    return (
      <div>
        {this.state.fade ? null : <TransitionMotion 
          styles={[{key: this.state.images[this.state.num], style: {opacity: spring(1)}}]}
          willLeave={this.willLeave}
          defaultStyles={[{key: this.state.images[this.state.num], style: {opacity: 0}}]}>
            {(motion_style) => (
              <div className='home_background' style={{...motion_style[0].style, ...style}} transition={this.transition}/>
            )}
        </TransitionMotion>}
      </div>
    )
  }
}