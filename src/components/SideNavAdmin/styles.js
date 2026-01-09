import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;  
    height: 100vh;
    background: #363636;
    

    img {
        width: 70%;
        margin: 40px 0;
    }
`;

export const NavLinkContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const NavLink = styled(Link)`
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 20px;
    color: #fff;
    text-decoration: none;
    background-color: ${(props) => props.$isActive ? '#5c2669' : 'transparent'};
    transition: transform 0.25s ease, box-shadow 0.45s ease;

&:hover {
    background-color: #6f357c;
    border: 1px double #fff;
    transform: scale(1.05);
    
}

`;

export const Footer = styled.footer`
    width: 100%;
    margin-top: auto;
    margin-bottom: 20px;
    
`;
