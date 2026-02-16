import styled from 'styled-components';
import BannerHamburguer from '../../assets/bannerMenu.svg';
import Background from "../../assets/background.svg";
import { Link } from 'react-router-dom';

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #f0f0f0;

      background: linear-gradient(
            rgba(255, 255, 255, 0.5),
            rgba(255, 255, 255, 0.5)),
        url('${Background}');
`;

export const Banner = styled.div`
    background: url('${BannerHamburguer}') no-repeat;
    background-size: cover;
    background-position: center;
    background-color: #1f1f1f;
    position: relative;
    
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 480px;
    width: 100%;

    h1 {
        color: #ffffff;
        font-size: 60px;
        line-height: 65px;
        position: absolute;
        font-family: "Lobster", sans-serif;    
        
        top: 30%;
        right: 15%;
    }

    span {
        display: block;
        color: #ffffff;
        font-size: 20px;
        
    }
`;

export const CategoryMenu = styled.div`
    display: flex;
    justify-content: center;
    gap: 50px;
    margin-top: 30px; 

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const HomeButton = styled(Link)`
    text-decoration: none;
    cursor: pointer;
    background: #9758a6;
    color: #fff;
    font-size: 20px;
    border: none;
    border-radius: 15px;
    padding: 0 20px;
    margin: 25px 10px;
    position: absolute;
    display: flex;
    align-items: center;


    p {
        font-size: 15px;
        font-weight: 600;
        margin-left: 10px;
    }

    &:hover {
        background-color: #6f357c;
        border: 1px double #fff;
    }
     
`;

export const CategoryButton = styled(Link)`
    text-decoration: none;
    cursor: pointer;
    background: none;
    color: ${(props) => props.$isActiveCategory ? (props) => props.theme.purple : (props) => props.theme.orange};
    font-size: 24px;
    font-weight: 500;
    padding-bottom: 5px;
    line-height: 20px;
    border: none;
    border-bottom: ${(props) => props.$isActiveCategory && `3px solid #9758a6` };
    
`;

export const ProductsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 60px;
    padding: 40px;
    justify-content: center;
    max-width: 1280px;
    margin: 50px auto 0;

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 480px) {
        grid-template-columns: 1fr;
    }
`;






