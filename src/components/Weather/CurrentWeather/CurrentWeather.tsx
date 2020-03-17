import * as React from 'react';
import InfoDisplay from './InfoDisplay';
import { getIcon } from '../weatherHelpers';
import { CWContainer, CWDisplay, IconCurrent } from '../weather-styles';

interface CurrentWeatherProps {
    currentWeather: object;
}

const CurrentWeather = (props: CurrentWeatherProps): JSX.Element => {
    const { currentWeather } = props;
    const keyNames = Object.keys(currentWeather);
    const icon = currentWeather['icon'];
    return (
        <CWContainer>
            <IconCurrent src={getIcon(icon)} alt={icon} />
            <CWDisplay>
                {keyNames.map(info => {
                    return <InfoDisplay key={info} infoName={info} infoData={currentWeather[info]}></InfoDisplay>;
                })}
            </CWDisplay>
        </CWContainer>
    );
};

export default CurrentWeather;
