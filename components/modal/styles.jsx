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
  background-color: #ffffff;
  border-radius: 10px;
  overflow: hidden;
  background-color: #63489a;
  box-shadow: 5px 10px 10px 1px rgba(0, 0, 0, 0.3);
`;
export const popupHead = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  color: white;
  justify-content: center;
`;
export const headTitle = styled.span`
  font-size: 38px;
  font-style: italic;
  font-weight: 700;
  letter-spacing: -3px;
  text-align: center;
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
  margin-bottom: 10px;
`;
export const bodyContentBox = styled.div`
  word-break: break-word;
  overflow-y: auto;
`;
export const popupFoot = styled.div`
  width: 100%;
  height: 50px;
`;
export const popBtn = styled.span`
  display: inline-flex;
  width: 50%;
  height: 100%;
  float: left;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  cursor: pointer;
`;
