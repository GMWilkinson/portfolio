import React from 'react';
import NavBar from './components/NavBar';
import Projects from './components/Projects';
import About from './components/About';
import Tech from './components/Tech';
import Contact from './components/Contact';
import SectionHeader from './components/SectionHeader';
import SM1 from './images/SM1.png';
import SM2 from './images/SM2.png';
import SM3 from './images/SM3.png';
import SM4 from './images/SM4.png';
import CFR1 from './images/CFR1.png';
import CFR2 from './images/CFR2.png';
import CFR3 from './images/CFR3.png';
import ND1 from './images/ND1.png';
import ND2 from './images/ND2.png';
import ND3 from './images/ND3.png';
import QF1 from './images/QF1.png';
import QF2 from './images/QF2.png';
import QF3 from './images/QF3.png';
import TTP1 from './images/TTP1.png';
import TTP2 from './images/TTP2.png';

const CFRimages = [
  {
    src: CFR1,
    altText: 'Slide 1',
    key: '1'
  },
  {
    src: CFR2,
    altText: 'Slide 2',
    key: '2'
  },
  {
    src: CFR3,
    altText: 'Slide 3',
    key: '3'
  }
];

const SMimages = [
  {
    src: SM1,
    altText: 'Slide 1',
    key: '1'
  },
  {
    src: SM2,
    altText: 'Slide 2',
    key: '2'
  },
  {
    src: SM3,
    altText: 'Slide 3',
    key: '3'
  },
  {
    src: SM4,
    altText: 'Slide 4',
    key: '3'
  }
];

const NDimages = [
  {
    src: ND1,
    altText: 'Slide 1',
    key: '1'
  },
  {
    src: ND2,
    altText: 'Slide 2',
    key: '2'
  },
  {
    src: ND3,
    altText: 'Slide 3',
    key: '3'
  }
];

const QFimages = [
  {
    src: QF1,
    altText: 'Slide 1',
    key: '1'
  },
  {
    src: QF2,
    altText: 'Slide 2',
    key: '2'
  },
  {
    src: QF3,
    altText: 'Slide 3',
    key: '3'
  }
];

const TTPimages = [
  {
    src: TTP1,
    altText: 'Slide 1',
    key: '1'
  },
  {
    src: TTP2,
    altText: 'Slide 2',
    key: '2'
  }
];

const nodestatsImages = [
  {
    src: '',
    altText: 'nodestats',
    key: '1'
  }
]

const aimerProjects = [
  {
    name: 'Quick Fictions',
    text: 'A remake of an older app of the same name. Quick Fictions is the first mobile app that I made. It is made using Ionic/React.',
    images: QFimages
  },
  {
    name: 'Silvermarks',
    text: 'An app that contains pictures and information for all Silver hall marks. I worked mainly on the onboarding, subscriptions and fixing bugs. It is made with React Native.',
    images: SMimages
  },
  {
    name: 'Preachers Companion',
    text: 'An app that contains all of the information that a preacher may need. It is made with Ionic/React. I worked on the searches, categories, filters and bug fixes.',
    images: SMimages
  },
  {
    name: 'Community First Responder',
    text: 'An app that has all of the information that Community First Responders need. It is made with React Native. I worked on the Essentials pages.',
    images: CFRimages
  },
  {
    name: 'TTP assistant',
    text: 'TTP assistant is an internal website that contains all of the data for an app called TKC. It is made with React.',
    images: TTPimages
  },
  {
    name: 'BRF multi-app',
    text: 'The BRF multi-app is an app that contains three separate apps that share a majority components, the components and data to be used are decided during build time. It is made with Ionic/React.',
    images: NDimages
  }
];

const otherProjects = [
  {
    name: 'Nodestats',
    text: 'A React website that compares different Ethereum nodes.',
    images: nodestatsImages
  }
];

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      colourMode: 'Light'
    }
  }

  changeColourMode() {
    const { colourMode } = this.state;
    if (colourMode === 'Light') {
      this.setState({
        colourMode: 'Dark'
      })
    } else {
      this.setState({
        colourMode: 'Light'
      })
    }
  }

  render() {
    const { colourMode } = this.state;
    return (
      <main>
        <NavBar
          changeColourMode={() => this.changeColourMode()}
          colourMode={colourMode === 'Light' ? 'Dark' : 'Light'}
        />
        <div style={{paddingTop: 20}}>
          <article id="about" className="about-container">
            <About />
          </article>
          <article id="tech" className="about-container">
            <Tech />
          </article>
          <article id="projects" className="project-container">
            <SectionHeader color="green" background="red" text="Projects"/>
            <Projects projects={aimerProjects} company={"Aimer Media"}/>
            <Projects projects={otherProjects} company={"Other"}/>
          </article>
          <article id="contact" className="about-container">
            <Contact />
          </article>
        </div>
      </main>
    )
  }
}
export default App;
