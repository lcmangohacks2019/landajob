/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { Button, Container, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import gql from 'graphql-tag';

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
      <Container>
      <Row>
      <Col xs="4">
        <Button color="danger" onClick={this.toggle}>Click me for test</Button>
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
        </Col>
        </Row>
        </Container>
      </div>
    );
  }
}

const SKILL_LIST_QUERY = gql`
  query SkillList {
    employeesList{
      items{
        fullName
        goalJob{
          skill{
            items{
              title
            }
          }
        }
      }
    }
  }
`

console.log(SKILL_LIST_QUERY);

export default PopupCardExample;
