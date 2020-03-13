import * as React from 'react';
import { Card, Summary, Temperatures, TemperatureHigh, TemperatureLow } from './weather-card-styles';
import rain from '../../assets/rain.svg';
import clearday from '../../assets/clear-day.svg';
import partlycloudyday from '../../assets/partly-cloudy-day.svg';

interface WeatherProps {
    icon: string;
    summary: string;
    temperatureHigh: string;
    temperatureLow: string;
}

const getIcon = (icon: string) => {
    switch (icon) {
        case 'rain':
            return rain;
        case 'clear-day':
            return clearday;
        case 'partly-cloudy-day':
            return partlycloudyday;
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
