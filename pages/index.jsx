import axios from "axios";
import Card from "../components/card/index";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [stores, setStores] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:9000/stores").then((data) => {
      setStores(data.data);
    });
  }, []);

  return (
    <div>
      {stores.map((store) => (
        <Card key={store.id} store={store} />
      ))}
    </div>
  );
}
