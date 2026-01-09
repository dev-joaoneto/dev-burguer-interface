import styled from "styled-components";
import Background from "../../assets/background-login.svg";
import BackgroundPage from "../../assets/background.svg";

export const Container = styled.div`
    width: 100%;
    background: linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)),
        url('${BackgroundPage}');
    background-size: cover;
    background-position: center;
    min-height: 100vh;
`;

export const Banner = styled.div`

    background: url('${Background}') no-repeat;
    background-size: cover;
    background-position: center;
    background-color: #1f1f1f;
    
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: relative;
    height: 180px;
    width: 100%;

 img {
    height: 170px;
 }
`;

export const Title = styled.div`
    color: #61a120;
    font-size: 32px;
    font-weight: 800;
    padding-bottom: 12px;
    position: relative;
    text-align: center;
    margin-bottom: 24px;
    font-family: "Lobster", sans-serif;
    margin-top: 15px;

    &::after {
        content: '';
        position: absolute;
        bottom: 0px;
        width: 56px;
        height: 4px;
        background-color: #61a120;
        left: 50%;
        transform: translateX(-50%);
    }
`;

export const Content = styled.div`
    display: grid;
    grid-template-columns: 1fr 30%;
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    gap: 20px;
    padding: 20px 40px;
`;