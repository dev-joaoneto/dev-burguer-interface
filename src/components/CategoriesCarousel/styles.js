import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    .carousel-item {
        padding-right: 40px;
    }
`

export const Title = styled.h2`
    color: #9758a6;
    font-size: 32px;
    font-weight: 800;
    padding-bottom: 12px;
    position: relative;
    text-align: center;
    margin-bottom: 24px;
    font-family: "Lobster", sans-serif;

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        width: 56px;
        height: 4px;
        background-color: #9758a6;
        left: 50%;
        transform: translateX(-50%);
    }
`

export const ContainerItems = styled.div`
    background: url('${ props  => props.$imageUrl}');
    background-size: cover;
    background-position: center;

    width: 100%;
    height: 200px;
    display: flex;
    align-items: center;
    padding: 20px 10px;
    border-radius: 20px;
   
`
export const CategoryButton = styled(Link)`
    color: #fff;
    background-color: rgba(0, 0, 0, 0.7);
    padding: 5px 20px;
    border-radius: 30px;
    font-size: 22.5px;
    border-radius: 30px;
    margin-top: 130px;
    font-weight: 400;
    text-decoration: none;

    &:hover {
        background-color: #9758a6;
    }
`;
