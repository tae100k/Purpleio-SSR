import * as S from "./styles";

const Footer = () => {
  return (
    <S.Footer>
      <S.FooterAddressWrapper>
        <S.FooterLogo>PURPLE IO</S.FooterLogo>
        <S.FooterContact>Contact</S.FooterContact>
        <S.FooterAddress>
          5534 Somewhere In. The World 22193-10212
          <br />
          <S.FooterBtn href="mailto:example@gmail.com">Email Us</S.FooterBtn>
        </S.FooterAddress>
      </S.FooterAddressWrapper>

      <S.FooterNav>
        <S.NavItem>
          <S.NavTitle>Media</S.NavTitle>

          <ul>
            <li>
              <a href="#">Online</a>
            </li>

            <li>
              <a href="#">Print</a>
            </li>

            <li>
              <a href="#">Alternative Ads</a>
            </li>
          </ul>
        </S.NavItem>

        <li class="navItem nav__item--extra">
          <S.NavTitle>Technology</S.NavTitle>

          <S.NavUlExtra>
            <li>
              <a href="#">Hardware Design</a>
            </li>

            <li>
              <a href="#">Software Design</a>
            </li>

            <li>
              <a href="#">Digital Signage</a>
            </li>

            <li>
              <a href="#">Automation</a>
            </li>

            <li>
              <a href="#">Artificial Intelligence</a>
            </li>

            <li>
              <a href="#">IoT</a>
            </li>
          </S.NavUlExtra>
        </li>

        <li class="navItem">
          <S.NavTitle>Legal</S.NavTitle>

          <ul>
            <li>
              <a href="#">Privacy Policy</a>
            </li>

            <li>
              <a href="#">Terms of Use</a>
            </li>

            <li>
              <a href="#">Sitemap</a>
            </li>
          </ul>
        </li>
      </S.FooterNav>

      <S.Legal>
        <p>&copy; 2019 Something. All rights reserved.</p>
      </S.Legal>
    </S.Footer>
  );
};

export default Footer;
