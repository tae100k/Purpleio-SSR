import styled from "styled-components";

export const Footer = styled.footer`
  display: flex;
  padding: 30px 30px 20px 30px;
  color: white;
  justify-content: space-around;
  background-color: #63489a;
  width: 100%;
  height: 200px;
  position: absolute;
  bottom: 0;
  left: 0;
  @media screen and (max-width: 991px) {
    position: relative;
    justify-content: flex-start;
  }
`;

export const FooterAddressWrapper = styled.div`
  margin-right: 1.25rem;
  margin-bottom: 2rem;
  @media screen and (max-width: 991px) {
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: center;
  }
`;

export const FooterLeftWrapper = styled.div``;

export const FooterLogo = styled.h1`
  font-family: "Pacifico", cursive;
  font-weight: 400;
  font-size: 1.5rem;
`;

export const FooterContact = styled.h2`
  margin-top: 1.3rem;
  font-size: 15px;
  font-weight: 400;
`;

export const FooterAddress = styled.address`
  color: #999;
`;

export const FooterBtn = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 36px;
  max-width: max-content;
  background-color: white;
  border-radius: 100px;
  color: black;
  margin: 0.6rem 0;
  padding: 0.6rem 1.3rem;
  &:hover {
    color: black;
  }
`;

export const FooterNav = styled.ul`
  list-style: none;
  @media screen and (max-width: 991px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  line-height: 2rem;
`;

export const NavTitle = styled.h2`
  font-weight: 500;
  font-size: 24px;
`;

export const NavUl = styled.li``;

export const NavLi = styled.li`
  list-style: none;
`;
export const NavLiA = styled.a`
  font-style: italic;
  &:hover {
    background: #63489a;
    color: #fff;
  }
`;

export const Legal = styled.div`
  color: #999;
  display: flex;
  align-items: end;
  @media screen and (max-width: 991px) {
    display: none;
  }
`;

export const LegalP = styled.p``;
