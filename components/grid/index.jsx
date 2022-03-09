import React, { useEffect, useState } from "react";
import axios from "axios";
import style from "./styles.module.css";
import Card from "../card/index";

const Grid = () => {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:9000/stores").then((data) => {
      setStores(data.data);
    });
  }, []);
  return (
    <div className={style.totalWrapper}>
      <div className={style.mainWrapper}>
        {stores.map((store) => (
          <Card key={store.id} store={store} />
        ))}
      </div>
    </div>
  );
};

export default Grid;
