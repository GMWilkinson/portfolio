import React from 'react';
import SectionHeader from './SectionHeader';

class About extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <section className="about-section">
        <h1>Grant Wilkinson</h1>
        <span><h3>Web Developer</h3><h3>Mobile App Developer</h3></span>
        <div className="about-text">
          <p>Hi, thanks for taking the time to check out my portfolio.</p>
          <p>My current focus is on ReactJS, React Native and Node.js.</p>
          <p>I'm currently looking for new opportunities in London.</p>
        </div>
      </section>
    )
  }
}
export default About
