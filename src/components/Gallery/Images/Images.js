import React from 'react';
import Transition from 'react-motion-ui-pack'

export default class Images extends React.Component {
  constructor() {
    super()
    this.state = {
      loaded: []
    }
  }
  onLoad(img) {
    this.setState(({ loaded }) => {
      return { loaded: [...loaded, img] }
    }, () => this.state.loaded.length === this.props.images.length && this.props.scroll ? this.scroll() : null)
  }

  scroll() {
    document.getElementById(this.props.scroll.slice(21)).scrollIntoView({inline: 'center'})
  }

  render() {
    let images = this.state.loaded.map((e, i) => {
    return (
    <Transition
      key={i + e}
      component={false}
      enter={{ opacity: 1 }}
      leave={{ opacity: 0 }}>  
      { 
        <div key={e + i} 
            className={this.props.image}
            onClick={this.props.changeSize}
            id={e}>
          <img src={e} alt={this.props.alt}/> 
        </div>
      }
    </Transition>
    )})

    return (
      <div className={this.props.container}>
        { this.state.loaded.length === this.props.images.length ? 
        images 
        :
        <div className="hidden">
          {this.props.images.map((e, i) =>
            <img 
              src={e} 
              onLoad={this.onLoad.bind(this, e)} 
              key={i + e}
              alt='hidden' />
          )}
        </div> }
      </div>
    )
  }
}