/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Carousel from './Carousel';

const ProjectModal = (props) => {
  const {
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button style={{marginBottom: 10}} color="secondary" outline onClick={toggle}>View {props.project.name}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader>{props.project.name}</ModalHeader>
        <ModalBody>
          {props.project.name === 'Preachers Companion'
          ?
          <div  className="no-image slide-container">
            <div>No image available</div>
          </div>
          :
          <Carousel items={props.project.images}/>
          }
          <div style={{marginTop: '1rem'}}>
          {props.project.text}
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>Close</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ProjectModal;
