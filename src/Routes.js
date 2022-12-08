import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Cadastrar from "./Pages/Cadastrar";
import Livros from "./Pages/Livros";
import Carrinho from "./Pages/Carrinho";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import ProfileEdit from "./Pages/ProfileEdit";

function Routes() {
  return (
    <Switch>      
      <Route exact path="/login" component={Login} />
      <Route exact path="/cadastrar" component={Cadastrar} />
      <Route exact path="/livros" component={Livros} />
      <Route exact path="/carrinho" component={Carrinho} />
      <Route exact path="/" component={Home} /> 
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/profile/edit" component={ProfileEdit} />       
    </Switch>
  );
}

export default Routes;
