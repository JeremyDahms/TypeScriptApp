import * as React from 'react';

import { getWeather } from '../../api/darkSky-service';

import WeatherCard from './WeatherCard/WeatherCard';

import { Day, DayOfTheWeek, Heading, WeatherRow } from './weather-styles';

const initialState = { weather: { temperature: '', daily: { data: [] } } };
type State = Readonly<typeof initialState>;

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
class WeatherPage extends React.PureComponent {
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
        return (
            <div className="Weather">
                <Heading>Forecast</Heading>
                <WeatherRow>{listItems}</WeatherRow>
            </div>
        );
    }
}

export default WeatherPage;
