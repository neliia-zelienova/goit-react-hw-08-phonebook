import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { authSelectors, authOperations } from "../redux/auth";

const AppBar = ({ userEmail, isAuthorazed, onLogout }) => {
  return (
    <div>
      <Link to="/">Home</Link>

      {isAuthorazed ? (
        <>
          <p>{userEmail}</p>
          <Link to="/contacts">Contacts</Link>
          <button type="button" onClick={onLogout}>
            Logout
          </button>
        </>
      ) : (
        <button type="button">
          <Link to="/login">Login</Link>
        </button>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  userEmail: authSelectors.getUserEmail(state),
  isAuthorazed: authSelectors.getIsAuthorized(state),
});

const mapDispatchToProps = (dispatch) => ({
  onLogout: () => dispatch(authOperations.logout()),
});
export default connect(mapStateToProps, mapDispatchToProps)(AppBar);
