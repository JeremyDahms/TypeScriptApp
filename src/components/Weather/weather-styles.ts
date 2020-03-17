import styled from 'styled-components';
import { Theme } from '../app-styles';

export const Card = styled.div`
    background: ${Theme.colors.aliceBlue};
    color: ${Theme.colors.primaryDarkRed};
    display: flex;
    width: 80%;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    border-radius: 2em;
    margin: 0.2em;
    padding 1em;
`;

export const CWContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

export const CWDisplay = styled.div`
    color: ${Theme.colors.primaryDarkRed};
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    align-items: flex-start;
    margin: 0.5em;
    padding 1em;
`;

export const CWInfoContainer = styled.div`
    display: flex;
    flex-direction: row;
    font-size: 1.2rem;
    width: 70%;
    padding-top: 0.2rem;
`;

export const CWInfoName = styled.div`
    text-align: right;
    font-weight: bold;
    margin-right: 1rem;
    width: 40%;
`;

export const CWInfoData = styled.div`
    text-align: left;
    width: 20%;
`;

export const Day = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    padding: 1em 0 0.2em 0;
`;

export const DayOfTheWeek = styled.span`
    color: ${Theme.colors.primaryDarkRed};
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.2em;
    font-weight: bold;
`;

export const Heading = styled.h1`
    font-family: Arial, Helvetica, sans-serif;
    margin: 0.5em;
    border-bottom: 0.1rem solid black;
`;

export const Icon = styled.img`
    margin: 0;
`;

export const IconCurrent = styled.img`
    margin: 0;
    height: auto;
    width: 30%;
`;

export const Summary = styled.span`
    font-family: ${Theme.fonts.body};
    font-size: 1em;
    font-style: italic;
    text-align: center;
    margin-bottom: 2em;
`;

export const Temperatures = styled.div`
    display: flex;
    font-size: 2em;
    flex-direction: row;
`;

export const TemperatureHigh = styled.div`
    font-family: ${Theme.fonts.body};
    font-weight: bold;
    margin-right: 0.75em;
`;

export const TemperatureLow = styled.div`
    font-family: ${Theme.fonts.body};
    font-weight: bold;
    opacity: 0.5;
    margin-left: 0.75em;
`;

export const WeatherRow = styled.div`
    font-family: ${Theme.fonts.heading};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 1rem;
`;
