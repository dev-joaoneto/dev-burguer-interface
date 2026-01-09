import styled from "styled-components"; 
import BannerHome from "../../assets/banner-home.svg";
import Background from "../../assets/background.svg";

export const Banner = styled.div`
  background: url('${BannerHome}');
  background-size: cover;
  background-position: center;
  height: 480px;
  margin-bottom: 10px;

  h1 {
    color: #fff;
    font-size: 70px;
    position: absolute;
    right: 17%;
    top: 15%;
    font-family: "Lobster", sans-serif;
  }
`

export const Container = styled.section`
    background: linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)),
    url('${Background}');
    
`




