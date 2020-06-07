import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import routes from "./routes";
import Container from "react-bootstrap/Container";

function App() {
  // const defaultLinks = [
  //   {
  //     id: 1,
  //     name: "Hacker News",
  //     url: "https://news.ycombinator.com/",
  //     points: 3,
  //   },
  //   {
  //     id: 2,
  //     name: "Product Hunt",
  //     url: "https://producthunt.com/",
  //     points: 6,
  //   },
  //   {
  //     id: 3,
  //     name: "REDDIT",
  //     url: "https://www.reddit.com/",
  //     points: 3,
  //   },
  // ];
  // try {
  //   const links = JSON.parse(localStorage.getItem("links")) || [];
  //   links.push(defaultLinks);
  //   const stringifiedLinks = JSON.stringify(defaultLinks);
  //   localStorage.setItem("links", stringifiedLinks);
  // } catch (err) {
  //   alert(err);
  // }

  return (
    <BrowserRouter>
      <Container fluid>
        <Header />
        <Switch>
          <Redirect exact from="/" to="home" />
          {routes.map((route) => {
            return <Route key={route.path} exact {...route} />;
          })}
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;
