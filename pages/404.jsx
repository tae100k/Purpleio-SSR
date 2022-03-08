import Router from "next/router";
import Error from "../components/404 error/index";

const Custom404 = () => {
  const handleRoute = () => {
    setTimeout(() => {
      Router.push("/");
    }, 5000);
  };
  return (
    <>
      <Error />
      {/* {handleRoute()} */}
    </>
  );
};

export default Custom404;
