import React, { Component } from "react";
import { connect } from "react-redux";
import { authOperations, authSelectors } from "../redux/auth";
import { Jumbotron, Button, Form, Row, Col, Toast } from "react-bootstrap";

class LoginPage extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({ email: "", password: "" });
  };

  render() {
    return (
      <Jumbotron>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group as={Row} controlId="loginEmail">
            <Form.Label column sm={2} htmlFor="Email">
              Email
            </Form.Label>
            <Col sm={5}>
              <Form.Control
                type="text"
                name="email"
                value={this.state.email}
                placeholder="Email"
                onChange={this.handleChange}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="loginPassword">
            <Form.Label column sm={2} htmlFor="password">
              Password
            </Form.Label>
            <Col sm={5}>
              <Form.Control
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Col sm={{ span: 10, offset: 2 }}>
              <Button
                type="submit"
                variant="primary"
                onClick={this.handleSubmit}
              >
                Login
              </Button>
            </Col>
          </Form.Group>
        </Form>
        <Toast show={this.props.errorMessage} animation>
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
  onSubmit: (data) => dispatch(authOperations.login(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
