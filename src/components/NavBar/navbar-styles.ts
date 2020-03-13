import styled from 'styled-components';
import { Theme } from '../app-styles';

export const Navbar = styled.nav`
    background: ${Theme.colors.teal};
    font-family: ${Theme.fonts.heading};
    color: ${Theme.colors.light};
    display: flex;
    align-items: center;
    justify-content: space-between;
    a {
        color: white;
        text-decoration: none;
    }
`;

export const Brand = styled.a`
    font-size: 24px;
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
    color: #999;
    height: 100%;
    justify-content: center;
    text-decoration: none;
    -webkit-box-align: center;
    -webkit-box-pack: center;
    -webkit-tap-highlight-color: transparent;
    align-items: center;
    color: #999;
    display: flex;
    font-size: 14px;
    height: 50px;
    justify-content: center;
    line-height: 16px;
    margin: 0 10px;
    text-decoration: none;
    white-space: nowrap;
`;
