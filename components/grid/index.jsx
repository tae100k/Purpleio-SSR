import React, { useEffect, useState } from "react";
import axios from "axios";
import style from "./styles.module.css";
import Card from "../card/index";
import Modal from "../modal/index";

const Grid = () => {
  const [stores, setStores] = useState([]);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:9000/stores").then((data) => {
      setStores(data.data);
    });
  }, []);
  return (
    <>
      <Modal isClicked={isClicked} setIsClicked={setIsClicked} />
      <div className={style.mainWrapper}>
        {stores.map((store) => (
          <Card key={store.id} store={store} setIsClicked={setIsClicked} />
        ))}
      </div>
    </>
  );
};

export default Grid;
