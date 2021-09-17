import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from "./App";
import Cadastro from './components/Cadastro/Cadastro';
import Sidebar from './components/Sidebar/Sidebar';
import Privacidade from './components/Documento/TermoPrivacidade';
import Termos from './components/Documento/Termos';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/politicas" component={Termos} />
            <Route path="/privacidade" component={Privacidade} />
            <Route path="/cadastro" component={Cadastro} />
            <Route path="/sidebar" component={Sidebar} />
        </Switch>
    </ BrowserRouter>
    , document.getElementById("root")
);
