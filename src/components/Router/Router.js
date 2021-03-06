import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../../pages/Home";
import AddProject from "../../pages/AddProject";
import AddParticipant from "../../pages/AddParticipant";

function Router(props) {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/addproject" component={AddProject} />
        <Route exact path="/:id/submition" component={AddParticipant} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
