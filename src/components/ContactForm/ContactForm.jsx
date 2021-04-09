import React from "react";
import { connect } from "react-redux";
import { contactsOperations } from "../../redux/contacts";
import { Jumbotron, Button, Form, Row, Col } from "react-bootstrap";

class ContactForm extends React.Component {
  state = {
    name: "",
    number: "",
  };
  handleInput = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.name && this.state.number) {
      this.props.onSubmit(this.state);
      this.resetForm();
    } else alert("No contact name or number!");
  };

  resetForm = () => {
    this.setState({
      name: "",
      number: "",
    });
  };

  render() {
    return (
      <Jumbotron>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group as={Row} controlId="formGroupName">
            <Form.Label column sm={2}>
              Name
            </Form.Label>
            <Col sm={5}>
              <Form.Control
                size="sm"
                type="text"
                name="name"
                placeholder="Name"
                onChange={this.handleInput}
                value={this.state.name}
              ></Form.Control>
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formGroupNumber">
            <Form.Label column sm={2}>
              Number
            </Form.Label>
            <Col sm={5}>
              <Form.Control
                size="sm"
                type="text"
                name="number"
                placeholder="+380 XX XXX XX XX"
                onChange={this.handleInput}
                value={this.state.number}
              ></Form.Control>
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Col sm={{ span: 10, offset: 2 }}>
              <Button variant="primary" type="submit">
                Add contact
              </Button>
            </Col>
          </Form.Group>
        </Form>
      </Jumbotron>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: ({ name, number }) =>
      dispatch(contactsOperations.addContact(name, number)),
  };
};

export default connect(null, mapDispatchToProps)(ContactForm);
