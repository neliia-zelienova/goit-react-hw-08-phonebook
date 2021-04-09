import React, { Component } from "react";
import ContactsList from "../components/ContactsList";
import Filter from "../components/Filter";
import ContactForm from "../components/ContactForm";
import { connect } from "react-redux";
import { contactsOperations } from "../redux/contacts";

import { Container } from "react-bootstrap";

class PhoneBook extends Component {
  componentDidMount() {
    this.props.getContacts();
  }
  render() {
    return (
      <>
        <ContactForm />
        <Filter />
        <ContactsList />
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getContacts: () => dispatch(contactsOperations.getContacts()),
});

export default connect(null, mapDispatchToProps)(PhoneBook);
