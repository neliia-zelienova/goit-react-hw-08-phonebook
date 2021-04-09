import React from "react";
import { connect } from "react-redux";
import { contactsActions, contactsSelectors } from "../../redux/contacts";
import { Form, Row, Col, Spinner, Container } from "react-bootstrap";

const Filter = ({ value, isLoading, onChange }) => {
  return (
    <Container>
      <Form action="">
        <Form.Group as={Row} controlId="searchField">
          <Col sm={5}>
            <Form.Control
              sm={5}
              type="text"
              name="filter"
              placeholder="Search contact by name"
              value={value}
              onChange={onChange}
            />
          </Col>
          {isLoading && (
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          )}
        </Form.Group>
      </Form>
    </Container>
  );
};
const mapStateToProps = (state) => ({
  value: contactsSelectors.getFilter(state),
  isLoading: contactsSelectors.getIsLoading(state),
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (e) => dispatch(contactsActions.changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
