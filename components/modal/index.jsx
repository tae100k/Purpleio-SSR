import * as S from "./styles";

const Modal = ({ isClicked, setIsClicked, store }) => {
  const close = () => setIsClicked(false);
  const CUR_URL = store.url;

  console.log("CUR_URL", CUR_URL);
  return (
    <>
      <S.popupWrapper isClicked={isClicked}>
        <S.popup>
          <S.popupHead>
            <S.headTitle>Purple IO</S.headTitle>
            <S.closeBtn onClick={close}>X</S.closeBtn>
          </S.popupHead>
          <S.popupBody>
            <S.bodyContent>
              <S.bodyTitlebox>
                <h1>{store.name}</h1>
              </S.bodyTitlebox>
              <S.bodyContentBox>
                <p>{store.description}</p>
                <S.bodyContentImg src={store.image} />
              </S.bodyContentBox>
            </S.bodyContent>
          </S.popupBody>
          <S.popupFoot url={store.url} href={store.url} target="_blank">
            자세히 보기
            {console.log(store.url)}
          </S.popupFoot>
        </S.popup>
      </S.popupWrapper>
    </>
  );
};

export default Modal;
