import * as React from 'react';
import styled from 'styled-components';

const SidebarInfo = styled.h1`
    text-align: right;
    color: white;
    padding-left: 70px;
    padding-top: 50px;
    padding-right: 15px;
    font-size: 40px;
    font-family: Didot, 'Didot LT STD', 'Hoefler Text', Garamond, 'Times New Roman', serif;
`;

const MY_NAME = 'Jeremy Dahms';

function useInterval(callback: () => void, delay: number | null) {
    const savedCallback = React.useRef<() => void | null>();
    // Remember the latest callback.
    React.useEffect(() => {
        savedCallback.current = callback;
    });
    // Set up the interval.
    React.useEffect(() => {
        function tick() {
            if (typeof savedCallback?.current !== 'undefined') {
                savedCallback?.current();
            }
        }
        if (delay !== null) {
            const id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}

const NameTyper: React.FC = () => {
    const [name, setName] = React.useState('');
    const [idx, setIdx] = React.useState(0);

    const typeIncrement = () => {
        if (idx >= MY_NAME.length) return;

        const newName = name + MY_NAME.charAt(idx);
        setIdx((idx) => idx + 1);
        setName(newName);
    };
    useInterval(
        typeIncrement,
        // Delay in milliseconds or null to stop it
        300,
    );

    return <SidebarInfo>{name}</SidebarInfo>;
};

export default NameTyper;
