import React from "react";
import { connect } from "react-redux";
import Notification from "../Notification";
import { contactsSelectors, contactsOperations } from "../../redux/contacts";
import ContactItem from "../ContactItem/ContactItem";
import { Component } from "react";

import { Container, Button, Form, Row, Col, ListGroup } from "react-bootstrap";

class ContactsList extends Component {
  state = {
    emptyList: false,
    edit: false,
    editingID: null,
    name: "",
    number: "",
    contactChanged: false,
  };

  resetEditor = () => {
    this.setState({
      edit: false,
      editingID: null,
      name: "",
      number: "",
      contactChanged: false,
    });
  };

  startEdit = (id) => {
    this.setState((_, props) => ({
      edit: true,
      editingID: id,
      name: props.contacts.find((item) => item.id === id).name,
      number: props.contacts.find((item) => item.id === id).number,
    }));
  };

  componentDidUpdate = () => {
    if (this.state.editingID) {
      const { name, number } = this.props.contacts.find(
        (item) => item.id === this.state.editingID
      );
      if (
        (name !== this.state.name || number !== this.state.number) &&
        !this.state.contactChanged
      )
        this.setState({
          contactChanged: true,
        });
    }
  };

  handleInput = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSave = (e) => {
    e.preventDefault();
    this.props.onEdit(this.state.editingID, this.state.name, this.state.number);
    this.resetEditor();
  };

  handleCancel = (e) => {
    e.preventDefault();
    this.resetEditor();
  };

  render() {
    const { contacts } = this.props;
    const showNotification = contacts.length === 0;
    return (
      <Container fluid>
        <Row>
          <Col>
            {showNotification && (
              <Notification message="No contacts here yet..." />
            )}
            <ListGroup as="ul">
              {contacts.map((contact) => (
                <ContactItem
                  key={contact.id}
                  contact={contact}
                  startEdit={this.startEdit}
                ></ContactItem>
              ))}
            </ListGroup>
          </Col>

          {this.state.edit && (
            <Col>
              <Form action="">
                <Form.Group as={Row} controlId="formGroupEditName">
                  <Col sm={8}>
                    <Form.Control
                      type="text"
                      name="name"
                      value={this.state.name}
                      onChange={this.handleInput}
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formGroupEditNumber">
                  <Col sm={8}>
                    <Form.Control
                      type="text"
                      name="number"
                      value={this.state.number}
                      onChange={this.handleInput}
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row}>
                  <Col sm={{ span: 10, offset: 2 }}>
                    <Button
                      variant="secondary"
                      type="button"
                      onClick={this.handleSave}
                      disabled={!this.state.contactChanged}
                    >
                      Save
                    </Button>{" "}
                    <Button
                      variant="primary"
                      type="button"
                      onClick={this.handleCancel}
                    >
                      Cancel
                    </Button>
                  </Col>
                </Form.Group>
              </Form>
            </Col>
          )}
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  contacts: contactsSelectors.getVisibleContacts(state),
  isLoading: contactsSelectors.getIsLoading(state),
});

const mapDispatchToProps = (dispatch) => ({
  onEdit: (id, name, number) =>
    dispatch(contactsOperations.editContact(id, name, number)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
