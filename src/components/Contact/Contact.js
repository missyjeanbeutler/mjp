import React from 'react';
import { TransitionMotion, spring } from 'react-motion';

export default function Contact() {
  return (
      <TransitionMotion
        defaultStyles={[{key: 'contact', style: {opacity: 0}}]}
        styles={[{key: 'contact', style: {opacity: spring(1)}}]}>
        {styles =>
          <div>
            {styles.map(s => {
              return <div key={s.key} className='contact_info' style={{...s.style}}>
                        <div className='contact_logoFull'/>
                        <div className='contact_line'/>
                        <div>
                          <div className='contact_contact' >
                            <h3>MISSY J PHOTO</h3>
                            <h3>based in the Orem/Provo Utah area</h3>
                            <br/>
                            <br/>
                            <a href='mailto:missyjphoto@gmail.com'><h3>missyjphoto@gmail.com</h3></a>
                            <a href='tel:1-801-368-3141'><h3>801.368.3141</h3></a>
                          </div>
                          <div className='contact_socials' >
                            <a href=''><div className='insta'/></a>
                            <a href=''><div className='fb'/></a>
                          </div>
                        </div>
                    </div>
            })}
          </div>
        }
      </TransitionMotion>
  )
}