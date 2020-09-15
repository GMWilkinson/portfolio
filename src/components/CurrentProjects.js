import React from 'react';
import { Card, CardDeck, CardText, CardBody, CardTitle, Col } from 'reactstrap';

class CurrentProjects extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    const { projects } = this.props;
    return (
      <div className="about-section">
        <div className="projects-box">
          <h2 className="center-text projects-text" style={{marginBottom: 20}}>Freelance and Personal Projects</h2>
          <CardDeck>
          {projects && projects.reverse().map(
            (project, i) =>
            <Col sm="6" md="6" key={i}>
              <Card style={{marginBottom: 10, minHeight: 200}}>
              <CardBody>
                <CardTitle style={{fontSize: 20}}>{project.name}</CardTitle>
                <CardText>{project.text}</CardText>
              </CardBody>
              </Card>
            </Col>
          )}
          </CardDeck>
        </div>
      </div>
    )
  }
}
export default CurrentProjects;
