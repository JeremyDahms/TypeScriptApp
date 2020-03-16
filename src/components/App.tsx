import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from '../Routing/Routes';

class App extends React.Component {
    render(): JSX.Element {
        return (
            <Router>
                <Routes />
            </Router>
        );
    }
}

export default App;
