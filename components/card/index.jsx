import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";

import Modal from "../modal/index";

const CardGrid = ({ store }) => {
  const [isClicked, setIsClicked] = useState(false);
  const open = () => setIsClicked(true);

  return (
    <>
      <Modal isClicked={isClicked} setIsClicked={setIsClicked} store={store} />
      <Card onClick={open}>
        <Card.Img variant="top" src={store.thumb} />
        <Card.Body onClick={open}>
          <Card.Text>{store.name}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardGrid;
