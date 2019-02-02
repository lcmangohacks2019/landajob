/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { Button, Container, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class PopupCardExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      
      <div>
        <Button color="danger" onClick={this.toggle}>Click me for test</Button>
        <Container>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Overall Skill Name here</ModalHeader>
          <ModalBody>
            Should be able to add skills with graphs in here.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Okay</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
        </Container>
      </div>
    );
  }
}

export default PopupCardExample;
