import style from "./styles.module.css";

const Modal = ({ isClicked }) => {
  return (
    <div className={style.popupWrapper}>
      <div className={style.popup}>
        <div className={style.popupHead}>
          <span className={style.headTitle}>Purple IO</span>
        </div>
        <div className={style.popupBody}>
          <div className={style.bodyContent}>
            <div className={style.bodyTitlebox}>
              <h1>Title</h1>
            </div>
            <div className={style.bodyContentBox}>
              <p>
                컨테이너 박스가 있고 그 안에 각각 가로값과 세로값이 다른 박스
                아이템이 있습니다. 위의 상태 그대로 라면 div의 기본속성은
                display block이기 때문에 가로값과 관계없이 세로영역 만큼 한줄을
                다 차지하기 때문에 div박스들은 아래와 같이 수직으로 떨어지게
                됩니다.
              </p>
              <p>
                컨테이너 박스가 있고 그 안에 각각 가로값과 세로값이 다른 박스
                아이템이 있습니다. 위의 상태 그대로 라면 div의 기본속성은
                display block이기 때문에 가로값과 관계없이 세로영역 만큼 한줄을
                다 차지하기 때문에 div박스들은 아래와 같이 수직으로 떨어지게
                됩니다.
              </p>
              <p>
                컨테이너 박스가 있고 그 안에 각각 가로값과 세로값이 다른 박스
                아이템이 있습니다. 위의 상태 그대로 라면 div의 기본속성은
                display block이기 때문에 가로값과 관계없이 세로영역 만큼 한줄을
                다 차지하기 때문에 div박스들은 아래와 같이 수직으로 떨어지게
                됩니다.
              </p>
              <p>
                컨테이너 박스가 있고 그 안에 각각 가로값과 세로값이 다른 박스
                아이템이 있습니다. 위의 상태 그대로 라면 div의 기본속성은
                display block이기 때문에 가로값과 관계없이 세로영역 만큼 한줄을
                다 차지하기 때문에 div박스들은 아래와 같이 수직으로 떨어지게
                됩니다.
              </p>
              <p>
                컨테이너 박스가 있고 그 안에 각각 가로값과 세로값이 다른 박스
                아이템이 있습니다. 위의 상태 그대로 라면 div의 기본속성은
                display block이기 때문에 가로값과 관계없이 세로영역 만큼 한줄을
                다 차지하기 때문에 div박스들은 아래와 같이 수직으로 떨어지게
                됩니다.
              </p>
              v
              <p>
                컨테이너 박스가 있고 그 안에 각각 가로값과 세로값이 다른 박스
                아이템이 있습니다. 위의 상태 그대로 라면 div의 기본속성은
                display block이기 때문에 가로값과 관계없이 세로영역 만큼 한줄을
                다 차지하기 때문에 div박스들은 아래와 같이 수직으로 떨어지게
                됩니다.
              </p>
              <p>
                컨테이너 박스가 있고 그 안에 각각 가로값과 세로값이 다른 박스
                아이템이 있습니다. 위의 상태 그대로 라면 div의 기본속성은
                display block이기 때문에 가로값과 관계없이 세로영역 만큼 한줄을
                다 차지하기 때문에 div박스들은 아래와 같이 수직으로 떨어지게
                됩니다.
              </p>
            </div>
          </div>
        </div>
        <div className={style.popupFoot}>
          <span className={style.popBtn} id="confirm">
            확인
          </span>
          <span className={style.popBtn} id="close">
            창 닫기
          </span>
        </div>
      </div>
    </div>
  );
};

export default Modal;
