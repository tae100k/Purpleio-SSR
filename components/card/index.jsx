import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";

const CardGrid = ({ store, setIsClicked }) => {
  const open = () => setIsClicked(true);
  return (
    <>
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
