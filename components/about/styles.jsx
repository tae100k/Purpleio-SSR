import styled from "styled-components";

export const AboutSection = styled.div`
  text-align: center;
`;

export const AboutPage = styled.h1`
  font-family: "Pacifico", cursive;
`;
export const ContentMaxWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
export const ContentWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 1000px;
  justify-content: space-between;
  @media screen and (max-width: 991px) {
    display: block;
  }
`;

export const LogoImg = styled.img`
  width: 200px;
  height: 200px;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
export const Row = styled.div`
  display: flex;
  @media screen and (max-width: 991px) {
    display: block;
  }
`;

export const Column = styled.div`
  width: 33.3%;
  padding: 0 8px;
  height: 400px;
  @media screen and (max-width: 991px) {
    width: 100%;
    height: auto;
  }
`;

export const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin: 8px;
  @media screen and (max-width: 991px) {
    margin: 32px 0;
  }
`;

export const CardImg = styled.img`
  width: 100%;
  height: 300px;
`;

export const CardMap = styled.iframe`
  width: 100%;
  height: 300px;
`;

export const Container = styled.div`
  padding: 1px 16px;
  text-align: center;
`;

export const Title = styled.p`
  color: grey;
  margin-top: 10px;
  font-size: 20px;
  font-style: italic;
`;

export const Button = styled.button`
  border: none;
  padding: 8px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;

  &:hover {
    background-color: #555;
  }
`;

export const ButtonA = styled.a`
  &:hover {
    text-decoration: none;
    color: white;
  }
`;
