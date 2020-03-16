import styled from 'styled-components';
import { Theme } from '../../app-styles';

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

export const Summary = styled.span`
    font-family: ${Theme.fonts.body};
    font-size: 1em;
    font-style: italic;
    text-align: center;
    margin-bottom: 2em;
`;

export const Icon = styled.img`
    margin: 0;
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
