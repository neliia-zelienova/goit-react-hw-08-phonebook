import "./App.css";
import React from "react";
import PhoneBook from "./components/PhoneBook";
import { Route, Switch } from "react-router-dom";
import routes from "./routes";
import HomePage from "./views/HomePage";
import RegisterPage from "./views/RegisterPage";
import LoginPage from "./views/LoginPage";
import NotFoundPage from "./views/NotFoundPage";
import AppBar from "./components/AppBar";

const App = () => {
  return (
    <div className="App">
      <AppBar userEmail={"no email"} />
      <Switch>
        <Route exact path={routes.home} component={HomePage} />
        <Route exact path={routes.register} component={RegisterPage} />
        <Route exact path={routes.login} component={LoginPage} />
        <Route exact path={routes.contacts} component={PhoneBook} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
};

export default App;
