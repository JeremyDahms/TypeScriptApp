import styled from 'styled-components';

const Theme = {
    colors: {
        bg: `#fff`,
        dark: `#24292e`,
        light: `#F0F8FF`,
        red: `#ff5851`,
    },
    fonts: {
        body: `IBM Plex Sans, sans-serif`,
        heading: `IBM Plex Sans, sans-serif`,
    },
};

export const Card = styled.div`
    background: ${Theme.colors.light};
    color: ${Theme.colors.dark};
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    border-radius: 3em;
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
    margin-left: 0.75em;
`;
