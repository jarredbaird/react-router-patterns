import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { DogProps } from "./interfaces";
import DogList from "./DogList";
import FindDogDetails from "./FindDogDetails";

const Routes: React.FC<{ dogs: DogProps[] }> = ({ dogs }) => {
  return (
    <Switch>
      <Route exact path="/dogs">
        <DogList dogs={dogs} />
      </Route>
      <Route path="/dogs/:name">
        <FindDogDetails dogs={dogs} />
      </Route>
      <Redirect to="/dogs" />
    </Switch>
  );
};

export default Routes;
