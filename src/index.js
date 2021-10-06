import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import Cadastro from "./components/Cadastro/Cadastro";
import Privacidade from "./components/Documento/TermoPrivacidade";
import Termos from "./components/Documento/Termos";
import TermoUso from "./components/Documento/TermoUso";
import Login from "./components/Login/Login";
import MenuPrincipal from "./components/Sidebar/MenuPrincipal";
import Backup from "./components/Sidebar/Pages/Backup/Backup";
import Sidebar from "./components/Sidebar/Sidebar";

const routes = ["/cadastro"];

ReactDOM.render(
  <>
    {!routes.includes(location.pathname) && <MenuPrincipal />}
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={App} />
        <Route path="/seguranca" component={Sidebar} />
        <Route path="/login" component={Login} />
        <Route path="/politicas" component={Termos} />
        <Route path="/privacidade" component={Privacidade} />
        <Route path="/termo_uso" component={TermoUso} />
        <Route path="/cadastro" component={Cadastro} />
        <Route path="/admin" component={Backup} />
      </Switch>
    </BrowserRouter>
  </>,
  document.getElementById("root")
);
