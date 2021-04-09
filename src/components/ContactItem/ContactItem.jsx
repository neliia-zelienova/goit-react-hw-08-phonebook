import React from "react";
import { connect } from "react-redux";
import styles from "./ContactItem.module.css";
import { contactsOperations } from "../../redux/contacts";
import { ListGroup, Button } from "react-bootstrap";

const ContactItem = ({ contact, onDelete, startEdit }) => {
  return (
    <ListGroup.Item as="li" min-width="400">
      <span className={styles.contacts__name}>{contact.name}</span>
      <span className={styles.contacts__number}>{contact.number}</span>
      <Button
        variant="danger"
        type="button"
        onClick={() => onDelete(contact.id)}
      >
        Delete
      </Button>{" "}
      <Button
        variant="info"
        type="button"
        onClick={() => startEdit(contact.id)}
      >
        Edit
      </Button>
    </ListGroup.Item>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onDelete: (id) => dispatch(contactsOperations.deleteContact(id)),
});

export default connect(null, mapDispatchToProps)(ContactItem);
