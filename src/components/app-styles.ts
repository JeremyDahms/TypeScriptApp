import styled from 'styled-components';

export const Theme = {
    colors: {
        aliceBlue: `#F0F8FF`,
        bg: `#fff`,
        dark: `#24292e`,
        light: `#EEEEEE`,
        header: `#6495ED`,
        red: `#ff5851`,
        royalBlue: '#4169E1',
        teal: `#008080`,
    },
    fonts: {
        body: `IBM Plex Sans, sans-serif`,
        heading: `Verdana, Geneva, sans-serif`,
    },
};

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
    color: ${Theme.colors.light};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;
