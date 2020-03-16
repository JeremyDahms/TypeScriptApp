import * as React from 'react';
//import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

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
            name: 'Blog',
            to: '/blog',
        },
        {
            name: 'Development',
            to: '/dev',
        },
        {
            name: 'Graphic Designer',
            to: '/design',
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
            <div className="App">
                <NavbarScroller brand={brand} links={links} />
                <WeatherPage />
            </div>
        );
    }
}

export default App;
