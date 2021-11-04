import React from "react";
import { Switch, Route } from "react-router";
// importar paginas
import Categories from "./pages/Categories";
import Podcasts from './pages/Podcasts';
import Home from './pages/Home';

function Routes() {
    <Switch>
        <Route path="/" component={ Home }/>
        <Route path="/categories" component={ Categories } />
        <Route path="/podcast"  component= { Podcasts }/>
    </Switch>
}

export default Routes;