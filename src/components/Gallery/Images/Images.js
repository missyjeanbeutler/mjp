import React from 'react';
import AnimatedMount from '../../helpers/AnimatedMount';

function Images(props) {
  const images = props.images.map((e, i) => (
    <div key={i} className={props.image}
        onClick={props.changeSize}>
      <img src={e} alt='oceans'/> 
    </div>
  ))

  return (
    <div className={props.container}>
      { images }
    </div>
  )
}

  export default AnimatedMount({
    unmountedStyle: {
      opacity: 0,
      transition: 'opacity 250ms ease-out',
    },
    mountedStyle: {
      opacity: 1,
      transition: 'opacity 1.5s ease-out',
    },
  })(Images);