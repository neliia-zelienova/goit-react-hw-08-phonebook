import React from "react";
import { connect } from "react-redux";
import styles from "./ContactsList.module.css";
import Notification from "../Notification";
import { contactsSelectors, contactsOperations } from "../../redux/contacts";
import ContactItem from "../ContactItem/ContactItem";
import { Component } from "react";

class ContactsList extends Component {
  state = {
    emptyList: false,
    edit: false,
    editingID: null,
    name: "",
    number: "",
  };

  resetEditor = () => {
    this.setState({
      edit: false,
      editingID: null,
      name: "",
      number: "",
    });
  };

  startEdit = (id) => {
    this.setState((prevState, props) => ({
      edit: !prevState.edit,
      editingID: id,
      name: props.contacts.find((item) => item.id === id).name,
      number: props.contacts.find((item) => item.id === id).number,
    }));
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
      <>
        {showNotification && <Notification message="No contacts here yet..." />}
        <ul className={styles.contacts__list}>
          {contacts.map((contact) => (
            <ContactItem
              key={contact.id}
              contact={contact}
              startEdit={this.startEdit}
            ></ContactItem>
          ))}
        </ul>
        {this.state.edit && (
          <form action="">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleInput}
            />

            <label htmlFor="number">
              Number
              <input
                type="text"
                name="number"
                value={this.state.number}
                onChange={this.handleInput}
              />
            </label>

            <button type="button" onClick={this.handleSave}>
              Save
            </button>
            <button type="button" onClick={this.handleCancel}>
              Cancel
            </button>
          </form>
        )}
      </>
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
