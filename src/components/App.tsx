import * as React from 'react';

import { getCurrentWeather } from '../api/darkSky-service';
import NavbarScroller from './NavBar/NavbarScroller';
import WeatherCard from './WeatherCard/WeatherCard';
import { WeatherRow, Card } from './AppStyles';

const navigation = {
    brand: { name: 'The App', to: '/' },
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

const initialState = { weather: { temperature: '' } };
type State = Readonly<typeof initialState>;

class App extends React.Component {
    readonly state: State = initialState;

    componentDidMount(): void {
        getCurrentWeather().then(res => this.setState({ weather: res }));
    }

    render(): JSX.Element {
        const numbers = [1, 2, 3, 4, 5];
        const { weather } = this.state;
        const { temperature } = weather;
        const listItems = numbers.map(number => (
            <Card key={number.toString()}>
                <WeatherCard temperature={temperature} />
            </Card>
        ));
        const { brand, links } = navigation;
        return (
            <div className="App">
                <NavbarScroller brand={brand} links={links} />
                <h1>Welcome to React with Typescript</h1>
                <WeatherRow>{listItems}</WeatherRow>
            </div>
        );
    }
}

export default App;
