import React from 'react';
import { Container } from './home-styles';
import { Content } from 'components/index';

const Home = (): JSX.Element => {
    return (
        <Container>
            <div>Hi</div>
            <Content></Content>
        </Container>
    );
};

export default Home;
