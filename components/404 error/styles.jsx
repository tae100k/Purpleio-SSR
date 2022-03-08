import styled, { keyframes } from "styled-components";

export const ErrorPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 100px;
`;

export const MainWrapper = styled.div`
  max-width: 600px;
  text-align: center;
`;
export const Title = styled.h2`
  font-size: 14vw;
  color: #63489a;
  @media screen and (max-width: 768px) {
    font-size: 100px;
  }
`;
export const SubTitle = styled.h4`
  font-size: 36px;
  margin-bottom: 20px;
  color: #63489a;
  text-transform: uppercase;
  max-width: 600px;
`;

export const Content = styled.p`
  font-size: 24px;
  color: #0d0d0d;
`;

export const Btns = styled.div`
  margin: 25px 0;
  display: flex;

  justify-content: center;
  @media screen and (max-width: 425px) {
    flex-direction: column;
  }
`;

export const Links = styled.a`
  margin: 0 10px;
  text-decoration: none;
  border: 2px solid #63489a;
  color: #63489a;
  font-weight: 500;
  padding: 10px 25px;
  border-radius: 25px;
  text-transform: uppercase;
  &:hover {
    background: #63489a;
    color: #fff;
  }
  @media screen and (max-width: 425px) {
    margin: 10px 0px;
  }
`;
