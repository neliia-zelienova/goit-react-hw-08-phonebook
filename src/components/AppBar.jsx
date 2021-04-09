import React from "react";
import { connect } from "react-redux";
import { authSelectors, authOperations } from "../redux/auth";
import { Navbar, Button, Form, Toast } from "react-bootstrap";

const AppBar = ({ userEmail, isAuthorazed, errorMessage, onLogout }) => {
  return (
    <Navbar bg="light" variant="light">
      <Navbar.Brand href="/">PhoneBook</Navbar.Brand>

      {isAuthorazed && (
        <>
          <Navbar.Toggle />
          <Toast show={errorMessage}>
            <Toast.Body>{errorMessage}</Toast.Body>
          </Toast>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text className="text-center mr-sm-2">{`Signed in as: ${userEmail}`}</Navbar.Text>
            <Form inline>
              <Button type="button" onClick={onLogout} variant="danger">
                Logout
              </Button>
            </Form>
          </Navbar.Collapse>
        </>
      )}
    </Navbar>
  );
};

const mapStateToProps = (state) => ({
  userEmail: authSelectors.getUserEmail(state),
  isAuthorazed: authSelectors.getIsAuthorized(state),
  errorMessage: authSelectors.getErrorMessage(state),
});

const mapDispatchToProps = (dispatch) => ({
  onLogout: () => dispatch(authOperations.logout()),
});
export default connect(mapStateToProps, mapDispatchToProps)(AppBar);
