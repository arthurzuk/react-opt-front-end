import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from "./App";
import Login from './components/Login/Login';
import Cadastro from './components/Cadastro/Cadastro';
import Privacidade from './components/Documento/TermoPrivacidade';
import Termos from './components/Documento/Termos';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/login" component={Login} />
            <Route path="/politicas" component={Termos} />
            <Route path="/privacidade" component={Privacidade} />
            <Route path="/cadastro" component={Cadastro} />
        </Switch>
    </ BrowserRouter>
    , document.getElementById("root")
);
