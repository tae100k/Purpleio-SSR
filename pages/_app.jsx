import Header from "../components/header/index";
import * as S from "../styles/Header";
import "../styles/global.css";

function MyApp({ Component, pageProps }) {
  return (
    <S.TotalWrapper>
      <Header />
      <Component {...pageProps} />
    </S.TotalWrapper>
  );
}

export default MyApp;
