import React from 'react';
import SectionHeader from './SectionHeader';

export default function Contact() {
  return (
    <section className="about-section">
      <div className="about-text">
        <p>Feel free to contact me at:</p>
        <p style={{fontSize: 20}}>wilkinsonmgrant@gmail.com</p>
        <a href="https://www.linkedin.com/in/gmwilkinson/">
          <i className="fa fa-linkedin-square" style={{fontSize: 48, color: 'blue'}}></i>
        </a>
      </div>
    </section>
  )
}
