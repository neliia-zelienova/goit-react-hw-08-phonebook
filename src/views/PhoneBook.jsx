import React, { Component } from "react";
import ContactsList from "../components/ContactsList";
import Filter from "../components/Filter";
import ContactForm from "../components/ContactForm";
import Container from "../components/Container";
import { connect } from "react-redux";
import { contactsOperations } from "../redux/contacts";

class PhoneBook extends Component {
  componentDidMount() {
    this.props.getContacts();
  }
  render() {
    return (
      <div className="App">
        <Container title="Phonebook">
          <ContactForm />
        </Container>
        <Container title="Contacts">
          <Filter />
          <ContactsList />
        </Container>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getContacts: () => dispatch(contactsOperations.getContacts()),
});

export default connect(null, mapDispatchToProps)(PhoneBook);
