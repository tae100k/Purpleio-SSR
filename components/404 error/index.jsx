import * as S from "./styles";

const Error = () => {
  return (
    <>
      <S.ErrorPage>
        <S.MainWrapper>
          <S.Title>404</S.Title>
          <S.SubTitle>Opps! Page not found</S.SubTitle>
          <S.Content>잘못된 페이지를 입력하셨습니다.</S.Content>
        </S.MainWrapper>
      </S.ErrorPage>
    </>
  );
};

export default Error;
