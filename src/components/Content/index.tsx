import React from 'react';
import styled from 'styled-components';

const ContentContainer = styled.div`
    width: 40vw;
    height: 100%;
    min-height: 50vh;
    font-size: 2vh;
    padding: 2rem;
    background: #343434;
    border-radius: 40px;
`;

const Content = () => {
    return (
        <ContentContainer>
            <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
            </div>
        </ContentContainer>
    );
};

export default Content;
