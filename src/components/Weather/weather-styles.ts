import styled from 'styled-components';
import { Theme } from '../app-styles';

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
    margin-left: 0.5em;
`;

export const WeatherRow = styled.div`
    font-family: ${Theme.fonts.heading};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;
