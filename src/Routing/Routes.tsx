import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Home, WeatherPage } from '../pages';

export const Routes = (): JSX.Element => {
    return (
        <Switch>
            <Route exact={true} path="/home">
                <Home />
            </Route>
            <Route exact={true} path="/projects/weather" component={WeatherPage} />
            <Route path="/about">
                <h2>Placeholder for about section</h2>
            </Route>
            <Route path="/contact">
                <h2>Placeholder for contact section</h2>
            </Route>
            <Route path="/">
                <Redirect to="/home">Home</Redirect>
            </Route>
        </Switch>
    );
};

export default Routes;
