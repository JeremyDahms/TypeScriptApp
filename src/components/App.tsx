import * as React from 'react';

import { getWeather } from '../api/darkSky-service';
import NavbarScroller from './NavBar/NavbarScroller';
import WeatherCard from './WeatherCard/WeatherCard';
import { Day, DayOfTheWeek, Heading, WeatherRow } from './app-styles';

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

const daysOfTheWeek = {
    SUNDAY: 0,
    MONDAY: 1,
    TUESDAY: 2,
    WEDNESDAY: 3,
    THURSDAY: 4,
    FRIDAY: 5,
    SATURDAY: 6,
};

const getDayOfWeek = (dayOffset: number): string => {
    if (dayOffset === 0) return 'TODAY';
    const dayOfTheWeek = new Date().getDay();
    let day = dayOfTheWeek + dayOffset;
    if (day > 6) day -= 7;
    switch (day) {
        case daysOfTheWeek.SUNDAY:
            return 'Sunday';
        case daysOfTheWeek.MONDAY:
            return 'Monday';
        case daysOfTheWeek.TUESDAY:
            return 'Tuesday';
        case daysOfTheWeek.WEDNESDAY:
            return 'Wednesday';
        case daysOfTheWeek.THURSDAY:
            return 'Thursday';
        case daysOfTheWeek.FRIDAY:
            return 'Friday';
        case daysOfTheWeek.SATURDAY:
            return 'Saturday';
    }
};

const initialState = { weather: { temperature: '', daily: { data: [] } } };
type State = Readonly<typeof initialState>;

class App extends React.Component {
    readonly state: State = initialState;

    componentDidMount(): void {
        navigator.geolocation.getCurrentPosition(currentPosition => {
            getWeather(currentPosition.coords).then(res => this.setState({ weather: res }));
        });
    }

    render(): JSX.Element {
        let listItems;
        const { weather } = this.state;
        const { daily } = weather;
        if (daily) {
            const dailyData = daily.data;
            listItems = dailyData.map((day, index) => {
                return (
                    <Day key={day.time}>
                        <DayOfTheWeek>{getDayOfWeek(index)}</DayOfTheWeek>
                        <WeatherCard
                            icon={day.icon}
                            summary={day.summary}
                            temperatureHigh={day.temperatureHigh}
                            temperatureLow={day.temperatureLow}
                        />
                    </Day>
                );
            });
        }

        const { brand, links } = navigation;
        return (
            <div className="App">
                <NavbarScroller brand={brand} links={links} />
                <Heading>Forecast</Heading>
                <WeatherRow>{listItems}</WeatherRow>
            </div>
        );
    }
}

export default App;
