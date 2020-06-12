import React from 'react';
import { Card, CardDeck, CardImg, CardBody, CardTitle, CardText, Col, UncontrolledCarousel } from 'reactstrap';
import Carousel from './Carousel';

class Projects extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    const { projects, company } = this.props;
    console.log(projects)
    return (
      <div className="projects-box">
        <h2 className="center-text projects-text">{company}</h2>
        <CardDeck>
        {projects && projects.map(
          project =>
          <Col sm="6">
            <Card style={{marginBottom: 10}}>
              {project.name === 'Nodestats' || project.name === 'Preachers Companion'
              ?
              <div style={{maxHeight: '70vh', minHeight: '70vh'}} className="no-image slide-container">
                <div>No image available</div>
              </div>
              :
              <Carousel items={project.images} />
            }
              <CardBody>
                <CardTitle style={{fontSize: 40}}>{project.name}</CardTitle>
                <CardText style={{fontSize: 25}}>{project.text}</CardText>
              </CardBody>
            </Card>
            </Col>
          )}
          </CardDeck>
      </div>
    )
  }
}
export default Projects;
