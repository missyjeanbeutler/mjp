import React, { Component } from 'react';

export default ({ unmountedStyle, mountedStyle }) => {
  return (Wrapped) => class extends Component {
    constructor() {
      super();
      this.state = {
        style: unmountedStyle,
      };
    }
    

    componentWillMount() {
      console.log('WILL MOUNT', )
      setTimeout(() => {
        this.setState({
          style: mountedStyle,
        });
      }, 20);
    }

    componentWillUnmount() {
      console.log('WILL UNMOUNT')
      this.setState({
        style: unmountedStyle,
      });
    }
    componentWillUpdate() {
      console.log('WILL UPDATE')
      
    }

    componentDidUpdate() {
      console.log('DID UPDATE')
      // this.state.style === mountedStyle ? null :
      // this.setState({
      //   style: mountedStyle
      // })
      
    }

    componentWillReceiveProps() {
      // console.log('WILL RECEIVE PROPS')
      // this.setState({
      //   style: unmountedStyle
      // })
    }

    render() {

      return <div
        style={this.state.style}
        onTransitionEnd={() => console.log()}
      >
        <Wrapped { ...this.props } />
      </div>
    }
  }
};