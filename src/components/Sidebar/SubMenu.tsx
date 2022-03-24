import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SidebarLink = styled(Link)`
    display: flex;
    color: #e1e9fc;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    list-style: none;
    height: 20px;
    text-decoration: none;
    font-size: 18px;
    &:hover {
        background: #252831;
        border-left: 4px solid #632ce4;
        cursor: pointer;
    }
`;

const SidebarLabel = styled.span`
    margin-left: 22px;
`;

const DropdownLink = styled(Link)`
    background: #414707;
    height: 60px;
    padding-left: 3rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #f5f5f5;
    font-size: 18px;

    &:hover {
        background: #632ce4;
        cursor: pointer;
    }
`;

interface SubMenuProps {
    item: Item;
}

interface Item {
    icon: JSX.Element;
    iconClosed: JSX.Element;
    iconOpened: JSX.Element;
    title: string;
    path: string;
    subNav?: Array<object>;
}

const SubMenu = (props: SubMenuProps) => {
    const [subNavIsOpen, setSubNav] = React.useState(false);

    const showSubNav = () => setSubNav(!subNavIsOpen);

    return (
        <>
            <SidebarLink to={props.item.path} onClick={props.item.subNav && showSubNav}>
                <div>
                    {props.item.icon}
                    <SidebarLabel>{props.item.title}</SidebarLabel>
                </div>
                {props.item.subNav && subNavIsOpen ? props.item.iconOpened : props.item.iconClosed}
            </SidebarLink>
            {subNavIsOpen &&
                props.item.subNav.map((item: Item, index) => {
                    return (
                        <DropdownLink to={item.path}>
                            {item.icon}
                            <SidebarLabel>{item.title}</SidebarLabel>
                        </DropdownLink>
                    );
                })}
        </>
    );
};

export default SubMenu;
