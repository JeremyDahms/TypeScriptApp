import * as React from 'react';

import WeatherCard from './WeatherCard';

import { getDayOfWeek } from '../weatherHelpers';
import { Day, DayOfTheWeek } from '../weather-styles';

const WeatherCardContainer = (props: { daily: Array<object> }): JSX.Element => {
    const dailyData = props.daily['data'];
    return dailyData.map(
        (
            day: {
                time: React.ReactText;
                icon: string;
                summary: string;
                temperatureHigh: string;
                temperatureLow: string;
            },
            index: number,
        ) => {
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
        },
    );
};

export default WeatherCardContainer;
