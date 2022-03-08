import React, { useEffect, useState } from "react";
import axios from "axios";
import style from "./styles.module.css";
import Card from "../card/index";
import Modal from "../modal/index";

const Grid = () => {
  const [stores, setStores] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const open = () => setIsClicked(true);
  const close = () => setIsClicked(false);
  useEffect(() => {
    axios.get("http://localhost:9000/stores").then((data) => {
      setStores(data.data);
    });
  }, []);
  return (
    <>
      <div className={style.mainWrapper}>
        {stores.map((store) => (
          <Card key={store.id} store={store} />
        ))}
      </div>
    </>
  );
};

export default Grid;
