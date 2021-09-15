import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from "./App";
import Cadastro from './components/Cadastro/Cadastro';
import Sidebar from './components/Sidebar/Sidebar';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/sobre" component={Sidebar} />
            <Route path="/cadastro" component={Cadastro} />
        </Switch>
    </ BrowserRouter>
    , document.getElementById("root")
);
