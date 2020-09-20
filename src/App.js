import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ImageDemo from "./components/Image";
import DialogDemo from "./components/Dialog";
import ButtonDemo from "./components/Button";
import BreadcrumbsDemo from "./components/Breadcrumbs";

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Image Demo</Link>
          </li>
          <li>
            <Link to="/button">Button Demo</Link>
          </li>
          <li>
            <Link to="/dialog">Dialog Demo</Link>
          </li>
          <li>
            <Link to="/breadcrumbs">Breadcrumbs Demo</Link>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <ImageDemo />
          </Route>
          <Route path="/button">
            <ButtonDemo />
          </Route>
          <Route path="/dialog">
            <DialogDemo />
          </Route>
          <Route path="/breadcrumbs">
            <BreadcrumbsDemo />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
