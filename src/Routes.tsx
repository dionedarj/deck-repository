import React from "react";
import { Switch, Route } from "react-router";
import * as routes from "./constants/routes.json";
import App from "./components/App/App";
import HomeContainer from "./components/Home/HomeContainer";

export default () => (
    <App>
        <Switch>
            <Route path={routes.HOME} component={HomeContainer} />
        </Switch>
    </App>
);
