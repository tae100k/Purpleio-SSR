import { AstPath } from "prettier";
import React from "react";
import * as S from "./styles";

const About = () => {
  return (
    <>
      <S.AboutSection>
        <S.AboutPage>About Us</S.AboutPage>
        <S.ContentMaxWrapper>
          <S.ContentWrapper>
            <S.LogoImg
              src="https://image.rocketpunch.com/company/118445/peopeulaio_logo_1625047614.png?s=400x400&t=inside"
              alt="퍼플아이오 로고"
            />
            <S.TextWrapper>
              <p>퍼플아이오는 "고객 경험을 첫번째 가치로 생각합니다."</p>
              <p>
                퍼플아이오는 "실패에 대한 두려움 없이 기술에 적응하여 이커머스
                비즈니스를 리드합니다."
              </p>
              <p>
                퍼플아이오는 "기술을 기반으로 새로운 시도를 두려워하지 않고 함께
                자라기를 추구합니다."
              </p>
            </S.TextWrapper>
          </S.ContentWrapper>
        </S.ContentMaxWrapper>
      </S.AboutSection>
      <S.CardWrapper>
        <S.Row>
          <S.Column>
            <S.Card>
              <S.CardImg
                src="https://media.rocketpunch.com/images/2021/6/30/kolonsport-mobile_1625049240.jpg"
                alt="kolon mall"
              />
              <S.Container>
                <S.Title>코오롱 FnC</S.Title>
                <p>코오롱FnC의 공식 패션몰을 개발/운영하고 있습니다.</p>
                <p>
                  <S.Button>
                    <S.ButtonA
                      href="https://www.kolonmall.com/"
                      target="_blank"
                    >
                      Contact
                    </S.ButtonA>
                  </S.Button>
                </p>
              </S.Container>
            </S.Card>
          </S.Column>
          <S.Column>
            <S.Card>
              <S.CardImg
                src="https://media.rocketpunch.com/images/2021/6/30/hiring_1625049258.jpg"
                alt="hiring image"
              />
              <S.Container>
                <S.Title>현재 채용중</S.Title>
                <p>꾸준히 성장하는 팀을 추구합니다.</p>
                <p>
                  <S.Button>
                    <S.ButtonA
                      href="https://www.notion.so/Purple-IO-46bdd70844384d9ab0b7769f350ea071"
                      target="_blank"
                    >
                      Contact
                    </S.ButtonA>
                  </S.Button>
                </p>
              </S.Container>
            </S.Card>
          </S.Column>

          <S.Column>
            <S.Card>
              <S.CardMap src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.024367207513!2d127.05460885164584!3d37.50734343517297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca4147b32b6c5%3A0x61a5d9562e459706!2s17%EC%B8%B5%2C%20501%20Teheran-ro%2C%20Gangnam-gu%2C%20Seoul!5e0!3m2!1sen!2skr!4v1646813316670!5m2!1sen!2skr"></S.CardMap>

              <S.Container>
                <S.Title>오시는 길</S.Title>
                <p>
                  서울 강남구 테헤란로501, 17층
                  <br />
                </p>
                <p>
                  <S.Button>
                    <S.ButtonA href="mailto:hello@purple.io" target="_blank">
                      Contact
                    </S.ButtonA>
                  </S.Button>
                </p>
              </S.Container>
            </S.Card>
          </S.Column>
        </S.Row>
      </S.CardWrapper>
    </>
  );
};

export default About;
