import React from 'react';
import { ListGroup, ListGroupItem, Row, Col, Badge } from 'reactstrap';

export default function Tech() {
  return (
    <div className="about-section">
      <div className="tech">
        <h1 style={{marginBottom: 40}}>Skills</h1>
        <Row>
          <Col sm="6" style={{marginBottom: 20}}>
            <h3>Technologies</h3>
            {/* <ListGroup> */}
              <Badge><i className="fab fa-js-square"></i> JavaScript</Badge>
              <Badge><i className="fab fa-react"></i> React</Badge>
              <Badge>Ionic/React</Badge>
              <Badge><i className="fab fa-react"></i> React Native</Badge>
              <Badge><i className="fab fa-html5"></i> HTML</Badge>
              <Badge><i className="fab fa-css3"></i> CSS</Badge>
              <Badge><i className="fab fa-sass"></i> SCSS</Badge>
              <Badge><i className="fab fa-node-js"></i> Node.js</Badge>
              <Badge><i className="fab fa-angular"></i> Angular.js</Badge>
              <Badge>MongoDB</Badge>
            {/* </ListGroup> */}
            </Col>
            <Col sm="6">
            <h3>Tools</h3>
            {/* <ListGroup> */}
              <Badge>Airtable</Badge>
              <Badge><i className="fab fa-trello"></i> Trello</Badge>
              <Badge><i className="fab fa-apple"></i> Xcode</Badge>
              <Badge><i className="fab fa-android"></i> Android Studio</Badge>
              <Badge><i className="fab fa-github"></i> GitHub</Badge>
              <Badge><i className="fab fa-bitbucket"></i> BitBucket</Badge>
              <Badge><i className="fab fa-sourcetree"></i> Sourcetree</Badge>
            {/* </ListGroup> */}
          </Col>
        </Row>
      </div>
    </div>
  )
}
