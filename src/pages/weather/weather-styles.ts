import styled, { css } from 'styled-components';

export const Card = styled.div`
    ${({ theme }) => css`background: ${theme.colors.aliceBlue};
        color: ${theme.colors.primaryDarkRed};
        display: flex;
        width: 80%;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        height: 100%;
        border-radius: 2em;
        margin: 0.2em;
        padding 1em;
    `}
`;

export const CWContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

export const CWDisplay = styled.div`
    ${({ theme }) => css`
        color: ${theme.colors.primaryDarkRed};
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 70%;
        padding 1em;
    `}
`;

export const CWInfoContainer = styled.div`
    display: flex;
    flex-direction: row;
    font-size: 1.5rem;
    width: 100%;
    padding-top: 0.2rem;
`;

export const CWInfoName = styled.div`
    color: #526a80;
    text-align: right;
    font-weight: bold;
    margin-right: 1rem;
    width: 30%;
`;

export const CWInfoData = styled.div`
    color: #787c80;
    text-align: left;
    width: 30%;
`;

export const CWSummary = styled.div`
    ${({ theme }) => css`
        color: #a3d4ff;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: flex-start;
        font-family: ${theme.fonts.heading};
        font-weight: bold;
        font-size: 2em;
        margin-left: 2em;
        height: auto;
        width: 25%;
    `}
`;

export const Day = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    padding: 1em 0 0.2em 0;
`;

export const DayOfTheWeek = styled.span`
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
    width: 20%;
`;

export const Summary = styled.span`
    ${({ theme }) => css`
        font-family: ${theme.fonts.body};
        font-size: 1em;
        font-style: italic;
        text-align: center;
        margin-bottom: 2em;
    `}
`;

export const Temperatures = styled.div`
    display: flex;
    font-size: 2em;
    flex-direction: row;
`;

export const TemperatureHigh = styled.div`
    ${({ theme }) => css`
        font-family: ${theme.fonts.body};
        font-weight: bold;
        margin-right: 0.75em;
    `}
`;

export const TemperatureLow = styled.div`
    ${({ theme }) => css`
        font-family: ${theme.fonts.body};
        font-weight: bold;
        opacity: 0.5;
        margin-left: 0.75em;
    `}
`;

export const WeatherRow = styled.div`
    ${({ theme }) => css`
        font-family: ${theme.fonts.heading};
        width: 75vw;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding-top: 1rem;
    `}
`;
