import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { Switch, Route, HashRouter, Redirect } from "react-router-dom";
import routes from "./routes";
import Container from "react-bootstrap/Container";
import CustomPopup from "./components/CustomPopup/CustomPopup";

function App() {
  return (
    <HashRouter>
      <Container fluid>
        <Header />
        <Switch>
          {routes.map((route) => {
            return <Route key={route.path} exact {...route} />;
          })}
          <Redirect exact from="/" to="home" />
        </Switch>
      </Container>
    </HashRouter>
  );
}

export default App;
