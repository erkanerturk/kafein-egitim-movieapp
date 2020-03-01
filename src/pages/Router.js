import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./Home/Home";
import Movies from "./Movies/Movies";

function Router(props) {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/movies" component={Movies} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
