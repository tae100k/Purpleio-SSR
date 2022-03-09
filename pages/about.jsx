import React from "react";
import About from "../components/about/index";

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:9000/about");
  const data = await res.json();
  return {
    props: { card: data.card, company: data.company, iframe: data.iframe },
  };
};

export default function Home({ card, company, iframe }) {
  return (
    <>
      <About cards={card} company={company} iframe={iframe} />
    </>
  );
}
