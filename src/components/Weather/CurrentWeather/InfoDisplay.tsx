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
        case 'summary':
            return 'Summary';
        case 'temperature':
            return 'Temperature';
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
/**
 * "currently": {
        "time": 1584397980,
        "summary": "Partly Cloudy",
        "icon": "partly-cloudy-day",
        "nearestStormDistance": 21,
        "nearestStormBearing": 190,
        "precipIntensity": 0,
        "precipProbability": 0,
        "temperature": 31.22,
        "apparentTemperature": 23.6,
        "dewPoint": 17.07,
        "humidity": 0.55,
        "pressure": 1034.8,
        "windSpeed": 8.5,
        "windGust": 13.85,
        "windBearing": 112,
        "cloudCover": 0.43,
        "uvIndex": 0,
        "visibility": 10,
        "ozone": 348.3
    },
*/

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
