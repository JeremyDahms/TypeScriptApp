import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import NavbarScroller from '../components/NavBar/NavbarScroller';
import WeatherPage from '../components/Weather/WeatherPage';

const navigation = {
    brand: { name: 'Jeremy Dahms', to: '/' },
    links: [
        {
            name: 'About Me',
            to: '/about',
        },
        {
            name: 'Weather',
            to: '/weather',
        },
        {
            name: 'Development',
            to: '/dev',
        },
        {
            name: 'Contact',
            to: '/contact',
        },
    ],
};

export const Routes = (): JSX.Element => {
    const { brand, links } = navigation;
    return (
        <div>
            <NavbarScroller brand={brand} links={links} />
            <Switch>
                <Route path="/about">
                    <h2>Placeholder for about section</h2>
                </Route>
                <Route path="/contact">
                    <h2>Placeholder for contact section</h2>
                </Route>
                <Route path="/dev">
                    <h2>Placeholder for development section</h2>
                </Route>
                <Route exact={true} path="/weather" component={WeatherPage} />
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
