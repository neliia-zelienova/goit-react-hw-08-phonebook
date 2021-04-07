import React from "react";
import { connect } from "react-redux";
import styles from "./ContactsList.module.css";
import Notification from "../Notification";
import { contactsOperations, contactsSelectors } from "../../redux/contacts";

const ContactsList = ({ contacts, onDelete }) => {
  const showNotification = contacts.length === 0;
  return (
    <>
      {showNotification && <Notification message="No contacts here yet..." />}
      <ul className={styles.contacts__list}>
        {contacts.map((contact) => (
          <li key={contact.id} className={styles.contacts__item}>
            <span className={styles.contacts__name}>{`${contact.name}:`}</span>
            <span className={styles.contacts__number}>{contact.number}</span>
            <button
              type="button"
              className={styles.contacts__delete__btn}
              onClick={() => onDelete(contact.id)}
            ></button>
          </li>
        ))}
      </ul>
    </>
  );
};

const mapStateToProps = (state) => ({
  contacts: contactsSelectors.getVisibleContacts(state),
  isLoading: contactsSelectors.getIsLoading(state),
});

const mapDispatchToProps = (dispatch) => ({
  onDelete: (id) => dispatch(contactsOperations.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
