import styled from 'styled-components';

const Theme = {
    colors: {
        bg: `#fff`,
        dark: `#24292e`,
        light: `#EEEEEE`,
        red: `#ff5851`,
    },
    fonts: {
        body: `IBM Plex Sans, sans-serif`,
        heading: `IBM Plex Sans, sans-serif`,
    },
};

export const WeatherRow = styled.div`
    font-family: ${Theme.fonts.heading};
    color: ${Theme.colors.light};
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: space-around;
`;

export const Card = styled.div`
    background: ${Theme.colors.light};
    color: ${Theme.colors.dark};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 2px solid palevioletred;
    border-radius: 3px;
`;
