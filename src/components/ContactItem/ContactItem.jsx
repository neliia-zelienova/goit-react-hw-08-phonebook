import React from "react";
import { connect } from "react-redux";
import styles from "./ContactItem.module.css";
import { contactsOperations } from "../../redux/contacts";

const ContactItem = ({ contact, onDelete, startEdit }) => {
  return (
    <li className={styles.contacts__item}>
      <span className={styles.contacts__name}>{`${contact.name}:`}</span>
      <span className={styles.contacts__number}>{contact.number}</span>
      <button
        type="button"
        className={styles.contacts__delete__btn}
        onClick={() => onDelete(contact.id)}
      ></button>
      <button
        type="button"
        className={styles.contacts__edit__btn}
        onClick={() => startEdit(contact.id)}
      ></button>
    </li>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onDelete: (id) => dispatch(contactsOperations.deleteContact(id)),
});

export default connect(null, mapDispatchToProps)(ContactItem);
