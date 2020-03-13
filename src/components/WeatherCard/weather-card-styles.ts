import styled from 'styled-components';
import { Theme } from '../app-styles';

export const Card = styled.div`
    background: ${Theme.colors.aliceBlue};
    color: ${Theme.colors.dark};
    display: flex;
    width: 80%;
    flex-direction: column;
    align-items: center;
    border-radius: 2em;
    margin: 0.2em;
    padding 1em;
`;

export const Summary = styled.span`
    font-family: ${Theme.fonts.body};
    font-size: 0.75em;
    text-align: center;
    height: 40px;
`;

export const Temperatures = styled.div`
    color: #8b008b;
    display: flex;
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
