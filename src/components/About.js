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
        <SectionHeader color="green" background="red" text="Grant Wilkinson's Portfolio"/>
        <div className="about-text">
          <p>Thanks for taking the time to check out my portfolio.</p>
          <p>I'm from London and have just finished my first year at Aimer Media.</p>
          <p>I'm currently looking for new opportunities in London.</p>
        </div>
      </section>
    )
  }
}
export default About
