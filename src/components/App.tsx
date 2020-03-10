import * as React from 'react';

import PageInterface from '../PageInterface';

const App: React.FunctionComponent<PageInterface> = () => {
    return (
        <div>
            <h1>Welcome to React with TypeScript</h1>
            <p>The color of this page is: {this.props.color}</p>
        </div>
    );
};

export default App;
