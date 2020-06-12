import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import SectionHeader from './SectionHeader';

export default function Tech() {
  return (
    <div>
      <SectionHeader color="green" background="red" text="Technologies"/>
      <ListGroup horizontal="lg" style={{paddingBottom: 30}}>
        <ListGroupItem>JavaScript</ListGroupItem>
        <ListGroupItem>React</ListGroupItem>
        <ListGroupItem>Ionic/React</ListGroupItem>
        <ListGroupItem>React Native</ListGroupItem>
        <ListGroupItem>HTML/CSS</ListGroupItem>
        <ListGroupItem>Node.js</ListGroupItem>
        <ListGroupItem>Angular.js</ListGroupItem>
        <ListGroupItem>MongoDB</ListGroupItem>
      </ListGroup>
      <ListGroup horizontal="lg">
        <ListGroupItem>Airtable</ListGroupItem>
        <ListGroupItem>Trello</ListGroupItem>
        <ListGroupItem>Xcode</ListGroupItem>
        <ListGroupItem>Android Studio</ListGroupItem>
        <ListGroupItem>GitHub</ListGroupItem>
        <ListGroupItem>BitBucket</ListGroupItem>
      </ListGroup>
    </div>
  )
}
