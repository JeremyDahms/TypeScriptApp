import * as React from 'react';
import { IconContext } from 'react-icons/lib';
import styled from 'styled-components';
import { SidebarData } from './SidebarData';
import NameTyper from './NameTyper';
import SubMenu from './SubMenu';

const SidebarNav = styled.nav`
    background-image: linear-gradient(#212121, #aaa);
    position: fixed;
    top: 0;
    bottom: 0;
    height: 100%;
    left: 0;
    width: 60px;
    overflow: hidden;
    -webkit-transition: width 0.1s linear;
    transition: width 0.1s linear;
    -webkit-transform: translateZ(0) scale(1, 1);
    z-index: 10;

    &:hover {
        width: 250px;
    }
`;

const SidebarWrap = styled.div`
    float: left;
    width: 100%;
    height: 70%;
    white-space: nowrap;
`;

const Sidebar: React.FC = () => {
    const [isTyping, setIsTyping] = React.useState(false);

    const typeName = () => {
        setIsTyping(true);
    };

    const cancelType = () => {
        setIsTyping(false);
    };

    return (
        <IconContext.Provider value={{ color: '#fff' }}>
            <SidebarNav onMouseOver={typeName} onMouseLeave={cancelType}>
                <div style={{ height: '30%' }}>{isTyping && <NameTyper />}</div>
                <SidebarWrap>
                    {SidebarData.map((item, index) => {
                        return <SubMenu item={item} key={index} />;
                    })}
                </SidebarWrap>
            </SidebarNav>
        </IconContext.Provider>
    );
};

export default Sidebar;
