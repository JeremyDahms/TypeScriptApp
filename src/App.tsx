import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Sidebar } from 'components/index';
import Routes from './Routing/Routes';
import Theme from './Theme';
import { AppContainer } from './app-styles';

const App = () => {
    return (
        <Theme>
            <Router>
                <Sidebar />
                <AppContainer>
                    <Routes />
                </AppContainer>
            </Router>
        </Theme>
    );
};

export default App;
