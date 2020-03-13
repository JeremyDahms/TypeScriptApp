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
    justify-content: space-between;
`;
