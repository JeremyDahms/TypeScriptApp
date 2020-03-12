import * as React from 'react';

interface WeatherProps {
    temperature: string;
}

const WeatherCard = (props: WeatherProps): JSX.Element => {
    return (
        <div>
            <div>Image Placeholder</div>
            <div>{props.temperature}</div>
        </div>
    );
};

export default WeatherCard;
