import * as React from 'react';

import { getWeather } from '../api/darkSky-service';
import NavbarScroller from './NavBar/NavbarScroller';
import WeatherCard from './WeatherCard/WeatherCard';
import { WeatherRow, Card } from './appStyles';

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

const initialState = { weather: { temperature: '', daily: { data: [] } } };
type State = Readonly<typeof initialState>;

class App extends React.Component {
    readonly state: State = initialState;

    componentDidMount(): void {
        getWeather().then(res => this.setState({ weather: res }));
    }

    render(): JSX.Element {
        let listItems;
        const { weather } = this.state;
        const { daily } = weather;
        if (daily) {
            const dailyData = daily.data;
            listItems = dailyData.map(day => {
                return (
                    <Card key={day.time}>
                        <WeatherCard icon={day.icon} temperature={day.temperatureHigh} />
                    </Card>
                );
            });
        }

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
