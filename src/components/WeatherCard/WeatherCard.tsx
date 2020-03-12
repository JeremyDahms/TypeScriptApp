import * as React from 'react';

interface WeatherProps {
    icon: string;
    temperature: string;
}

const WeatherCard = (props: WeatherProps): JSX.Element => {
    return (
        <div>
            <div>{props.icon}</div>
            <div>{props.temperature}</div>
        </div>
    );
};

export default WeatherCard;
