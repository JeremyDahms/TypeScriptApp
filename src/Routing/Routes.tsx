import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import WeatherPage from '../components/Weather/WeatherPage';

export const Routes = (): JSX.Element => {
    return (
        <div>
            <Switch>
                <Route path="/about">
                    <h2>Placeholder for about section</h2>
                </Route>
                <Route path="/contact">
                    <h2>Placeholder for contact section</h2>
                </Route>
                <Route exact={true} path="/projects/weather" component={WeatherPage} />
                <Route exact={true} path="/home">
                    <h1>Home</h1>
                </Route>
                <Route path="/">
                    <Redirect to="/home">Home</Redirect>
                </Route>
            </Switch>
        </div>
    );
};

export default Routes;
