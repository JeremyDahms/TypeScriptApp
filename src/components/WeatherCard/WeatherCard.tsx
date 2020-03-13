import * as React from 'react';
import { Card, Summary, Temperatures, TemperatureHigh, TemperatureLow } from './weather-card-styles';
import clearday from '../../assets/clear-day.svg';
import cloudy from '../../assets/cloudy.svg';
import fog from '../../assets/fog.svg';
import partlycloudyday from '../../assets/partly-cloudy-day.svg';
import rain from '../../assets/rain.svg';

interface WeatherProps {
    icon: string;
    summary: string;
    temperatureHigh: string;
    temperatureLow: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getIcon = (icon: string): any => {
    switch (icon) {
        case 'clear-day':
            return clearday;
        case 'cloudy':
            return cloudy;
        case 'fog':
            return fog;
        case 'partly-cloudy-day':
            return partlycloudyday;
        case 'rain':
            return rain;
    }
    return null;
};

const WeatherCard = (props: WeatherProps): JSX.Element => {
    const { icon, summary, temperatureHigh, temperatureLow } = props;
    return (
        <Card>
            <img src={getIcon(icon)} alt={icon} />
            <Summary>{summary}</Summary>
            <Temperatures>
                <TemperatureHigh>{temperatureHigh}</TemperatureHigh>
                <TemperatureLow>{temperatureLow}</TemperatureLow>
            </Temperatures>
        </Card>
    );
};

export default WeatherCard;
