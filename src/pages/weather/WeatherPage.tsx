import * as React from 'react';
import { getWeather } from '../../api/darkSky-service';
import WeatherCardContainer from './weather-card/WeatherCardContainer';
import CurrentWeather from './current-weather/CurrentWeather';
import { Heading, WeatherRow } from './weather-styles';

const initialState = {
    weather: {},
};
type State = Readonly<typeof initialState>;

class WeatherPage extends React.PureComponent {
    readonly state: State = initialState;

    componentDidMount(): void {
        navigator.geolocation.getCurrentPosition(currentPosition => {
            getWeather(currentPosition.coords).then(res => this.setState({ weather: res }));
        });
    }

    render(): JSX.Element {
        const { weather } = this.state;
        const dailyWeather = weather['daily'];
        const currentWeather = weather['currently'];
        return (
            <div className="Weather">
                {dailyWeather && (
                    <WeatherRow>
                        <WeatherCardContainer daily={dailyWeather} />
                    </WeatherRow>
                )}
                {currentWeather && (
                    <>
                        <Heading>Current Weather</Heading>
                        <CurrentWeather currentWeather={weather['currently']} />
                    </>
                )}
            </div>
        );
    }
}

export default WeatherPage;
