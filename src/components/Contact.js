import React from 'react';
import SectionHeader from './SectionHeader';

export default function Contact() {
  return (
    <section className="about-section">
      <SectionHeader color="green" background="red" text="Contact"/>
      <div className="about-text">
        <p>Feel free to contact me at:</p>
        <p>wilkinsonmgrant@gmail.com</p>
      </div>
    </section>
  )
}
