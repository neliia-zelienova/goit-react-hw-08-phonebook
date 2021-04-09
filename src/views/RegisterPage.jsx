import React, { Component } from "react";
import { connect } from "react-redux";
import { authOperations, authSelectors } from "../redux/auth";
import { Jumbotron, Button, Form, Row, Col, Toast } from "react-bootstrap";

class RegisterPage extends Component {
  state = {
    name: "Adrian Cross",
    email: "across@mail.com",
    password: "examplepassword",
  };

  handleInput = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("this.state", this.state);
    this.props.onSubmit(this.state);
    this.setState({ name: "", email: "", password: "", confirmPassword: "" });
  };

  render() {
    return (
      <Jumbotron>
        <Form action="">
          <Form.Group as={Row} controlId="newUserName">
            <Form.Label column sm={2} htmlFor="name">
              Name
            </Form.Label>
            <Col sm={5}>
              <Form.Control
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleInput}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="newUserEmail">
            <Form.Label column sm={2} htmlFor="email">
              Email
            </Form.Label>
            <Col sm={5}>
              <Form.Control
                type="text"
                name="email"
                value={this.state.email}
                onChange={this.handleInput}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="newUserPassword">
            <Form.Label column sm={2} htmlFor="password">
              Create password
            </Form.Label>
            <Col sm={5}>
              <Form.Control
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleInput}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Col sm={{ span: 10, offset: 2 }}>
              <Button
                variant="primary"
                type="submit"
                onClick={this.handleSubmit}
              >
                Register
              </Button>
            </Col>
          </Form.Group>
        </Form>
        <Toast show={this.props.errorMessage}>
          <Toast.Header closeButton={false}>
            <strong className="mr-auto">Error</strong>
          </Toast.Header>
          <Toast.Body>{this.props.errorMessage}</Toast.Body>
        </Toast>
      </Jumbotron>
    );
  }
}

const mapStateToProps = (state) => ({
  errorMessage: authSelectors.getErrorMessage(state),
});
const mapDispatchToProps = (dispatch) => ({
  onSubmit: (data) => dispatch(authOperations.register(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
