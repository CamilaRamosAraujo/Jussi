import React from "react";
import Home from "./components/Home";
import { Switch, Route } from "react-router-dom";

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
    </Switch>
  );
}

export default Routes;
