import * as React from 'react';
import InfoDisplay from './InfoDisplay';
import { getIcon } from '../weatherHelpers';
import { CWContainer, CWDisplay, CWSummary, IconCurrent } from '../weather-styles';

interface CurrentWeatherProps {
    currentWeather: object;
}

const getCurrentTime = (): string => {
    const today = new Date();
    let abbreviation = 'AM';
    let hours = today.getHours();
    let minutes = today.getMinutes().toString();
    if (hours > 12) {
        hours -= 12;
        abbreviation = 'PM';
    }
    if (parseInt(minutes) < 10) {
        minutes = '0' + minutes;
    }
    return hours + ':' + minutes + ' ' + abbreviation;
};

const CurrentWeather = (props: CurrentWeatherProps): JSX.Element => {
    const { currentWeather } = props;
    const keyNames = Object.keys(currentWeather);
    const icon = currentWeather['icon'];
    const summary = currentWeather['summary'];
    const temperature = currentWeather['temperature'];

    return (
        <CWContainer>
            <IconCurrent src={getIcon(icon)} alt={icon} />
            <CWSummary>
                <div>{getCurrentTime()}</div>
                <div>{Math.round(parseFloat(temperature)) + '\xB0'}</div>
                <div>{summary}</div>
            </CWSummary>
            <CWDisplay>
                {keyNames.map(info => {
                    return <InfoDisplay key={info} infoName={info} infoData={currentWeather[info]}></InfoDisplay>;
                })}
            </CWDisplay>
        </CWContainer>
    );
};

export default CurrentWeather;
