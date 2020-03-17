import * as React from 'react';
import { getIcon } from '../weatherHelpers';
import { Card, Icon, Summary, Temperatures, TemperatureHigh, TemperatureLow } from '../weather-styles';

interface WeatherProps {
    icon: string;
    summary: string;
    temperatureHigh: string;
    temperatureLow: string;
}

const WeatherCard = (props: WeatherProps): JSX.Element => {
    const { icon, summary, temperatureHigh, temperatureLow } = props;
    return (
        <Card>
            <Icon src={getIcon(icon)} alt={icon} />
            <Summary>{summary}</Summary>
            <Temperatures>
                <TemperatureHigh>{Math.round(parseFloat(temperatureHigh)) + '\xB0'}</TemperatureHigh>
                <TemperatureLow>{Math.round(parseFloat(temperatureLow)) + '\xB0'}</TemperatureLow>
            </Temperatures>
        </Card>
    );
};

export default WeatherCard;
