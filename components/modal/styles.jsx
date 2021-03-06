import styled from "styled-components";

export const popupWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99;
  background: rgba(0, 0, 0, 0.5);
  display: ${({ isClicked }) => (isClicked ? "flex" : "none")};
  justify-content: center;
  align-items: center;
`;
export const popup = styled.div`
  width: 100%;
  z-index: 9999;
  margin: 40px;
  max-width: 900px;
  background-color: #ffffff;
  border-radius: 10px;
  overflow: hidden;
  background-color: #63489a;
  box-shadow: 5px 10px 10px 1px rgba(0, 0, 0, 0.3);
`;
export const popupHead = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  color: white;
  justify-content: space-between;
  padding: 12px;
`;
export const headTitle = styled.span`
  font-size: 38px;
  font-style: italic;
  font-weight: 700;
  letter-spacing: -3px;
  text-align: center;
`;

export const closeBtn = styled.span`
  color: white;
  cursor: pointer;
  font-size: 24px;
`;
export const popupBody = styled.div`
  width: 100%;
  background-color: #ffffff;
`;
export const bodyContent = styled.div`
  width: 100%;
  padding: 30px;
`;
export const bodyTitlebox = styled.div`
  text-align: center;
  width: 100%;
`;
export const bodyContentBox = styled.div`
  word-break: break-word;
  overflow-y: auto;
  display: flex;
  align-items: center;
  padding: 1rem 4rem;
  @media screen and (max-width: 768px) {
    display: block;
    padding: 0;
  }
`;

export const bodyP = styled.p`
  padding: 0 2rem;
`;

export const bodyContentImg = styled.img`
  display: flex;
  justify-content: center;
  max-width: 300px;
  max-height: 300px;
  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 0 auto;
  }
`;
export const popupFoot = styled.a`
  width: 100%;
  height: 50px;
  display: ${({ url }) => (!url ? "none" : "flex")};
  justify-content: center;
  cursor: pointer;
  color: white;
  align-items: center;
  &:hover {
    color: white;
  }
`;
