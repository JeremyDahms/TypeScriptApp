import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
    colors: {
        primaryBackground: '#121212',
        primaryFontColor: '#ffffff',
        primaryOverlayColor: '#121212',
        aliceBlue: '#F0F8FF',
        cream: '#FFF9F0',
        dark: '#24292e',
        light: '#EEEEEE',
        primary: '#282828',
        primaryLight: '#C2C2C2',
        primaryDarkRed: '#422E2E',
        red: '#FF5851',
    },
    fonts: {
        body: `IBM Plex Sans, sans-serif`,
        heading: `Verdana, Geneva, sans-serif`,
    },
};

const Theme = ({ children }) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
