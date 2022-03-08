import * as S from "./styles";

const Modal = ({ isClicked, setIsClicked }) => {
  const close = () => setIsClicked(false);
  return (
    <>
      <S.popupWrapper>
        <S.popup>
          <S.popupHead>
            <S.headTitle>Purple IO</S.headTitle>
          </S.popupHead>
          <S.popupBody>
            <S.bodyContent>
              <S.bodyTitlebox>
                <h1>Title</h1>
              </S.bodyTitlebox>
              <S.bodyContentBox>
                <p>
                  컨테이너 박스가 있고 그 안에 각각 가로값과 세로값이 다른 박스
                  아이템이 있습니다. 위의 상태 그대로 라면 div의 기본속성은
                  display block이기 때문에 가로값과 관계없이 세로영역 만큼
                  한줄을 다 차지하기 때문에 div박스들은 아래와 같이 수직으로
                  떨어지게 됩니다.
                </p>
              </S.bodyContentBox>
            </S.bodyContent>
          </S.popupBody>
          <S.popupFoot>
            <S.popBtn id="confirm">확인</S.popBtn>
            <S.popBtn id="close">창 닫기</S.popBtn>
          </S.popupFoot>
        </S.popup>
      </S.popupWrapper>
    </>
  );
};

export default Modal;
