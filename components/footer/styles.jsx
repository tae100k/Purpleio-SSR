import styled from "styled-components";

export const Footer = styled.footer`
  display: flex;
  flex-flow: row wrap;
  padding: 30px 30px 20px 30px;
  color: white;
  background-color: #63489a;
  border-top: 1px solid #e5e5e5;
  width: 100%;
  position: fixed;
  bottom: 0;
  height: 400px;
  left: 0;
  @media screen and (min-width: 24.375em) {
    position: relative;
  }
`;

export const FooterAddressWrapper = styled.div`
  margin-right: 1.25em;
  margin-bottom: 2em;
`;

export const FooterLogo = styled.h1`
  font-family: "Pacifico", cursive;
  font-weight: 400;
  font-size: 1.5rem;
`;

export const FooterContact = styled.h2`
  margin-top: 1.3em;
  font-size: 15px;
  font-weight: 400;
`;

export const FooterAddress = styled.address`
  font-style: normal;
  color: #999;
`;

export const FooterBtn = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 36px;
  max-width: max-content;
  background-color: #eee;
  border-radius: 100px;
  color: black;
  line-height: 0;
  margin: 0.6em 0;
  font-size: 1rem;
  padding: 0 1.3em;
`;

export const FooterNav = styled.ul`
  list-style: none;
  padding-left: 0;
  display: flex;
  flex-flow: row wrap;
`;

export const NavItem = styled.li`
  line-height: 2em;
`;

export const NavTitle = styled.h2`
  font-weight: 400;
  font-size: 15px;
`;

export const NavUlExtra = styled.ul`
  column-count: 2;
  column-gap: 1.25em;
`;

export const LegalLinks = styled.div`
  display: flex;
  align-items: center;
  @media screen and (min-width: 24.375em) {
    margin-left: auto;
  }
`;
export const Legal = styled.div`
  display: flex;
  flex-wrap: wrap;
  color: #999;
  @media screen and (min-width: 24.375em) {
    margin-left: auto;
  }
`;

export const Heart = styled.span`
  color: #2f2f2f;
`;
