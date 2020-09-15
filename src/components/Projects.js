import React from 'react';
import { Card, CardDeck, CardImg, CardBody, CardTitle, Col } from 'reactstrap';
import ProjectModal from './ProjectModal';
import SectionHeader from './SectionHeader';

class Projects extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    const { projects, company } = this.props;
    return (
      <div className="about-section">
        <div className="projects-box">
          <h2 className="center-text projects-text" style={{marginBottom: 20}}>{company}</h2>
          <CardDeck>
          {projects && projects.reverse().map(
            (project, i) =>
            <Col sm="6" md="4" key={i}>
              <Card style={{marginBottom: 10, height: 300}}>
              <CardBody>
                <CardTitle style={{fontSize: 20}}>{project.name}</CardTitle>
              </CardBody>
                {project.name === 'Nodestats' || project.name === 'Preachers Companion'
                ?
                <div  className="no-image slide-container">
                  <div>No image available</div>
                </div>
                :
                project.name === 'TTP assistant'
                ?
                <CardImg bottom style={{maxWidth: 200, margin: 'auto'}} src={project.images[0].src} alt="Card image cap" />
                :
                <CardImg bottom style={{maxWidth: 100, margin: 'auto'}} src={project.images[0].src} alt="Card image cap" />
              }
              </Card>
              <ProjectModal project={project}/>
            </Col>
          )}
          </CardDeck>
        </div>
      </div>
    )
  }
}
export default Projects;
