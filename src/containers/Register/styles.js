import styled from 'styled-components';
import { Link as ReactLink } from 'react-router-dom';

import BackgroundRegister from '../../assets/background.svg';
import BackgroundLogin from '../../assets/background-login.svg';

export const Container = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
`;

export const LeftContainer = styled.div`
    background: url('${BackgroundLogin}');
    background-size: cover;
    background-position: center;

    height: 100%;
    width: 100%;
    max-width: 50%;
    
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 70%;
        margin-top: 50px;
    }
`;

export const RightContainer = styled.div`
    background: url('${BackgroundRegister}');
    background-size: auto 160%;
    background-position: center;
    background-color: #1e1e1e;

    height: 100%;
    width: 100%;
    max-width: 50%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
        color: #ffffff;
        font-size: 16px;
    }
`;

export const Title = styled.h2`
    font-family: "Lobster", sans-serif;
    color: #9758a6;
    font-size: 35px;
    text-align: center;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    width: 100%;
    max-width: 400px;
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;

    input {
        width: 100%;
        border: none;
        height: 52px;
        border-radius: 10px;
        padding: 0 16px;
    }

    label {
        color: #ffffff;
        font-size: 16px;
        
    }

    p {
        font-size: 14px;
        line-height: 80%;
        color: #ff4d4d;
        font-weight: 600;
        height: 10px;
    }
`;

export const Link = styled(ReactLink)`
    text-decoration: none;
    color: #fff;

    &:hover {
        text-decoration: underline;
    }
`;
