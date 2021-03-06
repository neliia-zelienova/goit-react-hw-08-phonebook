import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { authSelectors } from "../redux/auth";

/**
 * - Если маршрут приватный и пользователь залогинен, рендерит компонент
 * - В противном случае рендерит Redirect на /login
 */
const PrivateRoute = ({
  component: Component,
  isAuthorized,
  redirectTo,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={(props) =>
      isAuthorized ? <Component {...props} /> : <Redirect to={redirectTo} />
    }
  />
);

const mapStateToProps = (state) => ({
  isAuthorized: authSelectors.getIsAuthorized(state),
});

export default connect(mapStateToProps)(PrivateRoute);
