import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from 'components/Sidebar/Sidebar';

import Routes from '../Routing/Routes';

class App extends React.Component {
    render(): JSX.Element {
        return (
            <Router>
                <Sidebar />
                <div style={{ marginLeft: '60px' }}>
                    <Routes />
                </div>
            </Router>
        );
    }
}

export default App;
