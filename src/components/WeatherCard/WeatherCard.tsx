import * as React from 'react';
import rain from './rain.svg';

interface WeatherProps {
    icon: string;
    temperature: string;
}

const WeatherCard = (props: WeatherProps): JSX.Element => {
    return (
        <div>
            <img src={rain} alt={props.icon} />
            <div>{props.temperature}</div>
        </div>
    );
};

export default WeatherCard;
