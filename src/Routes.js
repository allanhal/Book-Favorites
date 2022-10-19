import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Cadastrar from "./Pages/Cadastrar";
import Livros from "./Pages/Livros";
import Login from "./Pages/Login";

function Routes() {
  return (
    <Switch>      
      <Route exact path="/login">
        <Login />
      </Route>

      <Route exact path="/cadastrar">
        <Cadastrar />
      </Route>

      <Route exact path="/livros">
        <Livros />
      </Route>

      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  );
}

export default Routes;
