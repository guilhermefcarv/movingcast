import React from "react";
import { Switch, Route } from "react-router";
// importar paginas
import Categories from "./pages/Categories";
import Podcasts from './pages/Podcasts';
import Home from './pages/Home';
import Episodes from './pages/Episodes';

function Routes() {
   return (
    <Switch>
        <Route exact path="/" component={ Home }/>
        <Route exact path="/categories" component={ Categories } />
        <Route exact path="/categories/financas"  component= { Podcasts }/>
        <Route exact path="/categories/sociais"  component= { Podcasts }/>
        <Route exact path="/categories/tecnicos"  component= { Podcasts }/>
        <Route exact path="/categories/autorais"  component= { Podcasts }/>
        <Route exact path="/categories/podcast/:id"  component= { Episodes }/>

    </Switch>
   )
}

export default Routes;