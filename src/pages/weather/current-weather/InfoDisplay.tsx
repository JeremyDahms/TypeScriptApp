import * as React from 'react';
import { CWInfoContainer, CWInfoName, CWInfoData } from '../weather-styles';

interface DisplayProps {
    infoName: string;
    infoData: number;
}

const convertKeyToDisplayName = (keyName: string): string => {
    switch (keyName) {
        case 'apparentTemperature':
            return 'Apparent Temperature';
        case 'cloudCover':
            return 'Cloud Cover';
        case 'dewPoint':
            return 'Dew Point';
        case 'precipProbability':
            return 'Chance of Preciptation';
        case 'pressure':
            return 'Pressure';
        case 'windBearing':
            return 'Wind Bearing';
        case 'windGust':
            return 'Wind Gust';
        case 'windSpeed':
            return 'Wind Speed';
        case 'visibility':
            return 'Visibility';
        default:
            return null;
    }
};

const InfoDisplay = (props: DisplayProps): JSX.Element => {
    const infoName = convertKeyToDisplayName(props.infoName);
    return (
        infoName && (
            <CWInfoContainer>
                <CWInfoName>{infoName}</CWInfoName>
                <CWInfoData>{props.infoData}</CWInfoData>
            </CWInfoContainer>
        )
    );
};

export default InfoDisplay;
