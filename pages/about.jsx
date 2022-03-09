import React from "react";
import About from "../components/about/index";

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:9000/about");
  const data = await res.json();

  return {
    props: { title: data.title, content: data.content },
  };
};

export default function Home({ title, content }) {
  return (
    <>
      <About />
    </>
  );
}
