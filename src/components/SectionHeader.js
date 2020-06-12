import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

export default function SectionHeader({text, background, color}) {
  return (
    <div>
      <Jumbotron style={{background: '#999999', paddingRight: '1rem'}} fluid>
        <Container fluid>
          <h1 className="display-3 section-text light-text">{text}</h1>
        </Container>
      </Jumbotron>
    </div>
  )
}
