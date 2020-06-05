import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import routes from "./routes";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Redirect exact from="/" to="home" />
        {routes.map((route) => {
          return <Route key={route.path} exact {...route} />;
        })}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
