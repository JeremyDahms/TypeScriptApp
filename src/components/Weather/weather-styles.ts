import styled from 'styled-components';
import { Theme } from '../app-styles';

export const Day = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    background-color: #f5fffa;
    padding: 1em 0 0.2em 0;
    border: 0.1em solid #e6e6fa;
`;

export const DayOfTheWeek = styled.span`
    color: #8b008b;
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
    color: ${Theme.colors.cream};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;
