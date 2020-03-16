import styled from 'styled-components';
import { Theme } from '../app-styles';

export const Navbar = styled.nav`
    background: ${Theme.colors.primary};
    font-family: ${Theme.fonts.heading};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 2rem;
    padding-left: 2rem;
    a {
        color: ${Theme.colors.primaryLight};
        text-decoration: none;
    }
`;

export const Brand = styled.a`
    font-size: 1rem;
    font-weight: bold;
    margin-left: 1rem;
    padding-right: 1rem;
`;

export const Ul = styled.ul`
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
`;

export const Li = styled.li`
    flex: 0 0 auto;
    -webkit-box-align: center;
    -webkit-box-pack: center;
    -webkit-tap-highlight-color: transparent;
    align-items: center;
    display: flex;
    font-size: 14px;
    height: 50px;
    justify-content: center;
    line-height: 16px;
    margin: 0 10px;
    text-decoration: none;
    white-space: nowrap;
    a:hover {
        color: white;
    }
`;
