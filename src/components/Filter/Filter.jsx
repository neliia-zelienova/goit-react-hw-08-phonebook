import React from "react";
import { connect } from "react-redux";
import styles from "./Filter.module.css";
import { contactsActions, contactsSelectors } from "../../redux/contacts";

const Filter = ({ value, isLoading, onChange }) => {
  return (
    <div className={styles.form__container}>
      <label htmlFor="" className={styles.form__label}>
        Find contacts by name
        <input
          type="text"
          name="filter"
          value={value}
          onChange={onChange}
          className={styles.form__input}
        ></input>
      </label>
      {isLoading && <p>Loading...</p>}
    </div>
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
