import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavbarScroller from './NavBar/NavbarScroller';
import WeatherPage from './Weather/WeatherPage';

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

class App extends React.Component {
    render(): JSX.Element {
        const { brand, links } = navigation;
        return (
            <Router>
                <div>
                    <NavbarScroller brand={brand} links={links} />
                    <Switch>
                        <Route path="/about">
                            <div>Placeholder for about section</div>
                        </Route>
                        <Route path="/contact">
                            <div>Placeholder for contact section</div>
                        </Route>
                        <Route path="/dev">
                            <div>Placeholder for development section</div>
                        </Route>
                        <Route path="/weather">
                            <WeatherPage />
                        </Route>
                        <Route path="/">
                            <div>Home</div>
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
