import * as React from 'react';

import { getWeather, getCurrentWeather } from '../api/darkSky-service';
import NavbarScroller from './NavBar/NavbarScroller';

const navigation = {
    brand: { name: 'NavbarScroller', to: '/' },
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

const initialState = { weather: { temperature: null } };
type State = Readonly<typeof initialState>;

class App extends React.Component {
    readonly state: State = initialState;

    componentDidMount(): void {
        getCurrentWeather().then(res => this.setState({ weather: res }));
    }

    render(): JSX.Element {
        const { brand, links } = navigation;
        const { weather } = this.state;
        return (
            <div className="App">
                <NavbarScroller brand={brand} links={links} />
                <h1>Welcome to React with Typescript</h1>
                <p>The current temperature is {weather.temperature}</p>
            </div>
        );
    }
}

export default App;
