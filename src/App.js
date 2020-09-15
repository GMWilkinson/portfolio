import React from 'react';
import NavBar from './components/NavBar';
import Projects from './components/Projects';
import CurrentProjects from './components/CurrentProjects';
import About from './components/About';
import Tech from './components/Tech';
import Contact from './components/Contact';
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
    text: 'A React app that compares data from different Ethereum nodes and displays it in charts using the Google Charts API. I made this for TokenAnalyst.'
  },
  {
    name: 'Escape room',
    text: 'A game that imitates the puzzles in an escape room, it is on hold at the moment until I can figure out some puzzles that fit with the narrative. Made with ReactJS.'
  },
  {
    name: 'Funnel Implementation Plan',
    text: 'A simple web page that I made for the local Mutual Aid group, it converts Airtable data into a Gandtt style chart. Made with ReactJS.'
  },
  {
    name: 'Funnel App',
    text: 'A Mobile app that I am making for a local Mutual aid group. It shows the nearest food bank drop off points to your current location or from a postcode and displays neccesary data such as opening times and items that are needed. It can also be used to create your own drop off points. It is made with React Native, Node.js, MongoDB and the Google Maps API.'
  }
];

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      colourMode: 'Light',
      currentComponent: <About />,
      counter: 1,
      section: 'About'
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

  changeComponent(count) {
    if (count === 1) {
      this.setState({
        currentComponent: <About />,
        counter: count,
        section: 'About'
      })
    }
    if (count === 2) {
      this.setState({
        currentComponent: <Tech />,
        counter: count,
        section: 'Skills'
      })
    }
    if (count === 3) {
      this.setState({
        currentComponent: <Projects projects={aimerProjects} company={"Projects at Aimer Media"}/>,
        counter: count,
        section: 'Projects'
      })
    }
    if (count === 4) {
      this.setState({
        currentComponent: <CurrentProjects projects={otherProjects} company={"Current Projects"}/>,
        counter: count,
        section: 'Current Projects'
      })
    }
    if (count === 5) {
      this.setState({
        currentComponent: <Contact />,
        counter: count,
        section: 'Contact'
      })
    }
  }

  render() {
    const { colourMode, currentComponent, counter, section } = this.state;
    return (
      <main>
        <NavBar
          changeColourMode={() => this.changeColourMode()}
          colourMode={colourMode === 'Light' ? 'Dark' : 'Light'}
          changeComponent={this.changeComponent.bind(this)}
          section={section}
        />
        <div className="container">
          <article>
            {currentComponent}
          </article>
        </div>
        {counter !== 1 && <div className="prev" onClick={() => this.changeComponent(counter -1)}>&#10094;</div>}
        {counter !== 5 && <div className="next" onClick={() => this.changeComponent(counter +1)}>&#10095;</div>}
      </main>
    )
  }
}

export default App;
