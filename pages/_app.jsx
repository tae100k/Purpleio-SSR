import Header from "../components/header/index";
import Footer from "../components/footer/index";
import "../styles/global.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
