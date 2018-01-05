import React from 'react';

export default function Contact() {
  return (
    <div>
      <div className='contact_info'>
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
    </div>
  )
}