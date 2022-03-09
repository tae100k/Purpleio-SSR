import * as S from "./styles";

const Footer = () => {
  return (
    <S.Footer>
      <S.FooterAddressWrapper>
        <S.FooterLeftWrapper>
          <S.FooterLogo>PURPLE IO </S.FooterLogo>
          <S.FooterContact>Contact - 2022@김태희</S.FooterContact>
          <S.FooterAddress>
            서울 강남구 테헤란로501, 17층
            <br />
          </S.FooterAddress>
        </S.FooterLeftWrapper>
        <S.FooterBtn href="mailto:wlodms11@naver.com">Email Us</S.FooterBtn>
      </S.FooterAddressWrapper>

      <S.FooterNav>
        <S.NavItem>
          <S.NavTitle>Media</S.NavTitle>
          <S.NavUl>
            <S.NavLi>
              <S.NavLiA
                href="https://fallacious-smash-138.notion.site/GET-WITH-THE-PROGRAM-be2073b7061f4e60adc40c17bad5c79a"
                target="_blank"
              >
                Blog
              </S.NavLiA>
            </S.NavLi>

            <S.NavLi>
              <S.NavLiA href="https://github.com/tae100k" target="_blank">
                Github
              </S.NavLiA>
            </S.NavLi>

            <S.NavLi>
              <S.NavLiA
                href="https://www.instagram.com/eeh_eat_/"
                target="_blank"
              >
                Instagram
              </S.NavLiA>
            </S.NavLi>
          </S.NavUl>
        </S.NavItem>
      </S.FooterNav>

      <S.Legal>
        <S.LegalP>
          &copy; 2022 김태희 & 퍼플아이오 All rights reserved.
        </S.LegalP>
      </S.Legal>
    </S.Footer>
  );
};

export default Footer;
