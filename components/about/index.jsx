import React from "react";
import * as S from "./styles";

const About = ({ cards, company, iframe }) => {
  return (
    <>
      <S.AboutSection>
        <S.AboutPage>About Us</S.AboutPage>
        <S.ContentMaxWrapper>
          <S.ContentWrapper>
            <S.LogoImg src={company.img} alt={company.alt} />
            <S.TextWrapper>
              <p>{company.content1}</p>
              <p>{company.content2}</p>
              <p>{company.content3}</p>
            </S.TextWrapper>
          </S.ContentWrapper>
        </S.ContentMaxWrapper>
      </S.AboutSection>
      <S.CardWrapper>
        <S.Row>
          {cards.map((card, idx) => {
            return (
              <S.Column key={idx}>
                <S.Card>
                  <S.CardImg src={card.img} alt={card.alt} />
                  <S.Container>
                    <S.Title>{card.title} </S.Title>
                    <p>{card.desc} </p>
                    <p>
                      <S.Button>
                        <S.ButtonA href={card.btn} target="_blank">
                          Contact
                        </S.ButtonA>
                      </S.Button>
                    </p>
                  </S.Container>
                </S.Card>
              </S.Column>
            );
          })}

          <S.Column>
            <S.Card>
              <S.CardMap src={iframe.img}></S.CardMap>
              <S.Container>
                <S.Title>{iframe.title}</S.Title>
                <p>
                  {iframe.desc}
                  <br />
                </p>
                <p>
                  <S.Button>
                    <S.ButtonA href={iframe.btn} target="_blank">
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
