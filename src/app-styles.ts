import styled, { css } from 'styled-components';

export const AppContainer = styled.div`
    ${({ theme }) => css`
        position: fixed;
        height: 100vh;
        width: 100vw;
        margin-left: 60px;
        padding-top: 10vh;
        background: ${theme.colors.primaryBackground};
        color: ${theme.colors.primaryFontColor};
    `}
`;
